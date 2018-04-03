<template>
  <div class="flower-mean">
    <div class="title">{{flo.FloName}}</div>
    <img :src="flo.floImg" style="float:right; margin:10px 0px 0px 20px" width="40%"/>
    <div v-show="flo.Moral">
      <div class="title2">寓意</div>
      <P class="main-text" v-html="flo.Moral">
      </P>
    </div>
    <div v-show="flo.Symblize">
      <div class="title2">象征</div>
      <p class="main-text" v-html="flo.Symblize">
      </p>
    </div>
    <div v-show="flo.Meaning">
      <div class="title2">含意</div>
      <p class="main-text" v-html="flo.Meaning">
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rose',
  props: {
    flo: {
      type: Object,
      default: function () {
        return {
          FloName: 'rose',
          Moral: '在中国，玫瑰则因其枝茎带刺，被认为是刺客、侠客的象征。<br/>而在西方则把玫瑰花当作严守秘密的象征，做客时看到主人家桌子上方画有玫瑰，就明白在这桌上所谈的一切均不可外传，于是有了Sub rosa，“在玫瑰花底下”这个拉丁成语。 英语的under the rose则是源自德语unter der Rosen，古代德国的宴会厅、会议室以及酒店餐厅，天花板上常画有或刻有玫瑰花，用来提醒与会者守口如瓶，严守秘密，不要把玫瑰花下的言行透露出去。这是起源于罗马神话中的荷鲁斯（Horus）撞见美女——爱的女神“维纳斯”偷情的情事，她儿子丘比特为了帮自己的母亲保有名节，于是给了他一朵玫瑰，请他守口如瓶，荷鲁斯收了玫瑰于是缄默不语，成为“沉默之神”，这就是under the rose之所以为守口如瓶的由来。<br/>',
          Symblize: '红玫瑰代表热情真爱<br/>黄玫瑰代表珍重祝福和嫉妒失恋<br/>紫玫瑰代表浪漫真情和珍贵独特<br/>白玫瑰代表纯洁天真<br/>黑玫瑰则代表温柔真心<br/>橘红色玫瑰友情和青春美丽<br/>蓝玫瑰则代表敦厚善良',
          Meaning: '1朵玫瑰代表——我的心中只有你 ONLY YOU！<br/>2朵玫瑰代表——这世界只有我俩！<br/>3朵玫瑰代表——我爱你 I LOVE YOU！<br/>4朵玫瑰代表——至死不渝！<br/>5朵玫瑰代表——由衷欣赏！<br/>6朵玫瑰代表——互敬 互爱 互谅！<br/>7朵玫瑰代表——我偷偷地爱著你！<br/>8朵玫瑰代表——感谢你的关怀扶持及鼓励！<br/>9朵玫瑰代表——长久 ALWAYS！<br/>10朵玫瑰代表——十全十美 无懈可击！<br/>11朵玫瑰代表——最爱 只在乎你一人！<br/>99朵玫瑰象徵——天长地久 FOREVER！<br/>100朵玫瑰象徵——百分之百的爱 100% LOVE！<br/>101朵玫瑰象徵——最……最爱！<br/>108朵玫瑰象徵——求 婚！赞同<br/>'
        }
      }
    }
  }
}
</script>
<style lang="stylus">
.flower-mean
  .title
    font: normal 600 30px "微软雅黑"
    color: #c21e1e
    text-align: left
    padding-bottom:20px
    border-bottom: 1px #2c3e50 solid
  .title2
    font: normal 500 20px "微软雅黑"
    color:#2a2a2a
    text-align: left
    padding-bottom:10px
  .main-text
    font: normal 400 14px "微软雅黑"
    text-align: left
    color:#444444
    padding-bottom:30px
</style>
