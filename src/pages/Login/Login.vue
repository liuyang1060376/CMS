<template>
  <div class="login_container">
    <div class="login_box">
        <!--用户头像-->
      <div class="avatar_box">
        <img src="./../../assets/images/logo.png" alt="">
      </div>
        <!--登录表单区域-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_content">
        <el-form-item prop="username">
          <el-input v-model.number="loginForm.username"  placeholder="请输入用户名" clearable><i slot="prefix" class="icon iconfont">&#xe607;</i></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" show-password><i slot="prefix" class="icon iconfont">&#xe619;</i></el-input>
        </el-form-item>
        <el-form-item class="login_btns">
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button ref="resetBtn" type="info" @click="resetForm(loginForm)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reqLogin } from '@/api'

export default {
  data () {
    // 验证用户名是否合法
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        console.log(value)
        return callback(new Error('用户名不能为空'))
      }
      if (!Number.isInteger(value)) {
        return callback(new Error('用户名为数值型'))
      } else {
        if (value.toString().length < 3) {
          return callback(new Error('长度最小为3位'))
        }
      }
      return callback()
    }
    // 验证密码是否合法
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else {
        if (value.length < 3) {
          return callback(new Error('密码长度大于等于3位'))
        }
      }
      return callback()
    }
    return {
      // 表单绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则对象
      loginFormRules: {
        username: [
          { validator: checkUserName, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  name: 'Login',
  methods: {
    // 重置表单
    resetForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login () {
      console.log('点击了登录')
      this.$refs.loginFormRef.validate(async valid => {
        console.log(valid)
        if (!valid) {
          console.log('验证失败')
        } else {
          const result = await reqLogin(this.loginForm)
          console.log(result)
          if (result.code === 200) {
            this.$message.success('登录成功')
            window.sessionStorage.setItem('user', result.session)
            this.$router.push('/index')
          } else {
            this.$message.error(result.message)
          }
        }
      })
    }
  }
}
</script>

<style lang="less">
.login_container {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  position: relative;
  .login_box {
    width: 450px;
    height: 300px;
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box {
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 10px;
      width: 130px;
      height: 130px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 50%;
      box-shadow: 1px 1px 4px #eee;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
.login_btns {
  display: flex;
  justify-content: space-around;
}
.login_content {
  position: absolute;
  bottom: 0;
  padding:0 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>
