# 规约
## CSS class naming
- ~~style module lang=scss + style lang=scss 混用~~
> webpack 配置非常复杂，而且没有找到解决方案，放弃
- style scoped lang=scss 建议不用 避免提升specific复杂度
- 推荐使用tyle lang=scss 然后给每个组件标记一个唯一的css class。
例如mad-button,mad-这个前缀就代表着这个框架。
