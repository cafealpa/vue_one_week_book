<script>
import ProviderInjectChild from "./ProviderInjectChild.vue";

export default {
  components: {ProviderInjectChild},
  data() {
    return {
      items: ['A', 'B']
    };
  },
  provide() {
    return {
      itemLength: this.items.length
    }
  }
}

</script>

<template>
  <ProviderInjectChild/>
</template>

<style scoped>

</style>