<template>
  <div class="footer">
      {{footMes}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      footMes: 'Copyright © 2017-2018 花点 flowerShop.com'
    }
  }
}
</script>
<style lang="stylus">
/* 页面内容 */
.footer
  border-top :1px solid #cccccc
  margin :20px 0px
  padding :20px 0px
</style>
