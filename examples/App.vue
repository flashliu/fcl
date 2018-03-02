<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <slide-nav></slide-nav>
        </div>
        <div class="col-md-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideNav from '@/components/SlideNav'
export default {
  name: "App",
  components:{
    SlideNav
  }
};
</script>

<style>
.hljs{display:block;overflow-x:auto;padding:0.5em;background:#fff}.hljs,.hljs-subst{color:#000}.hljs-string,.hljs-meta,.hljs-symbol,.hljs-template-tag,.hljs-template-variable,.hljs-addition{color:#756bb1}.hljs-comment,.hljs-quote{color:#636363}.hljs-number,.hljs-regexp,.hljs-literal,.hljs-bullet,.hljs-link{color:#31a354}.hljs-deletion,.hljs-variable{color:#88f}.hljs-keyword,.hljs-selector-tag,.hljs-title,.hljs-section,.hljs-built_in,.hljs-doctag,.hljs-type,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-strong{color:#3182bd}.hljs-emphasis{font-style:italic}.hljs-attribute{color:#e6550d}
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 50px;
}
pre{
  border: none!important;
}
</style>
