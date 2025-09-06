<template>
  <div>
    <MyDialog>
      <template v-slot:head>dabiaoti</template>
      <template v-slot:content>neirong</template>
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>

    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>