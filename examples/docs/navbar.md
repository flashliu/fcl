# panel 面板
----
### 用法
使用```type```、```state```属性来控制面板样式
<div class='demo-block'>
<button style='margin-bottom:20px;' class="btn btn-primary" @click="fixtop=!fixtop">toggle fixtop</button>
<o-nav-bar :fixtop="fixtop">
    <a href="#">刷新</a>
    <a href="#">超级管理员</a>
    <a href="#">退出</a>
</o-nav-bar>
<script>
export default {
name: "modaltest",
data() {
    return {
            fixtop: false
        };
    }
};
</script>
</div>

::: demo

```html
<button style='margin-bottom:20px;' class="btn btn-primary" @click="fixtop=!fixtop">toggle fixtop</button>
<o-nav-bar :fixtop="fixtop">
    <a href="#">刷新</a>
    <a href="#">超级管理员</a>
    <a href="#">退出</a>
</o-nav-bar>
<script>
export default {
name: "modaltest",
data() {
    return {
            fixtop: false
        };
    }
};
</script>
```
:::

### props（参数）
| 名称   | 说明           | 类型    | 可选值     | 默认值 |
| ------ | -------------- | ------- | ---------- | ------ |
| fixtop | 是否固定在顶部 | boolean | true,false | false  |
| logo   | logo的url      | string  | —         | —     |
| title  | 标题           | string  | —         | 123    |  |