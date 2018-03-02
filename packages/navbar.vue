<template>
  <nav class="navbar navbar-dander" :class="{'navbar-fixed-top':fixtop}">
    <div class="logo pull-left">
      <img :src="logo" alt="">
      <span>{{title}}</span>
    </div>
    <div class="navbar-collapse collapse">
      <div class="clearfix pull-right list">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "ONavBar",
  props: {
    fixtop: {
      type: Boolean,
      default: false
    },
    logo: {
      type: String,
      default: 'http://pos.heyguo.com/Uploads/2017-05-18/591d41f1002a6.png'
    },
    title: {
      type: String,
      default: '123'
    }
  }
};
</script>
<style scoped lang='less'>
.navbar-dander {
  background-color: #bc2923;
  margin: 0;
  height: 50px;
  border: none;
}
.logo{
  line-height: 50px;
  padding-left: 15px;
  color: #ffffff;
  font-size: 18px;
  span{
    padding-left: 10px;
  }
  img{
    height: 40px;
    vertical-align: middle;
  }
}
.list {
  padding: 0;
  margin: 0;
    a {
    padding: 0 15px;
    float: left;
      height: 50px;
      display: block;
      line-height: 50px;
      color: white;
      text-decoration: none;
    }
}
</style>
