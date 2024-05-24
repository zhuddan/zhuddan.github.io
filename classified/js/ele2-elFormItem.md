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
