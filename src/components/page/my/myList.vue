<template>
  <div class="mylist">
    <div class="title">{{title}}</div>
    <div class="goods-main">
      <table>
        <tr v-for="(Data,item) in tableData" :key="item">
          <td class="floImg"><img src="http://wx3.sinaimg.cn/mw690/6d659ba0gy1fmd32g70xej20hs0hs0ua.jpg" width="20px"></td>
          <td class="name">{{Data.goodsPhoto}}</td>
          <td class="goodsPrice">￥{{Data.goodsPrice}}</td>
          <td class="sum">{{Data.count}}</td>
          <td class="price">￥{{Data.price}}</td>
          <td style="clear:both;"></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      title:'我的订单',
      tableData:[{
      goodsPhoto:'aaa',
      goodsName:'百合',
      goodsPrice:30,
      count:1,
      price:1
    },{
      goodsPhoto:'aaa',
      goodsName:'玫瑰',
      goodsPrice:20,
      count:1,
      price:1
    },{
      goodsPhoto:'aaa',
      goodsName:'向日葵',
      goodsPrice:25,
      count:2,
      price:1
      }]
      }
  },
  
}
</script>
<style lang="stylus">
.mylist
  .title
    text-align: left
    font: normal 600 38px '微软雅黑'
    color: #ff6666
    margin-bottom:10px
  .goods-main
    text-align: left
    border-top: 0px #2c3e50 solid
    border-right: 0px #2c3e50 solid
</style>
