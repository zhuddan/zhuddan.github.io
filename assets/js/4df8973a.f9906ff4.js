"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[7249],{5054:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"mini/mqtt","title":"mqtt","description":"install","source":"@site/archived/mini/mqtt.md","sourceDirName":"mini","slug":"/mini/mqtt","permalink":"/docs/mini/mqtt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"To be Improved","permalink":"/docs/tags/to-be-improved"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"tags":["To be Improved"]},"sidebar":"archived","previous":{"title":"socket","permalink":"/docs/mini/socket"},"next":{"title":"echarts","permalink":"/docs/mini/echarts"}}');var o=t(6070),s=t(2790);const c={sidebar_position:4,tags:["To be Improved"]},r="mqtt",l={},a=[{value:"install",id:"install",level:2},{value:"declaration",id:"declaration",level:2},{value:"use",id:"use",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"mqtt",children:"mqtt"})}),"\n",(0,o.jsx)(e.h2,{id:"install",children:"install"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"npm i mqtt@3.0.0\n"})}),"\n",(0,o.jsx)(e.h2,{id:"declaration",children:"declaration"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="mqtt.min.d.ts"',children:"import * as mqtt from 'mqtt'\n\nexport declare module './mqtt.min.js' {\n  export = mqtt\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"use",children:"use"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { EventEmitter } from '@cloud/shared'\n// highlight-start\nimport mqtt from 'mqtt/dist/mqtt.min.js'\n// highlight-end\n\nexport class Mq extends EventEmitter<{\n  message: (deviceNo: string, data: any) => void\n}> {\n  client: mqtt.MqttClient | null = null\n  topic: string[] = []\n  init(options: mqtt.IClientOptions, topic: string[]) {\n    if (!this.client) {\n      console.log('mqtt init \ud83d\ude80\ud83d\ude80\ud83d\ude80\ud83d\ude80 client init')\n      this.client = mqtt.connect(MQTT_URL, options)\n      this.topic = topic\n      this.client.on('error', (err) => {\n        console.log(err, 'err')\n      })\n\n      this.client.on('connect', () => {\n        console.log('topic', topic)\n        this.client?.subscribe(topic, (e) => {\n          console.log(`\u8ba2\u9605\u4e86\u4e3b\u98983 ${topic.join('\u548c')}`)\n          console.log('\u8ba2\u9605\u4e86\u4e3b\u98984 error', [e])\n        })\n      })\n      // eslint-disable-next-line node/prefer-global/buffer\n      const handleMsg = (topic: string, message: Buffer) => {\n        const data = JSON.parse(message.toString())\n        if (Object.keys(data).length !== 0) {\n          const deviceNo = topic.replace('/environment/', '')\n          const obj = JSON.parse(message.toString())\n          const pm25 = obj.pm25\n          const co2 = obj.co2\n          console.log(`MQ ${pm25 ? 'pro \u7248\u672c pm25' : '\u9752\u6625\u7248\u672c co2'}`, pm25 ? pm25.val : co2.val, pm25 ? pm25.info : co2.info)\n          this.emit('message', deviceNo, obj)\n        }\n      }\n      this.client?.addListener('message', handleMsg)\n    }\n    else {\n      console.log(' client \u5df2\u7ecf\u5b58\u5728\u4e86')\n      const _topic = this.topic.filter(e => !topic.includes(e))\n      console.log('\u672a\u8ba2\u9605', _topic)\n      if (_topic.length) {\n        this.client?.subscribe(_topic, (e) => {\n          console.log(`\u8865\u5145 \u8ba2\u9605\u4e86\u4e3b\u98985 ${_topic.join('\u548c')}`)\n          console.log('\u8865\u5145 \u8ba2\u9605\u4e86\u4e3b\u98986 error', [e])\n        })\n      }\n    }\n  }\n\n  resetClient() {\n    console.log('resetClient >>> ')\n    if (this.client) {\n      this.client.end()\n      this.client = null\n      this.topic = []\n      this.reset()\n    }\n  }\n}\n\nexport const MQ = new Mq()\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},2790:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(758);const o={},s=i.createContext(o);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);