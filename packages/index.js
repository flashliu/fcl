import panel from './panel'
import modal from './modal'
const components = [
  panel,
  modal
]
const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
export default{
  install,
  panel,
  modal
}