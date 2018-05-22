<template>
  <div class="login">
    <div class="img">
      <img src="http://wx2.sinaimg.cn/large/6d659ba0gy1fmd48xrr06j21kw0hm0vk.jpg" width="70%">
    </div>
    <div class="bodys">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="user">
          <el-input  v-model="ruleForm.user" placeholder="请输入用户名/邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" auto-complete="off"></el-input>
        </el-form-item>
        <p v-show="showTishi" :class="[tishi === '登录成功' ? 'tishiGreen' : 'tishiRed']">{{tishi}}</p>
        <div class="button">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <router-link to="/register">
            <el-button>注册</el-button>
          </router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// import { setCookie, getCookie } from "../../common/js/cookie.js";
import store from "../../common/js/store.js";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      ruleForm: {
        user: "",
        password: ""
      },
      showTishi: false,
      tishi: "",
      rules: {
        user: [{ required: true, message: "请输入用户名/邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  // mounted(){
  // // 页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录
  //   if(getCookie('username')){
  //   // this.$router.push('/my')
  //   }
  // },
  methods: {
    ...mapMutations(['set','setId']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        let _this = this        
        if (valid) {
          $.ajax({
            type: "POST",
            // async:true,
            cache: false,
            url: "http://localhost:8088/flowershop/login.php",
            data: {name:this.ruleForm.user,password:this.ruleForm.password},
            dataType: "text",
            success: function(data, textStatus) {
              console.log(data)
              console.log(textStatus)
              // 接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值
              if (data == -1) {
                _this.tishi = "该用户不存在"
                _this.showTishi = true
              console.log("该用户不存在")
              } else if (data == 0) {
                _this.tishi = "密码输入错误"
                _this.showTishi = true;
              console.log("密码输入错误")
              } else {
                let userId = JSON.parse(data);
                console.log(userId);
                _this.tishi = "登录成功"
                _this.showTishi = true
                // setCookie('username',_this.ruleForm.user,1000*60)
                setTimeout(function(){
                  _this.setId({n: userId.UserId})
                  _this.set({n: _this.ruleForm.user})
                  _this.$router.push('/my')
                }.bind(_this),1000)
                //gohome();
              }
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    }
  },
  store
}
</script>
<style lang="stylus">
.login
  .img
    width :100%
    img
      margin :auto
  .bodys
    margin: 10px 300px 50px
    width: 400px
    el-form 
      margin: auto
      width: 400px
    .tishiGreen
      padding-bottom: 20px;
      color: green;
    .tishiRed
      color: red;
      padding-bottom: 20px;
// .head {
//   color: #ff6666;
//   font: normal 500 20px "微软雅黑";
//   /* margin-bottom: 50px; */
// }
</style>
