# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

node version>12.0 (保证你的 node 版本大于 12)

来到根目录命令行界面，按照以下步骤执行

STEP 1: Install `yarn` and `tyarn`: (安装依赖需要)

```bash

npm install yarn tyarn -g
```

STEP 2: Install `umi`:（ant-design 需要）

```bash
tyarn global add umi
```

STEP 3:Install `node_modules`:（安装依赖）

```bash
tyarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash（启动项目）
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
