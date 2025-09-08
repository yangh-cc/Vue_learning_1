<template>
  <div id="app">
    <h1>根组件
      -{{ title }}
      -{{ count }}
    </h1>
    <input type="text" :value="count" @input="handleInput">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'

export default {
  name: 'app',
  created () {
  },
  methods: {
    handleInput (e) {
      const num = +e.target.value
      this.$store.commit('changeCount', num)
    }
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  data: function () {
    return {

    }
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
