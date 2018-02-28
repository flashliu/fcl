<template>
    <div id="panel" :class="type">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "OPanel",
  props: {
    type: {
      type: String,
      default: "success"
    }
  }
};
</script>
<style scoped>
#panel {
  padding: 10px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: white;
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

