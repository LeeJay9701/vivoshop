import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import user from './modules/user'
import goods from './modules/goods'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    goods
  },
  strict: debug,
  plugins: []
})
=======

import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
>>>>>>> 5f42f98b18b3df5decb3eabef042c1eacaf1b7ee
