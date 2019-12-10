// initial state
// shape: [{ id, quantity }]
import {
  reqAutoLogin
} from "../../api/index";
import {
  delCookie
} from '../../util/cookie'

const state = {
  loginState: {
    loginIn: false,
    userName: '',
    userId: ''
  }
}

// getters
const getters = {
  userName: (state) => {
    if (state.loginState.loginIn) {
      return state.loginState.userName
    }
  },
  offLine: (state) => {
    return !state.loginState.loginIn;
  },
  loginIn: (state) => {
    return state.loginState.loginIn;
  },
}

//actions
const actions = {
  //从服务器端校验本地登录 Cookie 有效性
  authUser({
    commit
  }) {
    return reqAutoLogin().then(res => {
      if (res.Success) {
        commit('loginIn');
        return true;
      } else {
        commit('loginOut');
        return false;
      }
    });
  }
}


// mutations
const mutations = {
  //登入状态
  loginIn(state, user) {
    state.loginState.loginIn = true;
    const {
      userName,
      userId
    } = user
    if (userName && userId) {
      state.loginState.userName = userName;
      state.loginState.userId = userId;
      window.localStorage.setItem('user', JSON.stringify({
        userId,
        userName,
        loginIn: true
      }))
    }
  },
  //登出状态
  loginOut(state) {
    state.loginState.loginIn = false;
    state.loginState.userName = '';
    state.loginState.userId = '';
    delCookie('userId');
    delCookie('userName')
    window.localStorage.setItem('user', JSON.stringify({
      userId: '',
      userName: '',
      loginIn: false
    }))
  },
  // syncLoginState(state) {
  //   let userName = Cookies.getJSON('userName');
  //   if (userName) {
  //     state.loginState.userName = userName;
  //   }
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}