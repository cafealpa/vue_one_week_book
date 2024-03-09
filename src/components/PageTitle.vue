<template>
  <h2>{{title}}</h2>
  <div>
    <button @click="showLog" ref="childBtn">제목 변경</button>
    <button @click="callParent">부모 호출</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    }
  },
  methods: {
    showLog() {
      console.log('자식 버튼을 클릭했습니다.');
    },
    callParent() {
      this.$emit('yieldOne', '자식에서 호출한 이벤트입니다.');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
