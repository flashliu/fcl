<template>
    <span class="btn btn-default btn-lg btn-block">
        <h4>
            {{name}}
            <div v-if="num>0" class="pull-right badge menu_count">
                {{num}}
            </div>
            <div>
                <small class="text-danger ">库存 {{stock}}</small>
            </div>
        </h4>
    </span>
</template>
<script>
export default {
  name: "OMenu",
  props: {
    name: String,
    stock: {
      type: Number,
      default: 0
    },
    num: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style scoped>
.btn-block {
  position: relative;
}
.menu_count {
  background-color: #bc2923;
  position: absolute;
  right: -5px;
  top: -5px;
  color: #fff;
}
</style>

