# menu 菜单
----
### 用法
```name```为菜名，```stock```为库存，```num```为数量
<div class='demo-block'>
<div class="row">
    <div class="col-md-3 col-lg-2">
        <o-menu name='西瓜' :stock="0" :num="1"></o-menu>
    </div>
</div>
</div>

::: demo
```html
<div class='demo-block'>
<div class="row">
    <div class="col-md-3 col-lg-2">
        <o-menu name='西瓜' :stock="0" :num="1"></o-menu>
    </div>
</div>
</div>
```
:::

### props（参数）
| 名称   | 说明 | 类型   | 可选值 | 默认值 |
| ------ | ---- | ------ | ------ | ------ |
| name   | 菜名 | string | —    | —      |
| stock  | 库存 | number | —  | 0      |
| num | 数量 |  number | —     | 0     |  |