<template>
  <section>
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain @del="handelDel" :list="list"></TodoMain>
    <TodoFooter @claer="handleClear" :list="list"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";

export default {
  components: { TodoHeader },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) ||  [
        { id: 1, name: "打篮球" },
        { id: 2, name: "乒乓球" },
        { id: 3, name: "踢足球" },
      ],
    };
  },
  methods: {
    handleAdd(todoName) {
      this.list.unshift({
        id: +new Date(),
        name: todoName,
      });
    },
  },
  handleDel(id){
    this.list = this.list.filter(item => item.id !== id)
  },
  handelClear(){
    this.list=[]
  },
  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  }
};
</script>

<style></style>
