<template>
  <div class="app">
    <BaseForm ref="baseForm"></BaseForm>
    <h4>父组件 -- <button @click="handleGet">获取组件实例</button></h4>
    <BaseForm @click="HandleReset"></BaseForm>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
   handleGet(){
    this.$refs.baseForm.getValues()
   },
   handleReset(){
    this.$refs.baseForm.resetValues()
   }
  },
  
}
</script>

<style>
</style>