import Vue from 'vue'
import Router from 'vue-router'
import navConfig from '../nav.config'

Vue.use(Router)
let routes = navConfig
let addComponent = (router) => {
  router.forEach((route) => {
    route.component = r => require.ensure([], () =>
      r(require(`../docs/${route.name}.md`)))
  })
}
addComponent(routes)
export default new Router({
  routes: routes
})
