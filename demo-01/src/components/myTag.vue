<template>
  <div class="my-tag">
    <input
      v-if="isEdit"
      v-focus
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      @blur="isEdit = false"
      :value="value"
      @keyup.enter="handleEnter"
    />
    <div v-else @dblclick="handleClick" class="text">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  props: {
    tagName: String,
    value: String,
  },
  methods: {
    handleClick() {
      this.isEdit = true;

      // //等dom更新完，再获取焦点
      // this.$nextTick(() => {
      //   //立刻获取焦点
      //   this.$refs.inp.focus()
      // })
    },
    handleEnter(e) {
      if (e.target.value.trim() === "") return alert("内容不能为空");
      this.$emit("input", e.target.value);
      this.isEdit = false;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
