<template>
  <div class="my">
    <el-tabs :tab-position="tabPosition" style="">
      <el-tab-pane label="用户管理">
        <my-message></my-message>
      </el-tab-pane>
      <el-tab-pane label="我的订单">
        <myList></myList>
      </el-tab-pane>
      <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
      <el-tab-pane label="我的评价">我的评价</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import myMessage from '@/components/page/my/myMessage'
import myList from '@/components/page/my/myList'
export default {
  name: 'my',
  data () {
    return {
      tabPosition: 'left'
    }
  },
  components: {
    myMessage, myList
  }
}
</script>
<style lang="stylus">
.my
  width:100%
</style>
