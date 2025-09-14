<script setup>
//父传子
import { onMounted, onUpdated, ref } from "vue";
let a = 10;
const money = ref(100);
const getMoney = () => {
  a += 10;
};
onUpdated(() => {
  console.log("mou");
});
</script>

<template>
  {{ a }}
  <div>
    <h3>
      父组件-{{ money }}
      <button @click="getMoney">挣钱</button>
    </h3>
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
