<template>
  <div class="my-message">
    <div class="title">{{title}}</div>
    <div class="goods-main">
      <img :src="imgs" width="200px" class="img2" height="200px"/>
      <div :class="[nameClass,changeName]">用户名：<span>{{name}}</span></div>
      <div :class="[phoneClass,change]">
        联系电话：<span v-show="changeOk">{{phone}}</span>
        <el-input placeholder="请输入电话号码" v-model="phone" clearable size="mini" v-show="!changeOk"></el-input>
        </div>
      <div :class="[phoneClass,change]">
        邮箱：<span v-show="changeOk">{{email}}</span>
        <el-input placeholder="请输入邮箱" v-model="email" clearable size="mini" v-show="!changeOk"></el-input>
      </div>
      <div :class="[addressClass,change]">
        地址：<span v-show="changeOk">{{stateName}}省{{cityName}}{{areaName}}{{address}}</span>
        <el-cascader v-model="selectedOptions" v-show="!changeOk" :options="CityInfo" size="mini" :change-on-select="true"></el-cascader>
        <el-input v-model="address" clearable size="mini" v-show="!changeOk"></el-input>
      </div>
      <div>
        <el-button type="warning" size="medium" v-show="changeOk" @click="changeMes">修改信息</el-button>
        <el-button type="warning" size="medium" v-show="changeOk" @click="quit">注销登录</el-button>
        <el-button type="success" size="medium" v-show="!changeOk" @click="okChange">确认修改</el-button>
        <el-button type="danger" size="medium" v-show="!changeOk" @click="noChange">取消修改</el-button>
        <span class="changeSuccess" v-show="changeSuccess">修改成功</span>
        <span class="changeFalse" v-show="changeFalse">修改失败</span>
      </div>
      <div style="clear:both;"></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// import { setCookie, getCookie, delCookie } from "../../../common/js/cookie.js";
import store from "../../../common/js/store.js";
import { mapState, mapMutations } from 'vuex';
import { CityInfo } from "../../../common/js/city-data.js";

export default {
  data() {
    return {
      changeOk: true,
      title: '用户管理',
      imgs: 'http://wx1.sinaimg.cn/mw690/6d659ba0gy1fmopxfbu5gj20ia0iaq3p.jpg',
      name: '',
      phone: 12345678912,
      email: '',
      state: '',
      city: '',
      area:'',
      address: '',
      uname:'',
      mes:'',
      stateName: '',
      cityName: '',
      areaName:'',
      nameClass: 'name',
      phoneClass: 'phone',
      addressClass: 'address',
      change: '',
      changeName: '',
      selectedOptions: [],
      changeSuccess: false,
      changeFalse: false
    }
  },
  created() {
    this.CityInfo = CityInfo
  },
  computed:mapState(["uName"]),
  mounted() {
     /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uname = this.uName;
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
    ...mapMutations(['del','delId']),
    quit() {
       /*删除cookie*/
      // delCookie("username");
      this.del()
      this.delId()
      this.$router.push("/login");
    },
    forCity(state,city,area) {
      for (var i in this.CityInfo) {
        if (this.CityInfo[i].value === state) {
          this.stateName = this.CityInfo[i].label
          let item = this.CityInfo[i].children
          for (var j in item){
            if (item[j].value === city) {
              this.cityName = item[j].label
              let index = item[j].children
              for (var k in index){
                if (index[k].value === area) {
                  this.areaName = index[k].label
                }
              }
            }
          }
        }
      }
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
          _this.state=parseInt(_this.mes.State);
          _this.city=parseInt(_this.mes.City);
          _this.area=parseInt(_this.mes.area);
          _this.address=_this.mes.Address;
          _this.forCity(_this.state,_this.city,_this.area)
          _this.selectedOptions.push(_this.state)
          _this.selectedOptions.push(_this.city)
          _this.selectedOptions.push(_this.area)
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
      this.phone=this.mes.Tel;
      this.email=this.mes.Email;
      this.state=this.mes.State;
      this.city=this.mes.City;
      this.area=this.mes.area;
      this.address=this.mes.Address;
    },
    okChange(){
      let _this=this;
      $.ajax({
        type: "POST",
        cache: false,
        url: "http://localhost:8088/flowershop/changeMyInf.php",
        data: {
          name: _this.name, 
          phone: _this.phone, 
          email: _this.email, 
          state: _this.selectedOptions[0], 
          city: _this.selectedOptions[1], 
          area: _this.selectedOptions[2], 
          address: _this.address
        },
        dataType: "text",
        success: function(data,textStatus) {
          console.log(data);
          if (data == 'ok'){
            let uname = _this.uName;
            _this.get(uname);
            // _this.mes.Tel = _this.phone;
            // _this.mes.Email = _this.email;
            // _this.mes.State = _this.state;
            // _this.mes.City = _this.city;
            // _this.mes.area = _this.area;
            // _this.mes.Address = _this.address;
            // _this.changeSuccess = true;
            setTimeout(() => {
              _this.changeOk = true;
              _this.changeSuccess = false; 
              _this.change = '';
              _this.changeName = '';
            }, 1000);
          }
          else if(data == 'false'){
            _this.changeFalse = true;
          }
        },
        error: function(msg) {
          _this.changeFalse = true;
        }
      })
    }
  },
  store 
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
      width : 200px
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
    .el-cascader
      display :inline-block
      width :200px
    .changeSuccess
      color :#008000
    .changeFalse
      color : #cc0000
</style>
