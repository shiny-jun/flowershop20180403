<template>
    <div class="head">
        <router-link to="/">
          <div class="main-img">
            <img src="http://wx1.sinaimg.cn/mw690/6d659ba0gy1fmd2vm5hgfj208c05k0ti.jpg" width="100px" >
          </div>
        </router-link>
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
        <div class="login"><router-link to="/login">登录</router-link> <router-link to="/register">注册</router-link></div>
    </div>
</template>
<script>
export default {
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
    display: inline-block
    padding-left:10px
    vertical-align :top
  .head-nav
    display :inline-block
    font-size: 14px
    line-height: 20px
    font-family: "微软雅黑"
    border-bottom:1px solid #ff6666
    margin-left: 50px
    li
      display :inline-block
      text-align: center
      padding: 30px 48px 5px
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.router-link-exact-active
          color: rgb(240, 20, 20)
  .login
    position: absolute
    font-size :12px
    top:10px
    right: 0px
</style>
