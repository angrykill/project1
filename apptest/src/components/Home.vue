<template>
  <div>
     <!--上-->
     <div class="index-category">
       <div class="category" v-for="(lists,i) in lists" :key="i">
          <i class="iconfont" :class="lists.icon" :style="{background:lists.color}"></i>
          <label>{{lists.title}}</label>
       </div>
     </div>  
     <!--中-->
     <div class="banner">
        <img  src="../assets/img/1.jpg"/>
        <div class="banner-circle">
          <ul>
            <li class="selected"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
     </div>
     <!--下-->
     <div></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      lists:[
        {title:'美食',icon:'icon-meishi',color:'#c060ff'},
        {title:'家居生活',icon:'icon-jiajushenghuo',color:'#FF3399'},
        {title:'营养保健',icon:'icon-yingyangbaojian',color:'#CC99CC'},
        {title:'宠食',icon:'icon-chongshi',color:'#33CCFF'},
        {title:'美妆个护',icon:'icon-meizhuanggehu',color:'#fa66b6'},
        {title:'母婴用品',icon:'icon-muyingleimu',color:'#2060ff'},
        {title:'分类',icon:'icon-fenlei',color:'#33FFCC'},
        {title:'购物车',icon:'icon-gouwuche',color:'#fa69b9'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
