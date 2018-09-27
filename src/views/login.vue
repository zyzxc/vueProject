<template>
  <el-form :model="form" :rules="rules" ref="loginForm" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">用户登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="form.username" @keyup.enter.native="userLogin" auto-complete="off"
                placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" @keyup.enter.native="userLogin" auto-complete="off"
                placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="userLogin" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        logining: false,
        rules: {
          username: [
            {required: true, message: '请输入用户名！', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码！', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      userLogin() {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
