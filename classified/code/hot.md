```js
export default {
  mounted() {
    this.initMap().then(() => {
      this.getServiceHeatmap()
    })
 },
methods: {
   initMap() {
      // 初始化地图
      return new Promise(resolve => {
        // 创建一个瓦片地图,引用高德的瓦片地图
        const baseLayer = L.tileLayer(
         'http://webrd0{s}.is.autonavi.com/appmaptilelang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
          attribution: '...',
          maxZoom: 21,
          subdomains: ["1", "2", "3", "4"]
        }
        );
        // 创建一个地图对象
        const map = new L.Map('localHeatmap', {
          center: new L.LatLng(30.657453, 104.065751), // 默认中心点
          attributionControl: false, // 版权控件
          zoomControl: false, //缩放控件
          zoom: 9, // 初始zoom
          minZoom: 9, // 最小zoom
          maxZoom: 18, // 最大zoom
          layers: [baseLayer] // 使用的瓦片地图
        });
        this.localHeatmap = map
        //定义一个比例尺控件
        L.control.scale(
          {
            position: 'topright',
            imperial: false,
            maxWidth: 100
          }).addTo(this.localHeatmap);
        // zoom改变时执行函数
        this.addHeatMapEvent()
        resolve()
        // }
      })
    },
    /** 添加zoom变化事件*/
    addHeatMapEvent() {
      let _this = this
      _this.localHeatmap.on('zoomend', (e) => {
        // 执行热力图绘制函数
        _this.changeHeatmapParams(_this)
      })
    },
     /** zoom变化改变热力图参数*/
    changeHeatmapParams(self) {
      // 获取当前zoom
      const zoomLevel = this.localHeatmap.getZoom()
        // 判断当前有热力图则先清除
      if (self.heatmap) {
        self.localHeatmap.removeLayer(self.heatmap)
      }
        // 定义热力图半径
      let newRadius
        // 定义热力图最大强度
      let maxNum
      switch (zoomLevel) {
        case 6:
          maxNum = 960
          newRadius = 10
          break
        case 7:
          maxNum = 960
          newRadius = 10
          break
        case 8:
          maxNum = 960
          newRadius = 10
          break
        case 9:
          maxNum = 960
          newRadius = 10
          break
        case 10:
          maxNum = 480
          newRadius = 15
          break
        case 11:
          maxNum = 240
          newRadius = 20
          break
        case 12:
          maxNum = 120
          newRadius = 25
          break
        case 13:
          maxNum = 60
          newRadius = 30
          break
        case 14:
          maxNum = 30
          newRadius = 35
          break
        case 15:
          maxNum = 15
          newRadius = 40
          break
        case 16:
          maxNum = 8
          newRadius = 45
          break
        case 17:
          maxNum = 8
          newRadius = 50
          break
        case 18:
          maxNum = 8
          newRadius = 55
          break
        default:
          maxNum = 8
          newRadius = 55
          break
      }
        // 将后台数据转成热力图需要的数据
      const hdata = self.heatmapData.map(v => {
        return [
          v.lat,
          v.lng,
          v.count
        ]
      })
        // 创建热力图
      self.heatmap = L.heatLayer(hdata, {
        radius: newRadius, // 半径
        max: maxNum, // 最大强度
        minOpacity: 0.4, // 最小透明度
        gradient: {
          // 热力值的颜色设置，范围是0-1，可以分段设置颜色
          0.5: 'blue',
          0.65: 'rgb(117, 211, 248)',
          0.7: 'rgb(0, 255, 0)',
          0.9: '#ffea00',
          1.0: 'red',
        },
      }).addTo(self.localHeatmap);
      // 定位至第一个热力图的位置
      if (self.heatmapData.length) {
        self.localHeatmap.setView([self.heatmapData[0]?.lat, self.heatmapData[0]?.lng], 10);
      }
    },
    // 处理热力图数据判断是否需要分页加载多余热力图数据
    drawHeatmap(data, totalPage,api,params) {
      const self = this
      // 处理接口返回的数据
      this.heatmapData = data.map(v => {
        return {
          lat: v.a,
          lng: v.o,
          count: v.c,
        }
      })
      this.changeHeatmapParams(this)
      if (totalPage > 1) {
        self.getHeatmapDataByPage(totalPage, api, params)
      }
    },
    async getHeatmapDataByPage(totalPage, api, params) {
      params.pageNumber += 1
      const res = await api(params)
      if (res && res.status === 0) {
        // const heatmapData = []
        const data = res.data.list
        const arr = data.map(v => {
          return {
            lat: v.a,
            lng: v.o,
            count: v.c,
          }
          this.heatmapData = this.heatmapData.concat(arr)
        }
        this.changeHeatmapParams(this)
        if (params.pageNumber < totalPage) {
          this.getHeatmapDataByPage(totalPage, api, params)
        }
      }
    },
    async getServiceHeatmap() {
      const params = {
        pageNumber: 1,
        pageSize: 10000,
        // 其他参数
      }
      const res = await api(params)
      if (res && res.status === 0) {
        const data = res.data.list
        const totalPage = res.data.totalPage
        this.drawHeatmap(data, totalPage, api, params)
      }
    }
}
```
