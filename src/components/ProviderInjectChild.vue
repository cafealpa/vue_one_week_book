<script>
  export default {
    inject: ['itemLength'],
    mounted() {
      console.log(this.itemLength);
    }
  }
</script>

<template>
  <h2>ProviderInjectChild</h2>
  <label for="injectedValue">Injected Value : </label>
  <input id="injectedValue" type="number" v-model="itemLength"/>
</template>

<style scoped>

</style>