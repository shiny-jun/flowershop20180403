<template>
  <div class="all-list">
    <el-carousel :interval="5000" height="250px" type="card" arrow="always" >
      <el-carousel-item v-for="(item,item2) in itemImgs" :key="item2" >
        <router-link to="/goods" :goodslist="goodslist" >
          <img :src="item.url" width="100%"/>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <!-- 商品展示 -->
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="综合排名" name="first">
        <ul>
            <li v-for="(goods,item) in goodslist" :key="item" class="goods-list" @click="getGood(goods)">
              <p><img :src="goods.FloImg" width="100%"/></p>
              <p class="price">￥{{goods.Price}}</p>
              <p class="goods-name">{{goods.FloName}}</p>
            </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="人气">
      </el-tab-pane>
      <el-tab-pane label="价格由高到低">
      </el-tab-pane>
      <el-tab-pane label="价格由低到高">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script scoped>
/* eslint-disable */
export default {
  name: 'allList',
  data() {
    return {
      itemImgs:[
        {
          url: 'http://wx2.sinaimg.cn/large/6d659ba0gy1fmd2vqsx2qj20rs0dwwkv.jpg',
          href: '/goods'
        },
        {
          url: 'http://wx4.sinaimg.cn/large/6d659ba0gy1fmd3erok9aj20rs0dwdlb.jpg',
          href: '/goods'
        },
        {
          url: 'http://wx3.sinaimg.cn/large/6d659ba0gy1fmd3294et1j20rs0dwn4u.jpg',
          href: '/goods'},
        {
          url: 'http://wx4.sinaimg.cn/large/6d659ba0gy1fmd4d31tpqj20rs0dwwkr.jpg',
          href: '/goods'
        }
      ],
      activeName2: 'first',
      goodslist: [],
      selectGoods: {
        FloName: 'rose'
      }
    }
  },
  methods: {
    handleClick(tab, event) {
    console.log(tab, event)
    },
    getGood (goods) {
      this.selectGoods = goods
      console.log(this.selectGoods)
      this.$router.push({name:'goods', params: {goodsListId: this.selectGoods.FloId}});
    }
  },
  created:function() {
    this.$http.get('http://localhost:8088/flowershop/floList.php').then((response) => {
      this.goodslist = response.data
      console.log(this.goodslist)
     }) .catch(function (response) {
      console.log(response)
    })
  }
}
</script>
<style lang="stylus">
.all-list
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
  .price
      font:normal 700 18px "微软雅黑"
      color: red
      text-align: left
  .goods-name
      font:normal 400 14px "微软雅黑"
      text-align: left
  .goods-list
      border: 1px  #e6e6e6 solid
      width: 212px
      padding: 12px
      float: left
      margin: 10px 5px 0px
  img
      text-align: center
      line-height: 400px
</style>
