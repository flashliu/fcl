<script>
export default {
  name: "OTabs",
  data() {
    return {
      tablist: [],
      tabindex: 0
    };
  },
  methods: {
    addTabs(item) {
      const index = this.$slots.default
        .filter(item => {
          return (
            item.elm.nodeType === 1 &&
            /\bo-tab-item\b/.test(item.elm.className)
          );
        })
        .indexOf(item.$vnode);
      this.tablist.splice(index, 0, item);
    }
  },
  render() {
    let { tablist } = this;
    const header = this._l(tablist, (item, index) => {
      return (
        <a
          href="javascript:;"
          onClick={() => {
            this.tabindex = index;
          }}
          key={index}
          class={{ active: this.tabindex == index }}
        >
          {item}
        </a>
      );
    });
    return (
      <div>
        <div class="tablist">{header}</div>
        <hr />
        <div>{this.$slots.default}</div>
      </div>
    );
  }
};
</script>
<style lang="less" scoped>
.tablist {
  display: flex;
  a {
    color: #bc2923;
    text-decoration: none;
    flex: 1;
    padding: 10px 15px;
    border-radius: 4px;
    text-align: center;
  }
  a:hover {
    background-color: #eee;
  }
  a.active,
  a.active:hover {
    background-color: #bc2923;
    color: white;
  }
}
</style>

