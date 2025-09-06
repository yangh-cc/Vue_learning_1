<template>
  <div class="app">
    <button @click="handleClick">退出按钮</button>
    <BaseDialog :visibale.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleClick() {
      this.isShow = true
    },
  },
  components: {
    BaseDialog,
  },
};
</script>

<style></style>
