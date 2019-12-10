// initial state
// shape: [{ id, quantity }]
import {
  reqAutoLogin
} from "../../api/index";
import * as Cookies from "js-cookie"

const state = {
  loginState: {
    loginIn: false,
    user: {
      userName: ""
    }
  }
}

// getters
const getters = {
  userName: (state) => {
    if (state.loginState.loginIn) {
      return state.loginState.user.userName
    }
  },
  offLine: (state) => {
    return !state.loginState.loginIn;
  }
}

//actions
const actions = {
  //从服务器端校验本地登录 Cookie 有效性
  authUser({
    commit
  }) {
    return reqAutoLogin().then(res => {
      if (res.Success) {
        commit('loginIn', {
          userName: res.Data.UserName
        });
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
    state.loginState.user = user;
    Cookies.set('loginState', state.loginState, {
      expires: 1
    });
  },
  //登出状态
  loginOut(state) {
    state.loginState.loginIn = false;
    state.loginState.user = {};
    Cookies.remove('loginState');
  },
  syncLoginState(state) {
    let cookieState = Cookies.getJSON('loginState');
    if (cookieState) {
      state.loginState = cookieState;
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}