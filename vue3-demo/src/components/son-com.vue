<script setup>
//子组件
const props = defineProps({
    car:String,
    money:Number
})
const emit =defineEmits(['changeMoney'])
console.log(props.car);
console.log(props.money);

const buy= ()=>{
    emit('changeMoney',5)
}

</script>

<template>
    <div class="son">我是子组件-{{ car }}-{{ money }} <button @click="buy">花钱</button></div>

</template>

<style>
.son{
    border: 1px solid #000;
    padding: 30px;
}
</style>