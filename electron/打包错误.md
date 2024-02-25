# 打包错误

```shell
  • electron-builder  version=24.9.1 os=10.0.22631
  • loaded configuration  file=package.json ("build" field)
  • description is missed in the package.json  appPackageFile=D:\project\electron-vite\package.json
  • author is missed in the package.json  appPackageFile=D:\project\electron-vite\package.json
  • writing effective config  file=dist_electron\builder-effective-config.yaml
  • packaging       platform=win32 arch=x64 electron=27.1.2 appOutDir=dist_electron\win-unpacked
  • default Electron icon is used  reason=application icon is not set
  • downloading     url=https://mirrors.huaweicloud.com/electron-builder-binaries/winCodeSign-2.6.0/winCodeSign-2.6.0.7z size=5.6 MB parts=1
  • downloaded      url=https://mirrors.huaweicloud.com/electron-builder-binaries/winCodeSign-2.6.0/winCodeSign-2.6.0.7z duration=7.871s
  ⨯ cannot execute  cause=exit status 2
                    out=
    7-Zip (a) 21.07 (x64) : Copyright (c) 1999-2021 Igor Pavlov : 2021-12-26
    
    Scanning the drive for archives:
    1 file, 5635384 bytes (5504 KiB)
    
    Extracting archive: C:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign\807703091.7z
    --
    Path = C:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign\807703091.7z
    Type = 7z
    Physical Size = 5635384
    Headers Size = 1492
    Method = LZMA2:24m LZMA:20 BCJ2
    Solid = +
    Blocks = 2


    Sub items Errors: 2

    Archives with Errors: 1

    Sub items Errors: 2

                    errorOut=ERROR: Cannot create symbolic link : 无法创建符号链接 : C:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign\807703091\darwin\10.12\lib\libcrypto.dylib
    ERROR: Cannot create symbolic link : 无法创建符号链接 : C:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign\807703091\darwin\10.12\lib\libssl.dylib

                    command='D:\project\electron-vite\node_modules\7zip-bin\win\x64\7za.exe' x -bd 'C:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign\807703091.7z' '-oC:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign\807703091'
                    workingDir=C:\Users\gys\AppData\Local\electron-builder\Cache\winCodeSign
  • Above command failed, retrying 3 more times

```

使用管理员身份运行PowerShell，在项目目录执行打包命令即可

vscode 请下载 system 版本 user版本没得admin 权限

[参考](https://blog.csdn.net/vifaceeeeee/article/details/134693524)