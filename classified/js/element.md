```js
/**
 * @description el-form-item mixins 主要目的是使用非element表单组件可以触发el-form-item的校验或者清除校验
 *              通过inject获取到elFormItem，监听当前组件的model-value的change事件，
 *              使用this.dispatch('ElFormItem', 'el.form.change')触发表单中rules的change事件
 */

export default {
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}

```

  1，下载新版chrome浏览器
  2，打开浏览器输入：chrome://flags/
  3，搜索框（Search flags）输入print
  4，看到Enable New Print Preview UI Layout,选择Disabled，关闭浏览器
  5，在桌面chrome图标右键--属性--目标，后面添加 --kiosk-printing,确定
