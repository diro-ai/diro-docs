# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Phiên bản tài liệu

`docs-version.json` ghi cặp version Diro (web + backend) mà nội dung docs đang khớp. Khi viết lại docs theo bản Diro mới:

1. Lấy version đang chạy: `https://diro.ai/api/version` và `https://api.diro.ai/api/version/`.
2. Sửa `docs-version.json` và thêm một dòng vào bảng ở `docs/phien-ban-tai-lieu.md`.
3. Đẩy lên `main` — workflow deploy tự gắn tag `web-<web>+be-<backend>`.
