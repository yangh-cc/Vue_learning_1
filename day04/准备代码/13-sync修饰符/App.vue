<template>
  <div class="app">
    <button>退出按钮</button>
    <BaseDialog 
    :visibale.sync="isShow"
    ></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>