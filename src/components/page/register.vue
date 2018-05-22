<template>
  <div class="register">
    <div class="img">
      <img src="http://wx2.sinaimg.cn/large/6d659ba0gy1fmd48xrr06j21kw0hm0vk.jpg" width="70%">
    </div>
    <div class="bodys">
      <el-form :model="registerForm" :rules="registerRule" ref="registerForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input  v-model="registerForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input  v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="重输入密码"  prop="checkPwd">
          <el-input v-model="registerForm.checkPwd" placeholder="请再次输入密码" type="password"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" prop="mail">
          <el-input v-model="registerForm.mail" placeholder="请输入接收验证码的邮箱"></el-input>
        </el-form-item>
        <p v-show="showTishi" :class="[tishi === '登录成功' ? 'tishiGreen' : 'tishiRed']">{{tishi}}</p>
        <div class="button">
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
          <router-link to="/login">
            <el-button>登录</el-button>
          </router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    var validateUser = (rule, value, cb) => {
      var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
      if (value === '') {
        cb(new Error('请输入用户名'))
      } else if (!pattern.test(value)) {
        cb(new Error('请输入3-10个字母/汉字/数字/下划线'))
      } else {
        cb()
      }
    }
    var validatePwd = (rule, value, cb) => {
      var pattern = /^\S{3,20}$/g
      if (value === '') {
        cb(new Error('请输入密码'))
      } else if (!pattern.test(value)) {
        cb(new Error('请输入3-20个非空白字符'))
      } else {
        if (this.registerForm.checkPwd !== '') {
          this.$refs.registerForm.validateField('checkPwd')
        }
        cb()
      }
    }
    var validateCheckPwd = (rule, value, cb) => {
      if (value === '') {
        cb(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        cb(new Error('两次输入密码不一致!'))
      } else {
        cb()
      }
    }
    return {
      registerForm: {
        name: '',
        password: '',
        checkPwd: '',
        mail: ''
      },
      showTishi: false,
      tishi: '',
      registerRule: {
        name: [
          { required: true, validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePwd, trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, validator: validateCheckPwd, trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        let _this = this
        // console.log(this.registerForm.name);
        if (valid) {
          $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://localhost:8088/flowershop/reg.php',
            data: {name: this.registerForm.name, password: this.registerForm.password, email: this.registerForm.mail},
            dataType: 'text',
            success: function (data, textStatus) {
              console.log(data)
              console.log(textStatus)
              if (data === -1) {
                _this.tishi = '注册失败'
                _this.showTishi = true
                console.log('注册失败')
              } else if (data === 0) {
                _this.tishi = '此用户名已被注册'
                _this.showTishi = true
                console.log('此用户名已被注册')
              } else {
                _this.tishi = '注册成功'
                _this.showTishi = true
                _this.username = ''
                _this.password = ''
                // 注册成功之后再跳回登录页
                setTimeout(function () {
                  _this.$router.push('/login')
                }.bind(_this), 1000)
              }
            }
          })
        } else {
          console.log('error submit!!')
          return false
          // resetForm(formName);
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="stylus">
.register
  .img
    width :100%
    img
      margin :auto
  .bodys
    margin:10px 300px 50px
    width:400px
    .tishiGreen
      padding-bottom: 20px;
      color: green;
    .tishiRed
      color: red;
      padding-bottom: 20px;
</style>
