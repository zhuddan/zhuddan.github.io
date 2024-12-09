---
tags: [electron, error]
---

# ipcRenderer 引入报错

```ts
mainWindow = new BrowserWindow({
  width: 1920,
  height: 1080,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    // highlight-start
    nodeIntegration: true,
    contextIsolation: false,
    // highlight-end
  },
})
```

引入方式

```js
import { ipcRenderer } from 'electron'
```

替换下面方式为

```js
const { ipcRenderer } = window.require('electron')
```
