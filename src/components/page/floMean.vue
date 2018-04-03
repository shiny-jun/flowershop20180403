<template>
  <div class="flo-mean">
    <el-row>
      <el-col :span="5">
        <el-menu
        :default-active="'玫瑰'"
        :route="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#fe8989"
        text-color="#fff"
        active-text-color="#632461">
          <div v-for="(flo, index) in floMean" :key="index" @click="floType(flo, $event)">
            <el-menu-item :index="flo.FloName">
              <span slot="title">{{flo.FloName}}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="16" class="content">
        <flowerMean :flo="selectedFlo"></flowerMean>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import flowerMean from '@/components/page/flowerMean'
/* eslint-disable */
export default {
  name: 'fliowerMean',
  data () {
    return {
      floMean: [],
      selectedFlo: {
          FloName: '玫瑰',
          Moral: '在中国，玫瑰则因其枝茎带刺，被认为是刺客、侠客的象征。<br/>而在西方则把玫瑰花当作严守秘密的象征，做客时看到主人家桌子上方画有玫瑰，就明白在这桌上所谈的一切均不可外传，于是有了Sub rosa，“在玫瑰花底下”这个拉丁成语。 英语的under the rose则是源自德语unter der Rosen，古代德国的宴会厅、会议室以及酒店餐厅，天花板上常画有或刻有玫瑰花，用来提醒与会者守口如瓶，严守秘密，不要把玫瑰花下的言行透露出去。这是起源于罗马神话中的荷鲁斯（Horus）撞见美女——爱的女神“维纳斯”偷情的情事，她儿子丘比特为了帮自己的母亲保有名节，于是给了他一朵玫瑰，请他守口如瓶，荷鲁斯收了玫瑰于是缄默不语，成为“沉默之神”，这就是under the rose之所以为守口如瓶的由来。<br/>',
          Symblize: '红玫瑰代表热情真爱<br/>黄玫瑰代表珍重祝福和嫉妒失恋<br/>紫玫瑰代表浪漫真情和珍贵独特<br/>白玫瑰代表纯洁天真<br/>黑玫瑰则代表温柔真心<br/>橘红色玫瑰友情和青春美丽<br/>蓝玫瑰则代表敦厚善良',
          Meaning: '1朵玫瑰代表——我的心中只有你 ONLY YOU！<br/>2朵玫瑰代表——这世界只有我俩！<br/>3朵玫瑰代表——我爱你 I LOVE YOU！<br/>4朵玫瑰代表——至死不渝！<br/>5朵玫瑰代表——由衷欣赏！<br/>6朵玫瑰代表——互敬 互爱 互谅！<br/>7朵玫瑰代表——我偷偷地爱著你！<br/>8朵玫瑰代表——感谢你的关怀扶持及鼓励！<br/>9朵玫瑰代表——长久 ALWAYS！<br/>10朵玫瑰代表——十全十美 无懈可击！<br/>11朵玫瑰代表——最爱 只在乎你一人！<br/>99朵玫瑰象徵——天长地久 FOREVER！<br/>100朵玫瑰象徵——百分之百的爱 100% LOVE！<br/>101朵玫瑰象徵——最……最爱！<br/>108朵玫瑰象徵——求 婚！赞同<br/>',
          floImg:'http://wx2.sinaimg.cn/large/6d659ba0gy1fmd329pmv3j20dw0dwq4j.jpg'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    floType(flo,event) {
      // if (!event._constructed) {
      //   return
      // }
      this.selectedFlo = flo
    }
  },
  components: {
    flowerMean
  },
  created:function() {
    this.$http.get('http://localhost:8088/flowershop/floMean.php').then((response) => {
      this.floMean = response.data
      console.log(this.floMean)
     }) .catch(function (response) {
      console.log(response)
    })
  }
}
</script>
<style lang="stylus">
.flo-mean
  .content
    margin: 10px 50px
</style>
