# GitHub 主页名片

一个可直接部署到 GitHub Pages 的静态个人主页，包含：

- 中英双语切换
- 明亮 / 黑暗模式切换
- `CoverX` 与 `CyliReacher` 代表网站模块
- 响应式布局

## 本地预览

在当前目录执行：

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://127.0.0.1:4173/
```

## 你需要改的内容

主要修改 `script.js` 顶部的 `profileConfig`：

- `name`
- `title`
- `description`
- `summary`
- `location`
- `githubUrl`
- `tags`

## 代表网站嵌入说明

页面使用 `iframe` 展示外部网站模块。
如果目标站点设置了安全策略禁止被嵌入，页面会保留“打开网站”按钮作为降级方案。

## 部署到 GitHub Pages

如果这是一个 GitHub 仓库根目录，直接提交以下文件即可：

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

随后在仓库设置里开启 GitHub Pages，选择从当前分支发布。
