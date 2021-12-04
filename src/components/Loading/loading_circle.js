import VueLoading from 'vuejs-loading-plugin'

Vue.use(VueLoading)

Vue.use(VueLoading, {
  dark: true,
  text: 'Loading',
  loading: true,
  customLoader: myVueComponent,
  background: 'rgb(255,255,255)',
  classes: ['myclass']
})
