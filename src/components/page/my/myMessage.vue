<template>
  <div class="my-message">
    <div class="title">{{title}}</div>
    <div class="goods-main">
      <img :src="imgs" width="200px" class="img2" height="200px"/>
      <div :class="[nameClass,changeName]">用户名：<span>{{name}}</span></div>
      <div :class="[phoneClass,change]">联系电话：<span v-show="changeOk">{{phone}}</span><el-input placeholder="请输入电话号码" v-model="inputPhone" clearable size="mini" v-show="!changeOk"></el-input></div>
      <div :class="[phoneClass,change]">邮箱：<span v-show="changeOk">{{email}}</span><el-input placeholder="请输入邮箱" v-model="inputEmail" clearable size="mini" v-show="!changeOk"></el-input></div>
      <div :class="[addressClass,change]">地址：<span v-show="changeOk">{{state}}省{{city}}市{{address}}</span>
      <VDistpicker class="changeCity" v-show="!changeOk" :province="state+'省'" :city="city+'市'" area="海珠区"></VDistpicker></div>
      <el-cascader :options="CityInfo" @active-item-change="handleItemChange" :change-on-select="true"
				:clearable="true"
				:filterable="true"></el-cascader>
      <div>
        <el-button type="warning" size="medium" v-show="changeOk" @click="changeMes">修改信息</el-button>
        <el-button type="warning" size="medium" v-show="changeOk" @click="quit">注销登录</el-button>
        <el-button type="success" size="medium" v-show="!changeOk" @click="okChange">确认修改</el-button>
        <el-button type="danger" size="medium" v-show="!changeOk" @click="noChange">取消修改</el-button>
      </div>
      <div style="clear:both;"></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { setCookie, getCookie, delCookie } from "../../../common/js/cookie.js";
import VDistpicker from 'v-distpicker';
import {CityInfo} from "../../../common/js/city-data.js";

export default {
  data() {
    return {
      changeOk: true,
      title: "用户管理",
      imgs: "http://wx1.sinaimg.cn/mw690/6d659ba0gy1fmopxfbu5gj20ia0iaq3p.jpg",
      name: "",
      phone: 12345678912,
      email: "",
      state: "",
      city: "",
      address: "",
      uname:'',
      mes:'',
      inputPhone: '',
      inputEmail: '',      
      inputAddress: '',
      nameClass: 'name',
      phoneClass: 'phone',
      addressClass: 'address',
      change: '',
      changeName: '',
      selected:'',
      selected2:'',
      options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
    }
  },
  mounted() {
     /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uname = getCookie("username");
    this.name = uname; 
     /*如果cookie不存在，则跳转到登录页*/
    if (uname == "") {
      this.$router.push("/login");
    }
    else{
      this.get(uname);
    }
    console.log(CityInfo)
  },
  methods: {
    quit() {
       /*删除cookie*/
      delCookie("username");
      this.$router.push("/login");
    },
    get(uName){
      let _this=this;
      $.ajax({
        type: "POST",
        cache: false,
        url: "http://localhost:8088/flowershop/myInf.php",
        data: {name:uName},
        dataType: "text",
        success: function(data,textStatus) {
          console.log(data);
          _this.mes = JSON.parse(data);
          _this.imgs=_this.mes.himg;
          _this.phone=_this.mes.Tel;
          _this.email=_this.mes.Email;
          _this.state=_this.mes.State;
          _this.city=_this.mes.City;
          _this.address=_this.mes.Address;
        }
      })
     },
     changeMes(){
      this.changeOk = false
      this.change = 'change'
      this.changeName = 'changeName'
     },
     noChange(){
       this.changeOk = true
      this.change = ''
      this.changeName = ''
     },
     okChange(){
      let _this=this;
      $.ajax({
        type: "POST",
        cache: false,
        url: "http://localhost:8088/flowershop/changeMyInf.php",
        data: {name: _this.inputName, phone: _this.inputPhone, email: _this.inputEmail, address: _this.inputAddress},
        dataType: "text",
        success: function(data,textStatus) {
          console.log(data);
          
          _this.phone=_this.inputPhone;
          _this.email=_this.inputPhone;
          _this.state=_this.inputState;
          _this.city=_this.inputCity;
          _this.address=_this.inputAddress;
        }
      })
     },
     handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
   },
  components: { VDistpicker }   
}
</script>
<style lang="stylus">
.my-message
  .title
    text-align: left
    font: normal 600 38px "微软雅黑"
    color: #ff6666
    margin-bottom: 10px
  .goods-main 
    text-align: left
    border-top: 1px #2c3e50 solid
    border-right: 1px #2c3e50 solid
    padding-top: 20px
    .el-button
      margin :0px 10px 0px 0px
    .el-input
      width : 300px
    .img2
      margin: 0px 20px 20px 0px
      float: left
    .name
      font: normal 600 20px "微软雅黑"
      padding-bottom: 20px
    .phone 
      font: normal 400 15px "微软雅黑"
      padding-bottom: 20px
    .address 
      font: normal 500 15px "微软雅黑"
      padding-bottom: 20px
    .changeName
      padding-bottom: 17px
    .change
      padding-bottom: 13px
    .changeCity
      display :inline-block    
    .distpicker-address-wrapper
      select
        height :30px
        padding :5px 7px
        font-size: 12px
</style>
