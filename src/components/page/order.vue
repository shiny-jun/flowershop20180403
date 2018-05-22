<template>
  <div>
    <div class="deliveryMes">
      <div class="deliveryHead">收货信息</div>
      <div class="deliveryAdd">
        <div :class="[phoneClass,change]">
          联系电话：<span v-show="changeOk">{{phone}}</span>
          <el-input placeholder="请输入电话号码" v-model="phone" clearable size="mini" v-show="!changeOk"></el-input>
        </div>
        <div :class="[addressClass,change]">
          地址：<span v-show="changeOk">{{stateName}}省{{cityName}}{{areaName}}{{address}}</span>
          <el-cascader v-model="selectedOptions" v-show="!changeOk" :options="CityInfo" size="mini" :change-on-select="true"></el-cascader>
          <el-input v-model="address" clearable size="mini" v-show="!changeOk"></el-input>
        </div>
      </div>
      <div class="deliveryBtn"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phoneClass: 'phone',
      addressClass: 'address',
      mes: '',
      stateName: '',
      cityName: '',
      areaName: '',
      address: ''
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
