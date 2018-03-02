<template>
    <div v-show="show" class="o-tab-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "OTabItem",
  props: {
    label: String
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    label(val) {
      this.$parent.$forceUpdate();
    }
  },
  mounted() {
    this.$parent.addTabs(this.label);
    const index = this.$parent.$slots.default
      .filter(item => {
        return item.elm.nodeType === 1;
      })
      .indexOf(this.$vnode);

    this.show = this.$parent.tabindex === index;
  }
};
</script>
