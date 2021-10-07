# optimize dev process

conventional-changelog 生态主要模块

- commitizen - 针对开发者简单的 commit 规范
- conventional-changelog-cli - conventional-changelog 核心命令行工具
- standard-changelog - 针对 angular commit 格式的命令行工具

## 让git commit的信息更加规范和可读

```
npm install --save-dev commitizen
npm install cz-conventional-changelog --save-dev
commitizen init cz-conventional-changelog --save-dev --save-exact
```
> commitizen init cz-conventional-changelog --yarn --dev --exact

use commitizen to write more clear and readable commit message.

```
cz -a # -a 表示也会同时添加文件，即git add
```

```
type(scope): subject
description
```

## 自动化处理changelog，告别手动维护changelog的繁琐

> 不采用该方式，改用lerna

```
npm install -g conventional-changelog-cli
conventional-changelog -p angular -i CHANGELOG.md -s
```

以上命令中参数-p angular用来指定使用的 commit message 标准。

## 标准版本化

standard-version

```
npm install --save-dev standard-version
```

```
$ standard-version
√ bumping version in package.json from 0.1.0 to 0.1.1
 bumping version in package-lock.json from 0.1.0 to 0.1.1
√ created CHANGELOG.md
√ outputting changes to CHANGELOG.md
√ committing package-lock.json and package.json and CHANGELOG.md
```

这步修改了package.json的版本号，创建/修改了 changelog.md,并且执行了 git commit。其中git commit的信息类似于: chore(release): 0.1.4

说明：根据 主版本（major）,次版本（ minor） or 修订版（patch） 规则生成版本号。 一般是递增patch版本号，除非手动指定。

- `-r` 指定版本号
- `-p` 预发版本命名
- `-t` tag 前缀

## finally

集成 npm，这步就是将上述一些指令写到npm scripts中，这样就不用多次手动输入了。

---
updated:

1. 使用 commitizen 规范提交格式
2. commitlint 检查格式(husky commit-msg hook)  => 保证提交信息规范
3. 执行npm run lint-fix(husky pre-commit hook) => 保证代码已格式化
4. 执行npm run test(husky pre-pushhook) => 保证代码测试已经通过
5. push with confidence
