const state = {
  userInfo: {
    name: 'yh',
    age: 18
  },
  score: 90
}
const mutations = {
  setUser (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}
const actions = {
  setUserSecond (context, newUserInfo) {
    setTimeout(() => {
      context.commit('setUser', newUserInfo)
    }, 1000)
  }
}
const getters = {
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
