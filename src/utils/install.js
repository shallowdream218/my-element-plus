export const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context
    app.config.globalProperties[name] = fn
  }
  return fn
}
export const withInstall = (comp) => {
    comp.install = (app) => {
      app.component(comp.name, comp);
    }
    return comp
}