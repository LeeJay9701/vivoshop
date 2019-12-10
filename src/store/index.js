import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
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
=======
>>>>>>> 6839e85d5ad0d7328c2978de0356dbd10852dc06

import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
<<<<<<< HEAD
>>>>>>> 5f42f98b18b3df5decb3eabef042c1eacaf1b7ee
=======
>>>>>>> 6839e85d5ad0d7328c2978de0356dbd10852dc06
