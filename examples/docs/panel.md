        
# panel 面板
----
### 用法
使用```type```、```state```属性来控制面板样式
<div class='demo-block'>
<div class="row">
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='1' :type='1'>
        <p>用餐中 6人 / ¥ 26.60</p>
        <p>用餐中 6人 / ¥ 26.60</p>
    </o-panel>
    </div>
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='2' :type='1'>
        <p>用餐中 6人 / ¥ 26.60</p>
        <p>用餐中 6人 / ¥ 26.60</p>
    </o-panel>
    </div>
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='3' :type='1'>
        <p>用餐中 6人 / ¥ 26.60</p>
        <p>用餐中 6人 / ¥ 26.60</p>
    </o-panel>
    </div>
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='3' :type='2'>
        <p>￥26.00</p>
        <p>&nbsp;</p>
    </o-panel>
    </div>
</div>
</div>

::: demo

```html

<div class="row">
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='1' :type='1'>
        <p>用餐中 6人 / ¥ 26.60</p>
        <p>用餐中 6人 / ¥ 26.60</p>
    </o-panel>
    </div>
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='2' :type='1'>
        <p>用餐中 6人 / ¥ 26.60</p>
        <p>用餐中 6人 / ¥ 26.60</p>
    </o-panel>
    </div>
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='3' :type='1'>
        <p>用餐中 6人 / ¥ 26.60</p>
        <p>用餐中 6人 / ¥ 26.60</p>
    </o-panel>
    </div>
    <div class="col-md-4">
    <o-panel tab-num="A1" :state='3' :type='2'>
        <p>￥26.00</p>
        <p>&nbsp;</p>
    </o-panel>
    </div>
</div>
  
```

:::

### props（参数）
| 名称   | 说明 | 类型   | 可选值 | 默认值 |
| ------ | ---- | ------ | ------ | ------ |
| type   | 类型 | number | 1,2    | 1      |
| state  | 状态 | number | 1,2,3  | 1      |
| tabNum | 桌号 | string | —     | —     |  |

### events（事件）
| 名称      | 说明     | 类型     |
| --------- | -------- | -------- |
| situation | 用餐情况 | function |
| open      | 开桌     | function |
| close     | 关桌     | function |
| checkout  | 结算     | function |
| order     | 点菜     | function |
| add       | 加菜     | function |



