<template>
  <div>
    <div class="col-md-3 col-lg-2 ">
      <o-panel>
        <div class="clearfix">
          <button class="btn btn-default pull-right details">用餐情况</button>
        </div>
        <hr>
      </o-panel>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
