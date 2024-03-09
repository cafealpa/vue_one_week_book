<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
           alt="카카오 로그인 버튼">
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      console.log('카카오 로그인 버튼 클릭');
      // 카카오 로그인 버튼을 생성합니다.
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image', // 사용자 동의항목
        success: function (authObj) {
          console.log('로그인 성공', authObj);
          this.getKakaoAccount();
        }
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '',
        success: function (response) {
          console.log('카카오 계정 정보', response);
        },
        fail: function (error) {
          console.log('카카오 계정 정보 가져오기 실패', error);
        }
      });
    }
  },
}
</script>

<style scoped>

</style>