        
# modal 面板
----
### 用法
需要设置```visible```属性，它接收```Boolean```，当为```true```时显示 modal

<div class='demo-block'>
<button class="btn btn-primary" @click="visible=true">open</button>
<o-modal :visible.sync='visible'>
message
<div slot="footer">
    <button class="btn btn-default" @click='visible=false'>取消</button>
    <button class="btn btn-primary" @click='visible=false'>确认</button>
</div>
</o-modal>
</div>
<script>
export default {
name: "modaltest",
data() {
return {
visible: false
};
}
};
</script>

::: demo

```html
<button class="btn btn-primary" @click="visible=true">open</button>
<o-modal title="Modal title" :visible.sync='visible'>
message
<div slot="footer">
    <button class="btn btn-default">取消</button>
    <button class="btn btn-primary">确认</button>
</div>
</o-modal>
<script>
export default {
name: "modaltest",
data() {
    return {
            visible: false
        };
    }
};
</script>
```

:::

### props（参数）
| 名称    | 说明     | 类型    | 可选值     | 默认值      |
| ------- | -------- | ------- | ---------- | ----------- |
| visible | 是否显示 | boolean | true,false | false       |
| title   | 标题     | string  | —         | Modal title |


