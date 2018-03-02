import panel from './panel'
import modal from './modal'
import navbar from './navbar'
import tabs from './tabs'
import tabitem from './tabitem'
const components = [
  panel,
  modal,
  navbar,
  tabs,
  tabitem
]
const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
export default{
  install,
  panel,
  modal,
  navbar,
  tabs,
  tabitem
}