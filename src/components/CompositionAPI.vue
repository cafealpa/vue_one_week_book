<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="number" v-model="state.num1">
      <span> + </span>
      <input type="number" v-model="state.num2">
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'simpleCaclulator',
  // 기존 vue 개발 방식
  // data() {
  //   return {
  //     num1: 0,
  //     num2: 0,
  //     result: 0
  //   }
  // },
  // methods: {
  //   calcNum() {
  //     this.result = parseInt(this.num1) + parseInt(this.num2)
  //   }
  // }

  // composition api 방식
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => {
        return parseInt(state.num1) + parseInt(state.num2)
      })
    });

    return {state}
  }
}


</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>