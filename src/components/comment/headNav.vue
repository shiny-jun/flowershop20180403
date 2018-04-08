<template>
    <div class="head">
      <div class="main-img">
        <router-link to="/">
          <img src="http://wx1.sinaimg.cn/mw690/6d659ba0gy1fmd2vm5hgfj208c05k0ti.jpg" width="100px" >
        </router-link>
      </div>
      <div class="head-nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/allList">全部商品</router-link></li>
          <li><router-link to="/flowerMean">花语</router-link></li>
          <li><router-link to="/present">礼品</router-link></li>
          <li><router-link to="/Cart">购花篮</router-link></li>
          <li><router-link to="/my">我的</router-link></li>
        </ul>
      </div>
      <div class="login" v-show="!uName"><router-link to="/login">登录</router-link> <router-link to="/register">注册</router-link></div>
      <div class="user" v-show="uName">
        你好，<el-dropdown>
          <span class="el-dropdown-link">
            {{uName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>基本资料</el-dropdown-item>
            <el-dropdown-item>我的购花篮</el-dropdown-item>
            <el-dropdown-item>我的订单</el-dropdown-item>
            <el-dropdown-item divided>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
// import { setCookie, getCookie, delCookie } from "../../common/js/cookie.js";
import store from "../../common/js/store.js";
import { mapState } from 'vuex';

export default {
  data() {
    return{
      login: true,
    }
  },
  computed:mapState(["uName"]),
  store
}
</script>
<style lang="stylus">
/* 页面内容 */
.head
  width :1000px
  position :relative
  margin :auto
  margin-bottom :10px
  .main-img
    margin-top :30px
    display: inline-block
    padding-left:10px
    vertical-align :top
  .head-nav
    margin-top :30px
    display :inline-block
    font-size: 14px
    line-height: 20px
    font-family: "微软雅黑"
    margin-left: 50px
    ul
      margin-bottom :6px
    li
      display :inline-block
      text-align: center
      padding: 20px 48px 10px
      border-bottom:1px solid #ffffff
      & > a
        display: block
        text-decoration :none
        font-size: 14px
        color: rgb(77, 85, 93)
        &.router-link-exact-active
          color: rgb(240, 20, 20)
      &:hover
        border-bottom:1px solid #ff6666
        transition: 0.4s all linear
  .login
    position: absolute
    font-size :12px
    top:6px
    right: 0px
    & > a
      color :#fff
  .user
    position: absolute
    font-size :12px
    top:6px
    right: 0px
    color :#fff
    .el-dropdown
      color :#fff
      li
        color :#fff
        &:hover
          background-color:rgba(255, 153, 153, 0.7)
</style>
