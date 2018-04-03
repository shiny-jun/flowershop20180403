<template>
  <div id="app">
    <headNav></headNav>
      <router-view/>
    <footNav></footNav>
  </div>
</template>

<script>
import headNav from '@/components/comment/headNav'
import footNav from '@/components/comment/footNav'
export default {
  name: 'App',
  components: {
    headNav, footNav
  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: auto
  width: 1000px
/* 界面清零 */
*
  margin: 0
  padding: 0
body
  font-size: 12px
img
  border: none
li
  list-style: none
input,select,textarea
  outline: none
textarea
  resize: none
a
  text-decoration: none
/* 清除浮动 */
.clearfix:after
  content:""
  display:block
  clear:both
.clearfix
  zoom:1
</style>
