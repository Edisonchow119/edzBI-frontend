# edz 的智能 BI 项目

> 一个快捷生成可视化看板的智能数据分析平台.

## 初始化

点击 [这里](https://pro.ant.design/docs/getting-started) 快速初始化项目, 或按照参照 👇6 步初始化项目.

```bash
npm i @ant-design/pro-cli -g

pro create myapp

🚀 Do you want the full amount or a simple scaffolding? (use arrow keys)
❯ simple
  complete

cd myapp

// macOS推荐yarn
npm install

npm run start
```

到这里就完成了项目初始化, 恭喜自己 🎉.

---

## Bug 记录

优先参考官方 issue 区: [Ant Design Pro](https://github.com/ant-design/ant-design-pro/issues)

- 项目瘦身: i18n-remove (移除国际化 bug)

  1. 语法错误: SelectedLang is not defined: 请点击[这里](https://github.com/ant-design/ant-design-pro/issues/11034)
  2. 进入页面后左侧导航栏消失, 请点击[这里](https://github.com/ant-design/ant-design-pro/issues/10602)

- 大小写敏感 bug: file name 'url' differs from already included file name 'Url'; 尝试使用 Yarn 来管理依赖,因为 Yarn 在处理包名称时更加严格

  1. 删除 node_modules
  2. npm cache clean --force
  3. yarn

- 提交代码: invalid commit message format(格式 bug); 尝试规范格式,有利于帮助回溯
  1. 推荐插件 **git-commit-plugin** , 或参照[这里](https://github.com/vuejs/core/blob/main/.github/commit-convention.md)书写提交信息.

---
