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

    <hr>
    <div>user模块的数据：{{ userInfo }}</div>
    <button @click="setUser({name: 'xiaom', age:60})">更新个人信息</button>
    <button @click="setUserSecond({name:'xiaohei',age:10110})">1秒后更新信息</button>
    <div>setting模块的数据：{{ theme }}-{{ desc }}</div>
    <button @click="setTheme('skyblue')">更新主题</button>

    <hr>
    <!-- 访问模块中getters -->
    <div>{{ UpperCaseName }}</div>
</div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    ...mapMutations(['delCount', 'changeTitle']),
    ...mapActions(['changeCountAction']),
    // handleDel (n) {
    //   // this.$store.commit('delCount', n)
    //   //映射方法后直接调用
    //   // this.delCount(n)
    // }

    // 分模块映射
    ...mapMutations('user', ['setUser']),
    ...mapMutations('setting', ['setTheme']),
    ...mapActions('user', ['setUserSecond'])

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
