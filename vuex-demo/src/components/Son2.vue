<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="delCount(1)">值 - 1</button>
    <button @click="delCount(5)">值 - 5</button>
    <button @click="changeTitle('huojim')">改标题</button>
    <button @click="changeCountAction(888)">1秒后改成888</button>
    <hr>
    <div>{{ filterList }}</div>
</div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['filterList'])
  },
  methods: {
    ...mapMutations(['delCount', 'changeTitle']),
    ...mapActions(['changeCountAction'])
    // handleDel (n) {
    //   // this.$store.commit('delCount', n)
    //   //映射方法后直接调用
    //   // this.delCount(n)
    // }
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
