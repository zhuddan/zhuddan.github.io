ipcRenderer 引入报错

前提
``` ts {6,7}
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

```

引入方式
```js
import { ipcRenderer } from 'electron'
```
替换下面方式为
```js
const { ipcRenderer } = window.require('electron');
```