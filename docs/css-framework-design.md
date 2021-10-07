# CSS 框架设计方法论

## 准备
- HTML5
- CSS3
- A preprocessor of choice
  - SASS √
  - LESS
- Semantic class naming
  - BEM √
  - SMACSS
  - Atomic CSS
  - OOCSS
- File logical architecture

## 起步
为了避免从无到有进行开始，考虑一些工具，可以帮助建立更好的起点。

### 基于 normalize.css 开始构建
normalize.css 解决了跨浏览器的样式统一问题。
- 没有定义全局的 box-sizing
- 注意 margin 和 padding 都不是继承属性，而 normalize 并没有暴力地reset 所有 margin 和 padding。而是提供了一些适当的初始值。

### 基于 skeleton 开始构建
skeleton 基于 normalize.css 之上构建。使用的是 normalize.css 进行css reset。
- skeleton 使用 box-sizing 为 border-box
- Grid Styles 将 960px 划分 12 columns，计算原理参考skeleton源码 @media (min-width: 550px)部分。
- Base Styles 设置 font-size: 62.5%。 1rem = 10px
  > 这个全局字体的设置副作用极大，需要慎重考虑。
- Typography h1-h6 设置 proper font-size/line-height/letter-spacing
- Links 设置 normal 、hover样式
- Buttons 设置 常规、:hover、 :focus 样式，.button-primary 表示常用主按钮样式
- Forms 表单样式
- Lists 设置 ol与li的样式
- Code 设置代码块的样式
- Tables 设置表格样式
- Spacing 设置一些元素的留白处理
- Utilities 设置浮动、清除浮动或者max-width
- MEDIA QUERIES
  - Desktop HD: 1200px
  - Desktop: 1000px
  - Tablet: 750px
  - Phablet: 550px
  - Mobile: 400px

总结：
- skeleton 理念是 mobile first，然后扩展到更宽的屏幕。
- 同时，使用媒体查询，以支持responsive 布局，在不同屏幕适配。
  - skeleton 将column(s)全部左浮动，并且精心计算恰当的margin-left和百分比width实现fluid 布局。由于float布局策略已经过时，不建议布局再使用float。

### 利用 Bourbon 进行 CSS 预处理
- 安装 Ruby
可以更换为 https://gems.ruby-china.com/ 镜像

- 安装 Sass
```bash
gem install sass
```

- 安装 Bourbon
```bash
gem install bourbon
```

### 基于 Milligram 开始构建
> Milligram v1.4.0
- 使用自定义 css reset
- Milligram is different than most because of its use of the CSS Flexible Box Layout Module standard
  - 源码解析 [_Grid.sass](milligram-master\src\_Grid.sass)

### 基于 Mustard-ui 开始构建
> mustard-ui v1.0.4
- 使用自定义 css reset
- grid 布局核心在于flexbox，计算 column的`flex-basis: ($i / $col-count) * 100%;` 并利用scss设置媒体查询。

## 参考

- https://www.quora.com/How-do-I-create-my-own-css-framework
- http://getskeleton.com/
- https://www.ruby-lang.org/en/documentation/installation/
- https://www.bourbon.io/
- https://gems.ruby-china.com/
- https://kylelogue.github.io/mustard-ui/index.html
- https://milligram.io

