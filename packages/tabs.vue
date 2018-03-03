<script>
export default {
  name: "OTabs",
  props: {},
  data() {
    return {
      tablist: [],
      tabindex: 0
    };
  },
  methods: {
    addTabs(item) {
      const data = this.$slots.default.filter(item => {
        return (
          item.elm.nodeType === 1 && /\bo-tab-item\b/.test(item.elm.className)
        );
      });
      this.tablist = data;
    }
  },
  render() {
    let { tablist } = this;
    const header = this._l(tablist, (item, index) => {
      const num = (
        <span class="label label-warning" style="margin-left:10px;">
          {item.child.num}
        </span>
      );
      return (
        <a
          href="javascript:;"
          onClick={() => {
            this.tabindex = index;
            this.$children.forEach(item => {
              item.changeindex();
            });
          }}
          key={index}
          class={{ active: this.tabindex == index }}
        >
          {item.child.label}
          {item.child.num > 0 ? num : null}
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

