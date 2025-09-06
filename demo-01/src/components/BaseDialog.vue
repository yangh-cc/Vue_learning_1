<template>
  <div v-show="visibale" class="base-dialog-wrap">
    <div class="base-dialog">
      <div class="title">
        <h3>温馨提示：</h3>
        <button @click="close" class="close">x</button>
      </div>
      <div class="content">
        <p>你确认要退出本系统么？</p>
      </div>
      <div class="footer">
        <button @click="sure">确认</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    visibale: Boolean
  },
  methods:{
    close(){
      this.$emit('update:visibale',df )
    },
    sure(){
      this.$emit('update:visibale',false)
    },
    cancel(){
      this.$emit('update:visibale',false)
    }
  }
}
</script>

<style scoped>
.base-dialog-wrap {
  width: 300px;
  height: 200px;
  box-shadow: 2px 2px 2px 2px #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 10px;
}
.base-dialog .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
}
.base-dialog .content {
  margin-top: 38px;
}
.base-dialog .title .close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  line-height: 10px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 26px;
}
.footer button {
  width: 80px;
  height: 40px;
}
.footer button:nth-child(1) {
  margin-right: 10px;
  cursor: pointer;
}
</style>