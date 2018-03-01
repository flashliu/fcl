<template>
  <div id="panel" :class="{success:state==1||type==2,warn:state==2&&type==1,danger:state==3&&type==1}">
    <div v-if="type==1" class="clearfix">
      <span style="margin:0;" class="h2 pull-left">{{tabNum}}
        <small style="color:white">号桌</small>
      </span>
      <button v-if="state==3" class="btn btn-default pull-right" @click="$emit('situation')">用餐情况</button>
    </div>
    <div v-if="type==2" class="clearfix">
      <span style="margin:0;" class="h2 pull-left">
        <small style="color:white">取餐号{{tabNum}}</small>
      </span>
    </div>
    <hr>
    <slot v-if="state!=1"></slot>
    <div v-else-if="type!=2">
      <p>空闲</p>
      <p>&nbsp;</p>
    </div>
    <div v-if="type==1" class="clearfix">
      <button v-if="state==1" @click="$emit('open')" class="btn btn-default pull-right">开桌</button>
      <button v-if="state==2" @click="$emit('close')" class="btn btn-default pull-left">关桌</button>
      <button v-if="state==2" @click="$emit('order')" class="btn btn-default pull-right">点菜</button>
      <button v-if="state==3" @click="$emit('add')" class="btn btn-default pull-left">加菜</button>
      <button v-if="state==3" @click="$emit('checkout')" class="btn btn-default pull-right">结账</button>
    </div>
    <div v-else class="clearfix">
      <button @click="$emit('order')" class="btn btn-default pull-left">点菜</button>
      <button @click="$emit('checkout')" class="btn btn-default pull-right">结账</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OPanel",
  props: {
    state: {
      type: Number,
      default: 1
    },
    type: {
      type: Number,
      default: 1
    },
    tabNum: String
  }
};
</script>
<style scoped lang='less'>
#panel {
  padding: 10px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: white;
  margin-bottom: 20px;
  p {
    color: white;
  }
}
.success {
  background-color: #67b252;
}
.danger {
  background-color: #ff412c;
}
.warn {
  background-color: #ffa821;
}
</style>

