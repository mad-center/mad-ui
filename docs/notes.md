# docs
- difference-between-complement-and-invert-in-sass
> https://stackoverflow.com/questions/36906252/difference-between-complement-and-invert-in-sass

## CSS class API convention

- color-? for color
- size-? for size
- variant-? for variant, such as light or dark, outlined

## .scss vs .sass
|SCSS|SASS|
|---|---|
| New syntax| Older syntax|
| .scss|.sass |
| syntax is similar to CSS| syntax is similar Ruby|
| use semicolon,bracket| prohibit semicolon and bracket|
| No Strict indentation| Strict indentation|

## link
> https://developer.mozilla.org/en-US/docs/Web/CSS/:active
```
a:link { color: blue; }          /* Unvisited links */
a:visited { color: purple; }     /* Visited links */
a:hover { background: yellow; }  /* Hovered links */
a:active { color: red; }         /* Active links */

p:active { background: #eee; }   /* Active paragraphs */
```

## Difference between extend, placeholders and mixins
> https://marksheet.io/sass-extend.html

|	|Definition	|Referencing|	Combines selectors?|	Allows parameters?|	Can be used on its own?|
|---|---|---|---|---|---|
|Mixins|	@mixin name()|	@include name()|	No|	Yes	|No|
|Extensions|	Any class|	@extend .class|	Yes|	No	|Yes|
|Placeholders|	%placeholder|	@extend %placeholder|	Yes	|No	|No|

## docs
- mad-divider-usage-basic 表示mad-divider组件的基本用法
- mad-divider-usage-basic-code 表示mad-divider组件的基本用法的代码
- index.vue 表示某个组件的入口vue
- api-view component for API document. Can be generated from some script, use api.js or api.json to store.

Breadcrumbs Props

|参数	|介绍	|类型	|可选值	|默认值|
|---|---|---|---|---|
|divider|分隔符|	String|	—|	‘/’|

## search docs
algolia

### read time
> https://github.com/ngryman/reading-time

### emoji commit
> https://github.com/ngryman/cz-emoji
```
? Select the type of change you are committing: (Use arrow keys)
❯ feature   🌟  A new feature
  fix       🐞  A bug fix
  docs      📚  Documentation change
  refactor  🎨  A code refactoring change
  chore     🔩  A chore change
```

## principles

- 如果没有充分的文档，那么功能不存在。
- 如果代码无法维护和理解，那么功能不存在。
- 如果功能实现不够简洁，那么应该被优化重构。
- 功能实现的继承层级不能过高，例如，理论上不应该超过三层，否则会陷入继承地狱。
- Whenever possible, prefer a HTML and CSS implementation over JavaScript
- Whenever possible, use utilities over custom styles

## canvas vs div
> 什么时候使用canvas 绘制图形，什么时候使用div足够？

- Canvas 适合绘制背景，绘制大量的图形，或者复杂的图形。
- div 适合简单背景，少量DOM的图形，简单的图形。

## Todo

- remove all namespace.mad-ui css class ,replaced by :v-deep
- replace highlight.js with prism.js for showing line numbers and line highlight
- alias for paths, not use ../../../path/to
- all component use mad- prefix

## 粒子系统
- 烟花
- 萤火虫
- 樱花飞舞（类似AE，将粒子type改为图片形式来替代）
- 下雨
- 下雪

这些都看成是粒子。这样就能快速给出通用的实现。

## directives and mixins, utils
参考：muse-ui 代码 muse-ui\src\internal

工具类。


## .eslintrc.js 中rule规则的自定义

这个rule可以自行定义，可以定义地很严格，也可以定义地很宽松。取决于你。
