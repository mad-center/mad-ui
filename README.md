# document

## Table of Contents

- [Features](#features)
- [process](#process)
- [dependencies](#dependencies)
- [sass module](#sass-module)
- [playground dependencies](#playground-dependencies)
- [button demo component principle](#button-demo-component-principle)
- [lerna packages management](#lerna-packages-management)
- [version bump](#version-bump)
- [release](#release)
- [eslint](#eslint)

## Features

> Goal

- [x] Vue 3
- [x] TypeScript 4
- [x] Babel 7
- [x] Webpack 5
  - [x] Hot Module Replacement
- [x] Lerna 4
- [x] ESLint
- [x] commitizen + cz-conventional-log
- [x] commitlint(check commit messages)
- [x] Husky(git hooks) + lint-staged(lint staged git files)
- [x] Jest
  - vue component test
- [x] @types declaration files support
- [ ] vue component API document generation
  > Which format is better for document maintenance?
  - @vuese|https://github.com/vuese
  - @vuedoc
- [ ] semantic-release/ standard version

## process

```
                   git add
work area            ->             stage             ->  repository
local changes -> pre-commit    -> commit    -> pre-push -> push
                (lint-fix)     commitlint      jest
```

1. git add [some files] or use GUI tool to git add files
2. yarn run commit

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
