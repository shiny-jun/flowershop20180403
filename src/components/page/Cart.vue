<template>
  <div class="cart">
    <el-row>
       <el-col :span='7' class="pos-order" id="order-list">
         <el-tabs>
           <el-tab-pane label="全部商品">
            <el-table :data="tableData" style="width:100%">
              <el-table-column prop="FloImg" label="商品图片" width="200">
                <template slot-scope="scope">
                    <img  :src="scope.row.FloImg" alt="" style="width: 70px;height: 70px">
                </template></el-table-column>
              <el-table-column prop="FloName" label="商品信息" width="400"></el-table-column>
              <el-table-column prop="Price" label="单价" width="80"></el-table-column>
              <el-table-column prop="FlosSum" label="数量" width="80"></el-table-column>
              <el-table-column prop="allPrice" label="金额" width="80"></el-table-column>
              <el-table-column label="操作" width="140">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">+</el-button>
                  <el-button type="text" size="small" @click="redOrderList(scope.row)">-</el-button>
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="div-btn">
               <span class="totalDiv">
                                <small>数量：</small>
                                <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                <small>总计：</small>
                                <strong>{{totalMoney}}</strong>元
               </span><el-button type="success">结账</el-button>
            </div>
           </el-tab-pane>
           <el-tab-pane label="失效商品">
             失效商品
           </el-tab-pane>
           <el-tab-pane label="降价商品">
             降价商品
           </el-tab-pane>
         </el-tabs>
       </el-col>
     </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import store from "../../common/js/store.js";
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Cart',
  data () {
    return {
      totalCount:0,
      totalMoney:0,
      tableData:[]
    }
  },
  computed:mapState(['userId']),
  mounted:function(){
    // var orderHeight=document.body.clientHeight;
    // document.getElementById('order-list').style.height=orderHeight+'px';
  },
  created:function(){
    if (this.userId == null) {
      this.$router.push("/login");
    }
    else{
      let _this=this;
      $.ajax({
        type: "POST",
        cache: false,
        url: "http://localhost:8088/flowershop/CartList.php",
        data: {userId:_this.userId},
        dataType: "text",
        success: function(data,textStatus) {
          if(data == 0){

          } else {
            let mes = JSON.parse(data);
            for (let item in mes) {
              _this.tableData.push(mes[item])
            }
            console.log(_this.tableData)
            for (var i=1; i<_this.tableData.length; i++) {
              _this.totalCount=_this.totalCount+_this.tableData[i].FlosSum
              _this.totalMoney=_this.totalMoney+_this.tableData[i].allPrice
              console.log(_this.totalCount)
            }
            _this.getAllMoney()
          }
        }
      })
    }
  },
  methods:{
    addOrderList(goods) {
      this.totalCount = 0// 汇总数量清0
      this.totalMoney = 0
      let isHave = false
      // 判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].FloName == goods.FloName) {
          isHave = true //存在   
        }
      }
      // 根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        // 存在就进行数量添加
        console.log("hello!")
        let arr = this.tableData.filter(o => o.FloName == goods.FloName)
        arr[0].FlosSum++
        this.add(goods.FloName,'+')
        arr[0].allPrice=arr[0].allPrice+arr[0].Price
      } else {
        // 不存在就推入数组
        // let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
        // this.tableData.push(newGoods);
      }
      this.getAllMoney()
    },
    redOrderList(goods) {
      this.totalCount = 0 // 汇总数量清0
      this.totalMoney = 0
      let isHave = false;
      // 判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].FloName == goods.FloName) {
          isHave = true // 存在   
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.FloName == goods.FloName)
        if (arr[0].FlosSum>0) {  
          arr[0].FlosSum--
          arr[0].allPrice=arr[0].allPrice-arr[0].Price
        }
        this.add(goods.FloName,'-')
      } else {
            //不存在就推入数组
            //let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
            //this.tableData.push(newGoods);
      }
      this.getAllMoney()
    },
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.FloName != goods.FloName)
      this.getAllMoney()
      this.add(goods.FloName,'del')
    },
    getAllMoney() {
      this.totalCount = 0
      this.totalMoney = 0
      if (this.tableData) {
        this.tableData.forEach((element) => {
        this.totalCount += element.FlosSum
        this.totalMoney = this.totalMoney + (element.Price * element.FlosSum)
        })
      }
    },
    add(FloName,way){
      $.ajax({
        type: 'POST',
        cache: false,
        url: 'http://localhost:8088/flowershop/CartAdd.php',
        data: {floname: FloName, way: way},
        dataType: 'text',
        success: function(data, textStatus) {
        }
      })
    }
  },
  store 
}
</script>
//局部变量
<style lang="stylus">
.cart
  text-align: left
  .pos-order
    background-color: #f9fafc
    /* border-right: 1px solid #c0ccda; */
    padding:0px 10px
    width: 100%
    .div-btn
      text-align: right
      padding: 10px
      padding-left:20px
</style>
