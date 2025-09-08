import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    title: '仓库大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    addCount (state, n) {
      state.count += n
    },
    delCount (state, n) {
      state.count -= n
    },
    changeCount (state, newcount) {
      state.count = newcount
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },
  actions: {
    changeCountAction (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  }
})

export default store
