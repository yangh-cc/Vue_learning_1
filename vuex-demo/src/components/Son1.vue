<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="changeTitle">改标题</button>
    <button @click="handleChange">1秒后改成666</button>

    <hr>
    <div>{{ $store.getters.filterList }}</div>

    <hr>
    <!-- 测试访问模块中的state-原生 -->
    <div>{{ $store.state.user.userInfo.name }}</div>
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">1秒后更新信息</button>

    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme">更新主题色</button>
    <hr>
    <!-- 测试访问模块中的setters-原生 -->
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleAdd (n) {
      this.$store.commit('addCount', n)
    },
    changeTitle () {
      this.$store.commit('changeTitle')
    },
    handleChange () {
      this.$store.dispatch('changeCountAction', 666)
    },
    updateUser () {
      this.$store.commit('user/setUser', {
        name: 'yanghuan',
        age: 21
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    },
    updateUser2 () {
      this.$store.dispatch('user/setUserSecond', {
        name: 'xiaoming',
        age: 28
      })
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
