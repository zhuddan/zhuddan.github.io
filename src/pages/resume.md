# 简历

## 简介

- 精通JavaScript，熟练使用各种流行的JavaScript库，掌握面向对象编程方法，深谙ES6+新特性和常用API。具备TypeScript及其类型系统的丰富经验，能够在项目中高效使用。

- 具有丰富的CSS布局经验，精通传统布局方法，熟练使用Less/Sass等CSS预处理器，并擅长应用TailwindCSS、UnoCSS等现代CSS框架。

- 熟练掌握常见的js框架，掌握Vue 2和Vue 3的响应式原理，熟练运用Vue全家桶(Vue + Vue Router + Vuex/Pinia + axios)，特别是在Vue 3的新特性如Setup/Composition API等方面具有深入理解和实战经验。精通React及其生态系统，包括React Router和Redux，并熟悉React Native开发。擅长使用主流UI组件库，如Element UI、Ant Design、Vant UI、Vuetify、MUI等。

- 熟悉微信小程序的开发流程，能够独立开发小程序应用，并精通使用uni-app进行跨平台开发，同时了解鸿蒙系统开发。

- 精通Vite、Webpack和Rollup等构建工具的使用及优化，并具备Node.js的开发能力，包括Node.js后端开发和Electron应用开发。

- 在气象项目开发中积累了丰富的经验，熟练使用OpenLayers、Leaflet、Cesium等地图开发技术，精通GeoServer地图服务，了解WebGL，熟悉主流移动浏览器的技术特点，擅长移动端H5开发。

- 具备优秀的沟通能力和积极的工作态度，拥有良好的团队协作精神。代码编写习惯良好，结构清晰、命名规范、逻辑性强；熟练使用各种脚本调试器和DOM查看器等工具定位问题。

## 项目

### 1. **中禄屠宰场ERP生产管理系统**

> **技术栈**: Vue 3 + Vite + TypeScript + uni-app + Electron
>
> 项目由生产管理后台系统、卖家系统(app)、操作员系统(app)、买家系统(H5网页)、称重系统和自助服务系统组成。
>
> - 微信公众号 `昆明中禄农副产品有限公司`

- **后台系统：**

  - 使用Vue全家桶搭建，利用动态菜单进行权限管理，封装公共组件和常用数据缓存。
  - 开发了`ExcelParser`解析预览插件，实现表格在线预览，以及统一管理打印功能。
  - 集成身份证读卡器和IC读卡器，实现身份信息识别和IC卡信息加密处理。

- **买卖方系统：**

  - 使用uni-app + Vite + TS开发，实现跨端应用(app和H5)。
  - 使用`unplugin-auto-import/unplugin-vue-components`自动导入模块和组件。
  - 使用`Pinia`进行状态管理，使用Composition API进行逻辑封装。
  - 封装定时任务更新app，处理数据缓存。
  - 开发小票打印和NFC刷卡功能。

- **称重系统：**

  - 使用`Electron`和`Vite`搭建，主要功能是实现电子磅秤的数据采集和实时传输。
  - 使用`SerialPort`库进行串口通信，确保与磅秤设备的稳定连接。
  - 系统设计了串口数据的监听机制，能够处理串口打开、关闭、数据接收、错误处理等操作。
  - 通过本地存储功能，系统能保存设备配置信息。

- **自助服务系统：**
  - 基于`Electron`和`Forge`开发，集成了多种硬件接口，提供一站式自助服务。
  - 系统通过`Koffi`库对接`C语言动态链接库`，实现对IC卡、身份证的读取，并支持扫码器的实时监控和数据采集。
  - 该系统能够识别并处理用户操作，如刷卡、扫码等，并提供无预览静默打印功能，通过预先配置的模板自动打印凭据和标签。

### 2. **云上托育**

> **技术栈**: Vue 3 + Vite + TypeScript + uni-app + pnpm + monorepo + unocss
>
> 该项目包括系统后台、云上托育小程序（园长端、教师端、家长端），以及公众号H5。
>
> - 微信公众号 `云上托育`
> - 微信小程序 `云上托育园长端`、`云上托育教师端`、`云上托育家长端`

- **后台系统：**

  - 使用Vue全家桶搭建。
  - 通过动态菜单进行权限管理，封装公共组件和常用数据缓存。
  - 开发海报模板功能，实现海报图片的动态配置和实时预览。

