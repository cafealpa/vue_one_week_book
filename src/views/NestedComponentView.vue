<template>
  <h1>나는 부모!</h1>
  <div>
    <button @click="clickParent">부모 버튼</button>
  </div>
  <div>
    <h3>자식 컴포넌트</h3>
    <page-title :title="childTitle" ref="child_component" @yieldOne="yieldOne"/>
  </div>
  <div>
    <h3>slot 연습.</h3>
    <DefaultModal>
      <template v-slot:header>
        <h2>모달 Title</h2>
      </template>

      <template #default>
        <p>팝업 content1</p>
        <p>팝업 content2</p>
      </template>

      <template v-slot:footer>
        <button type="button">닫기</button>
      </template>

    </DefaultModal>
  </div>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
import DefaultModal from "@/components/DefaultModal.vue";

export default {
  components: {DefaultModal, PageTitle},

  data() {
    return {
      childTitle: "동적 컴포넌트 제목입니다."
    }
  },

  methods: {
    clickParent() {
      console.log('부모 버튼을 클릭했습니다.');
      // this.$refs.child_component.$refs.childBtn.click();
      this.$refs.child_component.showLog();
    },
    yieldOne(data) {
      console.log(data + '자식에서 호출한 이벤트를 받았습니다.');
    }
  }
}
</script>
<style scoped>

</style>