# 简介

- 精通JavaScript，熟练使用各种流行的JavaScript库，掌握面向对象编程方法，深谙ES6+新特性和常用API。具备TypeScript及其类型系统的丰富经验，能够在项目中高效使用。

- 具有丰富的CSS布局经验，精通传统布局方法，熟练使用Less/Sass等CSS预处理器，并擅长应用TailwindCSS、UnoCSS等现代CSS框架。

- 熟练掌握常见的js框架，掌握Vue 2和Vue 3的响应式原理，熟练运用Vue全家桶(Vue + Vue Router + Vuex/Pinia + axios)，特别是在Vue 3的新特性如Setup/Composition API等方面具有深入理解和实战经验。精通React及其生态系统，包括React Router和Redux，并熟悉React Native开发。擅长使用主流UI组件库，如Element UI、Ant Design、Vant UI、Vuetify、MUI等。

- 熟悉微信小程序的开发流程，能够独立开发小程序应用，并精通使用uni-app进行跨平台开发，同时了解鸿蒙系统开发。

- 精通Vite、Webpack和Rollup等构建工具的使用及优化，并具备Node.js的开发能力，包括Node.js后端开发和Electron应用开发。

- 在气象项目开发中积累了丰富的经验，熟练使用OpenLayers、Leaflet、Cesium等地图开发技术，精通GeoServer地图服务，了解WebGL，熟悉主流移动浏览器的技术特点，擅长移动端H5开发。

- 具备优秀的沟通能力和积极的工作态度，拥有良好的团队协作精神。代码编写习惯良好，结构清晰、命名规范、逻辑性强；熟练使用各种脚本调试器和DOM查看器等工具定位问题。

# 项目

1. **中禄屠宰场ERP生产管理系统** (Vue 3 + Vite + TypeScript + uni-app + Electron)

   项目由生产管理后台系统、卖家系统(app)、操作员系统(app)、买家系统(H5网页)、称重系统和自助服务系统组成。

   - **后台系统：** 使用Vue全家桶搭建，利用动态菜单进行权限管理，封装公共组件和常用数据缓存。开发了Excel解析预览插件，实现表格在线预览，以及统一管理打印功能。集成身份证读卡器和IC读卡器，实现身份信息识别和IC卡信息加密处理。

   - **买卖方系统：** 使用uni-app + Vite + TS开发，实现跨端应用(app和H5)。使用unplugin-auto-import/unplugin-vue-components自动导入模块和组件，使用Pinia进行状态管理，使用Composition API进行逻辑封装。封装定时任务更新app，处理数据缓存，开发小票打印和NFC刷卡功能。

   - **称重系统：** 使用Electron和Vite搭建，主要功能是实现电子磅秤的数据采集和实时传输。使用SerialPort库进行串口通信，确保与磅秤设备的稳定连接。系统设计了串口数据的监听机制，能够处理串口打开、关闭、数据接收、错误处理等操作。通过本地存储功能，系统能保存设备配置信息。

   - **自助服务系统：** 基于Electron和Forge开发，集成了多种硬件接口，提供一站式自助服务。系统通过Koffi库对接C语言动态链接库，实现对IC卡、身份证的读取，并支持扫码器的实时监控和数据采集。该系统能够识别并处理用户操作，如刷卡、扫码等，并提供无预览静默打印功能，通过预先配置的模板自动打印凭据和标签。

2. **云上托育** (Vue 3 + Vite + TypeScript + uni-app + pnpm + monorepo + unocss)
   
   项目由系统后台、云上托育小程序（园长端、教师端、家长端）构成，和公众号h5组成

   - **后台系统：** 使用Vue全家桶搭建，利用动态菜单进行权限管理，封装公共组件和常用数据缓存。开发了海报模板功能，实现海报图片的动态配置和实时预览功能。
    
   - **小程序：** 使用pnpm搭建工作区项目(monorepo)，实现跨项目(小程序)的组件和逻辑复用。对接mqtt实现物联网通讯, 实时显示环境监测仪/空气质量监测仪器的实时数据，在结合echarts动态展示给用户。封装canvas-draw类结合海报模板功能使用canvas绘制海报图片。封装全局蓝牙管理状态(pinia)，结合小程序蓝牙模块，实现对接蓝牙体温枪
