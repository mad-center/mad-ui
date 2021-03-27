# document
> Goal
- [x] Vue 3
- [x] TypeScript 4
- [x] Babel 7
- [x] Webpack 5
- [x] Hot Module Replacement
- [x] Lerna
- [x] ESLint
- [x] commitizen + cz-conventional-log
- [ ] @types d.ts support
- [ ] Husky or simple-git-hooks + lint-staged
- [ ] commitlint to check commit message syntax  
- [ ] Jest
- [ ] vuad for vue component auto document generation for API.
- [ ] semantic-release/ standard version

## dependencies
- webpack
```bash
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```
> clean-webpack-plugin or rimraf to remove dist folder

- vue
```bash
yarn add -D vue-loader@next vue@next @vue/compiler-sfc @vue/component-compiler-utils
```

- css/sass
```bash
yarn add -D style-loader css-loader postcss-loader postcss postcss-preset-env sass-loader sass
```
> mini-css-extract-plugin to replace style-loader

- babel
```bash
yarn add -D babel-loader @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-typescript
```
> deprecate ts-loader: use babel7 @babel/preset-typescript to replace ts-loader

- auto generate template
```bash
yarn add -D yargs chalk ts-node
```

- typescript aupport
```bash
yarn add -D typescript
```

## sass module
`./typography/exports.scss`
```
@import './variables.scss';

:export {
    fontHeading: #{$font-heading};
}
```
> #{} 表示字符串插值
```
@use "./typography/exports.scss" as typography;

//font-family: typography.$font-heading;
```

## playground dependencies
```
"dependencies": {
  "@mad-ui/base": "^0.0.0"
},
```

## button demo component principle
- use vue 3.0 composition API setup()/ref to define reactive data
- use css variant class to define variant style

## lerna packages management

- 给某个package安装依赖：yarn workspace packageB add packageA 将packageA作为packageB的依赖进行安装
- 给所有的package安装依赖: 使用yarn workspaces add lodash 给所有的package安装依赖
- 给root 安装依赖：使用yarn add -W -D typescript来给root安装依赖

## version bump

- 存在feat提交： 需要更新minor版本
- 存在fix提交： 需要更新patch版本
- 存在BREAKING CHANGE提交： 需要更新major版本

> lerna version --conventional-commits
> lerna version --conventional-commits --yes # auto

## release
```
lerna publish from-git
```

## eslint 
```bash
eslint --init
```

## lint-staged and simple-git-hooks
```
$ npx simple-git-hooks
[INFO] Successfully set the pre-commit with command: lint-staged
[INFO] Successfully set all git hooks
```
```bash
$ yarn git-cz -a
$ D:\Code\WebStormProjects\vue-components-starter\node_modules\.bin\git-cz -a
cz-cli@4.2.3, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing: test:     Adding missing tests or correcting existing tests
? What is the scope of this change (e.g. component or file name): (press enter to skip) no
? Write a short, imperative tense description of the change (max 90 chars):
 (16) test lint-staged
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? No
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for *.{js,ts,vue}
[STARTED] echo ============lint-staged==============
[SUCCESS] echo ============lint-staged==============
[SUCCESS] Running tasks for *.{js,ts,vue}
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SUCCESS] Applying modifications...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...
[master ed193c4] test(no): test lint-staged
 3 files changed, 10 insertions(+), 2 deletions(-)
 create mode 100644 test.js
Done in 21.25s.
```
