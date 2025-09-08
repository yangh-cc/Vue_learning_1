<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="changeTitle">改标题</button>
    <button @click="handleChange">1秒后改成666</button>

    <hr />
    <div>{{ $store.getters.filterList }}</div>
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