- **小程序：**

  - 使用`pnpm`搭建`monorepo`工作区，实现跨项目（小程序）的组件和逻辑复用。
  - 对接`mqtt`实现物联网通讯，结合echarts图表，实时显示环境监测仪/空气质量监测仪器的数据。
  - 封装`canvas-draw`类，结合海报模板功能，使用canvas绘制并分享图片（如园区课程表、食谱等）。
  - 封装全局蓝牙管理状态（pinia），结合小程序蓝牙模块，实时同步蓝牙体温枪测温数据到小程序。
  - 封装`CloudWebSocket`类，结合小程序Socket功能，实现消息推送，及时提示代办事项和处理结果。
  - 对接视频监控流，提供实时监控功能。
  - 封装多个插件简化工作流程：
    - `iconfont`插件：动态更新iconfont组件及其类型声明。
    - `global-components-dts`插件：自动生成monorepo子包全局组件的类型声明。
    - `upload-static`插件：自动同步本地静态资源到线上FTP服务器。
    - `mini-release`插件：实现小程序的自动部署到微信服务器。

- **公众号H5：**
  - 使用Vue 3和unocss搭建。
  - 封装表单校验功能，主要用于家长报名。

### 3. **通用航空器飞行气象保障服务系统**

> **技术栈**: Vue 3 + Vite + TypeScript + Vuetify + Leaflet.js + Cesium.js + D3.js
>
> 该项目由系统后台和用户操作端组成。(内部使用系统)

- **后台系统：**

  - 使用Vue全家桶搭建。
  - 开发定时任务推送功能，实现预报数据状态的实时同步。

  - **用户操作端：**
  - 使用`Vuetify`搭建页面，提供一致的UI设计。
  - 使用`unplugin-vue-router`实现文件路由管理，提升开发效率。
  - 使用`vite-plugin-vue-layouts`实现公共页面布局，结合`provide`向子页面注入二维地图和三维地图组件。
  - 封装气象格点数据的二进制加密解密算法，并使用`pako`和`jszip`对气象数据进行压缩与解压操作，提高数据传输效率。
  - 封装`Grid`气象格点数据类，简化格点数据的读取与绘制操作。
  - 使用`Geoserver`发布地图图层（包括矢量图、色斑图）和高程数据，为地图展示提供基础数据支持。
  - 基于`Leaflet.js`构建二维地图场景，基于`Cesium.js`构建三维地图场景，并对接`Geoserver`的高程数据，实现三维地形显示。
  - 利用`keep-alive`特性，实现二维和三维地图之间的快速切换和数据缓存，提升用户体验。
  - 对接`航空报文`和`探空报文`数据，进行报文解析和展示。
  - 封装图层管理类和任务队列类，实现图层的动态加载与流畅切换，不阻塞UI渲染。
  - 基于`Leaflet.js`封装`canvas图层组件`，结合`chroma-js`与任务队列，实现气象色斑图的绘制。
  - 基于`canvas图层组件`封装`风羽图`，用于展示风速与风向信息。
  - 使用`D3.js(d3-contour.js)`实现等值线的绘制，提供精确的气象数据展示。
  - 结合`wind-layer`实现风场流线图层，展示风场的动态变化。
  - 封装三维云图类，结合`canvas`实现三维云图的展示。
  - 使用`WebWorker`和`[MCB算法](https://en.wikipedia.org/wiki/Marching_cubes)`实现三维雷达图的展示，提供更丰富的气象数据可视化。

### 4. **星光华人通手机充值系统**

> **技术栈**: React + Vite + TypeScript + TailwindCSS + @tanstack/react-query + Zustand
>
> 该项目为微信公众号网页。请使用微信搜索`星光华人通`公众号进行查看。

- **公众号网页**

- 使用 `Vite` + `React` + `TypeScript` 构建高性能的移动端 Web 应用，采用 `TailwindCSS` 实现响应式布局。
- 基于 `@tanstack/react-query` 封装数据请求层，配合 `react-loading-skeleton` 实现骨架屏，优化首屏加载体验。
- 使用 `Zustand` 管理全局状态，实现全局数据的统一管理。
- 集成 `weixin-js-sdk`，实现微信授权登录、支付等核心功能。
- 实现图片资源懒加载和长列表性能优化，使用 `react-lazy-load-image-component` 减少并发请求。
- 基于 `react-simple-pull-to-refresh` 封装下拉刷新组件，提升用户交互体验。
- 本地开发：配置 `vite-plugin-mock` + `Mock.js` 实现数据 Mock。
- 自动化部署：使用 `GitHub Actions` + `ftp-action` 实现持续集成。

## 个人评价

除了上述项目之外，我还开发过基于`Pixi.js/CreateJS`的H5小游戏，搭建过商城系统，并且研究过`Node.js`服务端，编写过`Koa`服务端，涉足过`Nuxt.js`等全栈开发。

尽管还有许多年久失修、难以追溯的项目未列出，我依然对这些经历充满热情。

我非常喜欢 `TypeScript`、`Vue`和`React`，并且乐于接触新技术。我热衷于钻研问题，喜欢编写各种小工具来提升开发效率。

未来，我希望在某一个具体的技术方向深入研究并持续发展。

## 参考链接

- [github](https://github.com/zhuddan)
- [npmjs](https://www.npmjs.com/~zhuddan)
- [zhuddan.github.io](https://zhuddan.github.io/)
