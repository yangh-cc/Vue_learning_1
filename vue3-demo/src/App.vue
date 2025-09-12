<script setup>

// export default {
//   setup () {
//     //数据
//     const message = 'hello Vue3'
//     //函数
//     const logMessage = () => {
//       console.log(message);
//     }
    
//     return {
//       message,
//       logMessage
//     }
//   }
// }


//  const message = 'hello Vue3'
//     // 函数
//     const logMessage = () => {
//       console.log(message);
//     }
// import {ref ,computed} from 'vue'
// // const count = ref(0)
// // const setCount =() => {
// //   count.value++
// // }
// const count = ref(1)
// const plusOne = computed({
//   get: () => count.value+1,
//   set:(val)=>{
//     count.value = val-1
//   }
// })
// plusOne.value = 1
// console.log(count.value);

//父传子
import {ref} from 'vue'
import SonCom from '@/components/son-com.vue'
const money =ref(100)
const getMoney = () => {
  money.value += 10
}

const changeFn = (newMony)=>{
  money.value=newMony
}
</script>

<template>
  <!-- <div>{{ count }}</div>
  <button @click="setCount">按钮</button> -->

  <div>
    <h3>父组件-{{ money }}
      <button @click="getMoney">挣钱</button>
    </h3>
    <SonCom @changeMoney="changeFn" car="宝马车" :money="money"></SonCom>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
