# edz 的智能 BI 项目

作者： Edison

## 项目介绍

> 一个快捷生成可视化看板的智能数据分析平台.

## 架构图

![](https://raw.githubusercontent.com/Edisonchow119/test-image-hosting/main/BI%E6%9E%B6%E6%9E%84%E5%9B%BE.jpg?token=GHSAT0AAAAAACPNGCNUPHIPLNA3N6NXJ4L2ZQPLT6Q)

## 初始化

点击 [这里](https://pro.ant.design/docs/getting-started) 快速初始化项目, 或按照参照 👇6 步初始化项目.

```bash
npm i @ant-design/pro-cli -g

pro create myapp

🚀 Do you want the full amount or a simple scaffolding? (use arrow keys)
❯ simple
  complete

cd myapp

// 推荐使用yarn安装依赖
yarn

yarn run start
```

到这里就完成了项目初始化, 恭喜自己 🎉.

## 前后端联调

> 使用 openapi 快速实现前后端联调

`config/config.ts` line: 133 - 142

```bash
// 修改schemaPath路径 为 后端的接口文档路径（json格式）
schemaPath: "http://localhost:8101/api/v2/api-docs"
```

`package.json`

```bash
yarn run openapi
```

当你看到： openAPI: ✅ 成功生成 service 文件， 恭喜自己完成了**前后端联调**

测试 `pages/User/Login/index` ; line: 91-96

```bash
useEffect(() => {
  listChartByPageUsingPost({}).then(res => {
    console.error('res', res)
  })
});
```

`app.tsx` line: 134 将请求地址修改成后端地址

```bash
export const request = {
  baseURL: 'http://localhost:8101',
  ...errorConfig,
};
```

开发工具中的请求地址正确, 则测试通过 🎉

## 项目瘦身

移除文件 👉

1. (folder) tests, types, mock
2. (folder) public/icons, src/locales
3. (folder) src/services/swagger
4. (file) config/oneapi.json, public/pro_icon.svg, src/manifest.json, jest.config.ts

> config/defaultSettings.ts line：18, 自定义网站标题

## 智能分析页开发

页面内容：分析目标，上传文件（提取原始对象！）；

openapi 生成接口

## Bug 记录

优先参考官方 issue 区: [Ant Design Pro](https://github.com/ant-design/ant-design-pro/issues)

- 项目瘦身: `i18n-remove` (移除国际化 bug)

  1. 语法错误: SelectedLang is not defined: 请点击[这里](https://github.com/ant-design/ant-design-pro/issues/11034)
  2. 进入页面后左侧导航栏消失, 请点击[这里](https://github.com/ant-design/ant-design-pro/issues/10602)

- 大小写敏感 bug: file name 'url' differs from already included file name 'Url'; 尝试使用 Yarn 来管理依赖,因为 Yarn 在处理包名称时更加严格

  1. 删除 node_modules
  2. npm cache clean --force
  3. yarn

- 提交代码: invalid commit message format(格式 bug); 尝试规范格式,有利于帮助回溯
  1. 推荐插件 **git-commit-plugin** , 或参照[这里](https://github.com/vuejs/core/blob/main/.github/commit-convention.md)书写提交信息.

2024-04--03 01:03

- 登录后刷新才能看到头像:

  ```bash
  // User/Login/index line: 50
  const { initialState, refresh, setInitialState } = useModel('@@initialState');

  // 登录成功后刷新 line: 80-83
  const urlParams = new URL(window.location.href).searchParams;
  history.push(urlParams.get('redirect') || '/');
  refresh();
  return;
  ```

2024-04--03 11:53

- 退出登录报错:

  ```bash
  // src/components/RightDropdown.tsx line: 46
  await userLogoutUsingPost()
  ```
