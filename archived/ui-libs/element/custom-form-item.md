---
tags:
  - Vue2
  - Element-UI
---

# 自定义表单组件

主要目的是使用非element表单组件可以触发`el-form-item`的表单操作(校验或者清除校验)

> 通过`inject`获取到`elFormItem`，监听当前组件的`model-value`的`change`事件,使用`this.dispatch('ElFormItem', 'el.form.change')`触发表单中`rules`的`change` >

```js
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
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName
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
