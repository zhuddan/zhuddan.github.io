下载 [nvm](https://github.com/nvm-sh/nvm)

```shell
nvm install 14.21.3

nvm install 16.20.2

nvm install 18.19.0

nvm install 20.11.0
```

全局包

```shell
npm i -g pnpm yarn @antfu/ni degit npkill esno typescript tsx http-server node-gyp bun
```

@antfu/ni  注意事项 powershell 管理员运行

```shell
Remove-Item Alias:ni -Force -ErrorAction Ignore
```

代理

```shell
npm config set proxy=http://127.0.0.1:7890
npm config set https-proxy=http://127.0.0.1:7890

npm config delete proxy
npm config delete https-proxy
```
