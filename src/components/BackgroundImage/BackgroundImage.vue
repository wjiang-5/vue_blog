<template>
 <div>
  <div class="Image">
      <img :src="imgSrc" width="100%" height="100%" alt="" />      
  </div>
  <HeadHtml></HeadHtml>
  <BetWeenHtml></BetWeenHtml>
  <EndHtml></EndHtml>
  </div>
</template>

<script>
import HeadHtml from "../head/Head" //引入头组件
import BetWeenHtml from "../between/Between" //引入中组件
import EndHtml from "../end/end" //引入尾组件
export default {
  name: 'BackgroundImage',
  components:{    //注册组件
    HeadHtml,
    BetWeenHtml,
    EndHtml
  },
  data () {
    return {
       imgSrc:require('../../assets/images/BackgroundImage.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Image{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
    top: 0px;  /* 这里是设置与顶部的距离*/
    left: 0px;  /* 这里是设置与左边的距离*/
}
</style>
