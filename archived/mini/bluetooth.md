---
sidebar_position: 2
tags: ['To be Improved']
---

# 蓝牙模块

以 `uni-app` 为例

```ts
import { hideLoading, isAndroid, showLoading, showToastError, throttle } from '@cloud/shared'
import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'

export interface DeviceType extends UniNamespace.BluetoothDeviceInfo {
  macAddress?: string
}
/**
 * 处理错误
 * @param e
 */
function handleError(e: any) {
  const err = e?.errMsg || e?.msg || e?.message || ''
  showToastError(err)
  throw e
}

/**
 *
 * @param buffer ArrayBuffer转16进度字符串示例
 */
function ab2hex(buffer: any) {
  const hexArr = Array.prototype.map.call(new Uint8Array(buffer), (bit) => {
    return `00${bit.toString(16)}`.slice(-2)
  })
  return hexArr.join('')
}

export const useBluetoothStore = defineStore('bluetooth', () => {
  /**
   * 体温枪默认名字
   */
  const DEVICE_NAME = 'BLUETOOTH BP'
  /**
   * 平台
   */
  const platform = uni.getSystemInfoSync().platform
  /**
   * 是否是开发环境
   */
  const isDevtools = platform === 'devtools'

  /**
   * 是否连接
   */
  const connected = ref(false)
  /**
   * 设备列表
   */

  const devices = ref<DeviceType[]>([])

  const macRecord = reactive<Record<string, string>>({})

  /**
   * 设备 按照信号强度排序 和 设备名称排序
   */
  const devicesSortBySignal = computed(() => {
    // console.log('devices.value.map(e => e.name)', devices.value.map(e => e.name));
    return devices.value.sort((a, b) => Math.abs(a.RSSI) - Math.abs(b.RSSI))
      .filter((d) => {
        return (d.name?.toLocaleUpperCase() === DEVICE_NAME) || (d.localName?.toLocaleUpperCase() === DEVICE_NAME)
      })
      .sort((a, b) => {
        if ((a.name).toLocaleUpperCase() === DEVICE_NAME && b.name.toLocaleUpperCase() !== DEVICE_NAME) {
          return -1
        }
        else if ((a.name).toLocaleUpperCase() !== DEVICE_NAME && b.name.toLocaleUpperCase() === DEVICE_NAME) {
          return 1
        }
        else {
          return 0
        }
      })
      .map((e) => {
        return {
          ...e,
          signal: Math.abs(100 + e.RSSI),
        }
      })
  })

  /**
   * 蓝牙权限
   */
  const bluetoothPermissions = ref(false)

  /**
   * 设备蓝牙是打开？
   */
  const bluetoothAvailable = ref(false)
  /**
   * 已链接的设备
   */
  const connectedDevice = ref<DeviceType>()
  /**
   * 是否扫描
   */
  const discoveryStarted = ref(false)
  /**
   * 特征值列表
   */
  const chs = ref<{ uuid: string, value: any }[]>([])
  /**
   * 是否可以写入
   */
  const canWrite = ref(false)

  /**
   * 获取蓝牙授权
   * @param authorize 是否需要跳转授权 true 调用 uni.authorize
   */
  function getBluetoothPermissions(authorize = false) {
    return uni.getSetting()
      .then((res) => {
      // 未授权状态
        const authSetting = res.authSetting as unknown as Record<string, boolean>
        // eslint-disable-next-line no-prototype-builtins
        if (authSetting.hasOwnProperty('scope.bluetooth')
          && authSetting['scope.bluetooth'] === true) {
          bluetoothPermissions.value = true
        }
        else {
          if (authorize) {
            console.log('未授权 向 用户发起授权请求')
            return uni.authorize({
              scope: 'scope.bluetooth',
            })
          }
          else {
            bluetoothPermissions.value = false
            console.log('false 111')
          }
        }
      })
      .then((res) => {
        console.log('getBluetoothPermissions [then] authorize', res)
        /**
         * uni.authorize 成功！
         */
        if (res !== undefined) {
          bluetoothPermissions.value = true
        }
      })
      .catch((error) => {
        console.log('getBluetoothPermissions [error]', error)
        bluetoothPermissions.value = false
      })
  }

  /**
   * 打开授权设置
   */
  function authorizeBluetooth() {
    uni.openSetting({
      withSubscriptions: true,
    })
  }

  /**
   * 开始扫描
   */
  async function openBluetoothAdapter() {
    /**
     * 初始化蓝牙模块
     */
    console.log('[初始化蓝牙模块]')
    return uni.openBluetoothAdapter()
      .then(() => {
        console.log('[开始搜寻附近的蓝牙外围设备]')
        return startBluetoothDevicesDiscovery()
      })
      .catch((e) => {
        console.log('[初始化蓝牙模块] [开始搜寻附近的蓝牙外围设备] error', e)
        console.log(e.errno)
        if (e.errCode === 10001) {
          bluetoothAvailable.value = false
          watchBluetoothAdapterStateChange((res) => {
            if (res.available) {
              return startBluetoothDevicesDiscovery()
            }
            else {
              resetStatus()
            }
          })
        }
        else if (e.errno === 1509008) {
          closeBluetoothAdapter()
          throw new Error('请打开[微信]位置权限后重试')
        }
        else {
          handleError(e)
        }
      })
  }
  /**
   *  开始搜寻附近的蓝牙外围设备
   */
  function startBluetoothDevicesDiscovery() {
    console.log('开始搜寻附近的蓝牙外围设备 >>> 当前扫描状态', discoveryStarted.value)
    if (discoveryStarted.value)
      return
    discoveryStarted.value = true
    console.log('开始搜寻附近的蓝牙外围设备 >>> start')
    return uni.stopBluetoothDevicesDiscovery()
      .then(() => {
        return uni.startBluetoothDevicesDiscovery({
          allowDuplicatesKey: true,
        })
      })
      .then((res) => {
        console.log('开始搜寻附近的蓝牙外围设备 success', res)
        onBluetoothDeviceFound()
      })
  }

  /**
   * 监听搜索到新设备的事件
   */
  function onBluetoothDeviceFound() {
    uni.onBluetoothDeviceFound((res) => {
      for (let index = 0; index < res.devices.length; index++) {
        const device = res.devices[index]

        if (!device.name && !device.localName)
          break
        const macAddress = macRecord[device.deviceId]
        const foundDevices = [...devices.value]
        const idx = foundDevices
          .map(e => e.deviceId)
          .findIndex(deviceId => deviceId === device.deviceId)
        /**
         * 添加蓝牙
         */
        if (idx === -1) {
          devices.value.push({
            ...device,
            macAddress,
          })
        }
        else {
          devices.value[idx] = {
            ...device,
            macAddress,
          }
        }
      }
    })
  }
  /**
   * 停止扫描
   */
  async function stopBluetoothDevicesDiscovery() {
    try {
      await uni.stopBluetoothDevicesDiscovery()
      discoveryStarted.value = false
      console.log('停止扫描')
    }
    catch (error) {
      handleError(error)
    }
  }
  /**
   * 打开或者开启蓝牙扫描
   */
  async function openOrCloseDevicesDiscovery() {
    try {
      if (discoveryStarted.value) {
        console.log('[打开或者开启蓝牙扫描]', '停止')
        await stopBluetoothDevicesDiscovery()
      }
      else {
        console.log('[打开或者开启蓝牙扫描]', '打开')
        await openBluetoothAdapter()
      }
    }
    catch (error) {
      console.log('打开或者开启蓝牙扫描', error)
      handleError(error)
    }
  }

  /**
   * 连接低功耗蓝牙设备
   * @param ds
   */
  async function createBLEConnection(ds: DeviceType, autoGetBLEDeviceServices = true) {
    console.log('连接低功耗蓝牙设备')
    return closeBLEConnection()
      .then(() => {
        console.log('先停止扫描')
        return stopBluetoothDevicesDiscovery()
      })
      .then(() => {
        return ds.deviceId
      })
      .then((deviceId) => {
        console.log('createBLEConnection 连接低功耗蓝牙设备')
        return uni.createBLEConnection({ deviceId })
      })
      .then(() => {
        connectedDevice.value = ds
        connected.value = true
        autoGetBLEDeviceServices && getBLEDeviceServices(ds.deviceId)
        return ds.deviceId
      })
      .catch((e) => {
        handleError(e)
      })
  }

  /**
   * 监听蓝牙低功耗连接状态改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
   */
  function watchBLEConnectionStateChange() {
    return uni.onBLEConnectionStateChange((res) => {
      console.log('==> watchBLEConnectionStateChange', res)
      if (res.connected === false) {
        connected.value = false
        if (connectedDevice.value) {
          connectedDevice.value = undefined
          showToastError('设备已断开连接')
        }
        // closeBluetoothAdapter();
      }
    })
  }

  /**
   * 获取蓝牙设备的所有服务
   * @param deviceId
   */
  function getBLEDeviceServices(deviceId: string) {
    return uni.getBLEDeviceServices({
      deviceId,
    }).then((res) => {
      for (let i = 0; i < res.services.length; i++) {
        if (res.services[i].isPrimary) {
          getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
          return
        }
      }
    }).catch((e) => {
      handleError(e)
    })
  }

  /**
   * 获取蓝牙设备指定服务中所有特征值
   * @param deviceId
   * @param serviceId
   */
  function getBLEDeviceCharacteristics(deviceId: string, serviceId: string) {
    uni.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
    }).then((res) => {
      for (let i = 0; i < res.characteristics.length; i++) {
        const item = res.characteristics[i]
        if (item.properties.read) {
          uni
            .readBLECharacteristicValue({
              deviceId,
              serviceId,
              characteristicId: item.uuid,
            })
        }

        if (item.properties.notify || item.properties.indicate) {
          uni.notifyBLECharacteristicValueChange({
            deviceId,
            serviceId,
            characteristicId: item.uuid,
            state: true,
          })
        }
      }
    }).catch((e) => {
      handleError(e)
    })
  }

  /**
   * 断开与低功耗蓝牙设备的连接
   */
  function closeBLEConnection() {
    return new Promise((resolve, reject) => {
      if (connectedDevice.value) {
        uni.closeBLEConnection({
          deviceId: connectedDevice.value.deviceId,
        }).then(() => {
          connectedDevice.value = undefined
          chs.value = []
          canWrite.value = false
          console.log('断开与低功耗蓝牙设备的连接 >>>  success')
          resolve('')
        }).catch((e) => {
          reject(e)
        })
      }
      else {
        console.log('断开与低功耗蓝牙设备的连接 >>> 没有连接的设备 直接断开')
        resolve('')
      }
    })
  }

  /**
   * 监听蓝牙低功耗设备的特征值变化事件
   */
  function watchBLECharacteristicValueChange() {
    uni.onBLECharacteristicValueChange((characteristic) => {
      const idx = chs.value.findIndex(
        e => e.uuid === characteristic.characteristicId,
      )
      if (idx === -1) {
        chs.value.push({
          uuid: characteristic.characteristicId,
          value: ab2hex(characteristic.value),
        })
      }
      else {
        chs.value[idx] = {
          uuid: characteristic.characteristicId,
          value: ab2hex(characteristic.value),
        }
      }
    })
  }

  /**
   *  断开或者连接蓝牙设备
   * @param _device
   */
  async function handleToggleBluetoothDevice(_device: DeviceType) {
    // 蓝牙已授权 且 搜寻到设备列表 连接设备
    showLoading()
    try {
      if (connectedDevice.value) {
        await closeBLEConnection()
      }
      else {
        await createBLEConnection(_device)
      }
      hideLoading()
    }
    catch (e: any) {
      if (e?.errCode === 10003) {
        showToastError('设备连接失败！')
      }
      else {
        handleError(e)
      }
    }
  }

  /**
   * 监听蓝牙特征值变化
   * @param cb
   */
  function onBLECharacteristicValueChange(cb: (data: { uuid: string, value: any }) => void) {
    uni.onBLECharacteristicValueChange((characteristic) => {
      cb?.({
        uuid: characteristic.characteristicId,
        value: ab2hex(characteristic.value),
      })
    })
  }

  /**
   * 结束
   */
  function closeBluetoothAdapter() {
    console.log('结束')
    uni.offBluetoothDeviceFound()
    uni.offBluetoothAdapterStateChange()
    uni.closeBluetoothAdapter()
    resetStatus()
  }

  function resetStatus() {
    console.log('resetStatus >>> ')
    bluetoothAvailable.value = false
    connectedDevice.value = undefined
    discoveryStarted.value = false
    chs.value = []
    canWrite.value = false
  }

  /**
   * 监听蓝牙适配器状态变化事件 断开
   */
  function watchBluetoothAdapterStateChange(cb?: (res: UniApp.OnBluetoothAdapterStateChangeResult) => void) {
    uni.offBluetoothAdapterStateChange()
    uni.onBluetoothAdapterStateChange((res) => {
      console.log('watchBluetoothAdapterStateChange')
      if (!res.available) {
        resetStatus()
      }
      else {
        console.log('watchBluetoothAdapterStateChange ==> bluetoothAvailable.value >>> true')
        bluetoothAvailable.value = true
      }
      cb?.(res)
    })
  }

  function getMacAddr() {
    if (isAndroid)
      return
    console.log(['getMacAddr getMacAddr getMacAddr getMacAddr getMacAddr getMacAddr getMacAddr getMacAddr '])
    uni.getBluetoothDevices().then((res) => {
      const _devices = res.devices.filter(d => d.name.toLocaleUpperCase() === DEVICE_NAME)
      console.log('_devices', _devices)
      for (let i = 0; i < _devices.length; i++) {
        const e = _devices[i]
        // if (macRecord[e.deviceId]) {
        //   console.log(macRecord[e.deviceId], 'break');
        //   break;
        // }

        if (e.advertisData) {
          const byteArray = new Uint8Array(e.advertisData)
          const macAddress = Array.from(byteArray)
            .map(byte => byte.toString(16).toUpperCase().padStart(2, '0'))
            .reverse()
            .join(':')

          macRecord[e.deviceId] = macAddress
          const index = devices.value.findIndex(d => d.deviceId === e.deviceId)
          if (index !== -1) {
            devices.value[index].macAddress = macAddress
          }
        }
      }
    })
  }

  function init() {
    watchBluetoothAdapterStateChange()

    watchBLECharacteristicValueChange()

    watchBLEConnectionStateChange()
  }

  const _getMacAddr = throttle(getMacAddr, 500)
  watch(devices.value, _getMacAddr, { deep: true, immediate: true })

  init()

  return {
    /**
     * 开始扫描蓝牙
     */
    openBluetoothAdapter,
    /**
     * 停止扫描蓝牙
     */
    stopBluetoothDevicesDiscovery,
    /**
     * 结束蓝牙流程
     */
    closeBluetoothAdapter,
    /**
     * 连接低功耗蓝牙设备
     */
    createBLEConnection,
    /**
     * 断开与低功耗蓝牙设备的连接
     */
    closeBLEConnection,
    /**
     * 获取蓝牙设备的所有服务
     */
    getBLEDeviceServices,
    /**
     * 打开或者关闭蓝牙扫描
     */
    openOrCloseDevicesDiscovery,
    /**
     * 获取蓝牙授权
     * @param authorize 是否需要跳转授权 true 调用 uni.authorize
     */
    getBluetoothPermissions,
    /**
     * 打开授权设置
     */
    authorizeBluetooth,
    /**
     *  断开或者连接蓝牙设备
     * @param _device
     */
    handleToggleBluetoothDevice,
    /**
     * 监听低功耗蓝牙设备的特征值变化事件
     */
    onBLECharacteristicValueChange,
    /**
     * 蓝牙权限
     */
    bluetoothPermissions,

    /**
     * 设备蓝牙是打开？
     */
    bluetoothAvailable,
    /**
     * 设备 按照信号强度排序
     */
    devicesSortBySignal,
    /**
     * 已链接的设备
     */
    connectedDevice,
    /**
     * 特征值列表
     */
    chs,
    /**
     * 设备
     */
    devices,
    /**
     * 是否模拟器
     */
    isDevtools,
    /**
     * 是否连接
     */
    connected,
    /**
     * 是否扫描ing
     */
    discoveryStarted,
  }
})
```
