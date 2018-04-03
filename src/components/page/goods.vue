/* eslint-disable */
<template>
  <div class="goods">
    <div class="title">
      {{title}}
    </div>
    <div class="goods-main">
      <div class="img2">
        <el-carousel :interval="3000">
          <el-carousel-item v-for="(detail,item) in details" :key="item">
            <img :src="detail.imgs" width="100%">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="name">{{goodsInf.FloName}}</div>
      <div class="price">￥{{goodsInf.Price}}</div>
      <div class="buyed">销量：{{goodsInf.Buyed}} | 库存：{{goodsInf.Inventory}}</div>
      <div class="buyed">原产地：{{goodsInf.FloAddress}}</div>
      <div class="sum">
        数量：<el-input-number v-model="num1" @change="handleChange" :min="1" :max="inventory" label="数量"></el-input-number>
      </div>
      <div class="button">
        <el-button type="warning" size="medium" @click="getInCart">加入购物车</el-button>
        <el-button type="danger" size="medium">立即下单</el-button>
      </div>
      <div class="get-cart" v-show="getCart">成功加入购物车</div>
      <div class="false-cart" v-show="falseCart">加入购物车失败</div>
      <div style="clear:both;"></div>
    </div>
    <div class="goods-main" style="border-top: 0px #2c3e50 solid;">
        <!-- <flowerMean></flowerMean> -->
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable */
export default {
  data () {
    return {
      title: 'ROSE',
      num1: 1,
      inventory: 1,
      imgs: 'http://wx3.sinaimg.cn/mw690/6d659ba0gy1fmd32g70xej20hs0hs0ua.jpg',
      // flowerMean:'rose',
      details: [
        {imgs: 'http://wx3.sinaimg.cn/mw690/6d659ba0gy1fmd32g70xej20hs0hs0ua.jpg'},
        {imgs: 'http://wx2.sinaimg.cn/mw690/6d659ba0gy1fmd32leslaj20h00h0myq.jpg'},
        {imgs: 'http://wx2.sinaimg.cn/mw690/6d659ba0gy1fmd32kydrpj20ro0r6tb3.jpg'}
      ],
      goodsInf: '',
      goodsListId: '',
      getCart: false,
      falseCart: false,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    getInCart () {
      let _this = this      
      $.ajax ({
        type: 'POST',
        cache: false,
        url: 'http://localhost:8088/flowershop/getCart.php',
        data: {floId: _this.goodsListId, num: _this.num1, userId: "1"},
        dataType: 'text',
        success: function (data, textStatus) {
          console.log(data)
        }
      })
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  mounted () {
    this.goodsListId = this.$route.params.goodsListId
    let _this = this
    $.ajax ({
      type: 'POST',
      cache: false,
      url: 'http://localhost:8088/flowershop/goodsInf.php',
      data: {floId: _this.goodsListId},
      dataType: 'text',
      success: function (data, textStatus) {
        console.log(data)
        _this.goodsInf = JSON.parse(data)
        _this.inventory = parseInt(_this.goodsInf.Inventory)
      }
    })
  }
}
</script>
<style lang="stylus">
.goods
  margin: 50px 150px
  .title
    text-align: left
    font: normal 600 38px '微软雅黑'
    color: #ff6666
    margin-bottom:10px
  .goods-main
    text-align: left
    border-top: 1px #2c3e50 solid
    border-right: 1px #2c3e50 solid
    padding-top: 20px
    .el-carousel__item h3 
      color: #475669
      font-size: 18px
      opacity: 0.75
      line-height: 300px
      margin: 0
    .el-carousel__item:nth-child(2n) 
      background-color: #99a9bf
    .el-carousel__item:nth-child(2n+1) 
      background-color: #d3dce6
    .img2
      margin: 0px 30px 20px 0px
      width :330px
      overflow :hidden
      float: left
      img
        padding-top :auto
    .name
      font: normal 400 20px '微软雅黑'
      padding-bottom: 20px
    .price
      font: normal 600 30px '微软雅黑'
      padding-bottom: 20px
      color: red
    .buyed
      font:normal 500 15px '微软雅黑'
      padding-bottom: 15px
    .sum
      font:normal 400 19px '微软雅黑'
      padding-bottom: 20px
    .button
      padding-bottom :15px
    .getCart
      font:normal 400 19px '微软雅黑'
      color :green
    .falseCart
      font:normal 400 19px '微软雅黑'    
      color :red
</style>
