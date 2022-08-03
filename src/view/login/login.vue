<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="form.userPhone"
          name="userPhone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
          v-model="form.userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-row>
        <van-col span="16">
          <van-field
              v-model="form.verifyCode"
              name="verifyCode"
              label="验证码"
              placeholder="验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
          />
        </van-col>
        <van-col span="8">
          <van-field
              v-model="code"
              input-align="center"
              disabled
          />
        </van-col>
      </van-row>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script>
import {getVerifyCode, login} from '@/api/user'
import {Toast} from "vant";
import {router} from "@/router";
import Vconsole from 'vconsole';
let console = new Vconsole()
export default {
  name: "login",
  data() {
    return {
      form: {
        userPhone: '',
        userPassword: '',
        verifyCode: '',
      },
      code: ''
    }
  },
  methods: {
    getVerifyCode() {
      getVerifyCode().then(response => {
        if (response.code === 200) {
          this.code = response.data;
        } else {
          Toast.fail(response.message);
          this.getVerifyCode()
        }
      })
    },
    onSubmit() {
      Toast.loading({
        message: '登录中...',
        forbidClick: true,
      });
      login(this.form).then(response => {
        if (response.code === 200) {
          Toast.success('登陆成功');
          sessionStorage.setItem("user", JSON.stringify(response.data))
          router.push({path: "/home"})
        } else {
          Toast.success(response.message);
        }
      })
    }
  },
  created() {
    this.getVerifyCode()
  }
};
</script>

<style scoped>

</style>