// initial state
// shape: [{ id, quantity }]

const state = {
  goods: [],
  goodCart: []
}

// getters
const getters = {

}

//actions
const actions = {

}


// mutations
const mutations = {
  //全部商品信息
  setGoods(state, goods) {
    state.goods = goods
  },
  //添加进购物车
  setGoodCart(state, goods) {
    const falg = state.goodCart.indexOf(goods.goods)
    if (falg !== -1) {
      state.goodCart[falg].number += goods.number
    } else {
      goods.goods.number = goods.number
      state.goodCart.push(goods.goods)
    }
  },
  //删除购物车的一个商品
  delGood(state, good) {
    state.goodCart.array.forEach((item, index) => {
      if (item.id === good.id) {
        state.goodCart.splice(index, 1)
      }
    })
  },
  //清空购物车
  delAllGood(state) {
    state.goodCart = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}