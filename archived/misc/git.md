---
tags: [git]
---

# git

## git 初始化配置

```shell
git config --global user.name "zd"
git config --global user.email "yobaci@163.com"
```

## git 代理配置 针对梯子

> Failed to connect to github.com port 443 after 21072 ms: Timed out

```shell
git config --global http.sslVerify "false"
git config --global https.sslVerify "false"
# 设置代理
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 取消全局代理：
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## git 大小写不敏感

```shell
git config core.ignorecase  false
```

## 忽略已经在仓库中的文件

1. 在 `gitignore` 文件中添加要忽略的文件或文件夹路径。

```bash title=".gitignore"

/path/to/ignored_file

```

2. 删除文件并保留本地副本。

```bash

git rm --cached /path/to/ignored_file

```

3. 删除文件并从本地和远程仓库中完全移除

```bash

git rm -r --cached /path/to/ignored_file

```
