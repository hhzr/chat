<template>
  <van-card
      :desc="user.address"
      :title="user.userNickname"
      :thumb="user.userHeadImg"
  />
</template>

<script>
import Vconsole from 'vconsole';
let console = new Vconsole()
export default {
  name: "home",
  data() {
    return {
      user: {},
    }
  },
  methods: {},
  created() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }
}
</script>

<style scoped>
.van-card {
  background-color: rgb(0, 174, 239);
  --van-card-thumb-size: 35px;
  --van-card-thumb-border-radius: 50%;
  --van-card-font-size: 14px;
  --van-card-title-line-height: 20px
}
.van-image {
  width: 70%;
  height: 70%;
}
</style>