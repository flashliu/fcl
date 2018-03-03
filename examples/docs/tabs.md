# tabs 选项卡
----
### 用法
Tabs 组件提供了选项卡功能，默认选中第一个标签页,```o-tab-item```的label就是标签,子节点就是标签内容
<div class='demo-block'>
<o-tabs>
    <o-tab-item label='水果' :num="1">水果</o-tab-item>
    <o-tab-item label='蔬菜'>蔬菜</o-tab-item>
</o-tabs>
</div>

::: demo
```html
<o-tabs>
    <o-tab-item label='水果' :num="1">水果</o-tab-item>
    <o-tab-item label='蔬菜'>蔬菜</o-tab-item>
</o-tabs>
```
:::
### props（参数）
| 名称    | 说明     | 类型    | 可选值     | 默认值      |
| ------- | -------- | ------- | ---------- | ----------- |
| label | 选项卡名称 | string | —  | —        |