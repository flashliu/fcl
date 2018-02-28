import panel from './panel'
const components = [
  panel
]
const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
export default{
  install,
  panel
}