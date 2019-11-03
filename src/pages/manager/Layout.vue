<template>
<!-- 后台管理总页面 -->
  <div class="layout">
        <!-- 用于接受管理页面，首页，订单页，我的页面 -->
      <router-view></router-view>
      <!-- info:{{info}} -->
      <div>
          <!-- <router-link to="/manager/home">首页</router-link>
          <router-link to="/manager/order">订单</router-link>
          <router-link to="/manager/user">我的</router-link> -->
        <van-tabbar v-model="active" 
        active-color="#02b8a6"
        @change="tabChangeHandler">
          <van-tabbar-item name="/manager/home" icon="star-o">首页</van-tabbar-item>
          <van-tabbar-item name="/manager/order" icon="search">订单</van-tabbar-item>
          <van-tabbar-item name="/manager/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>  
    </div>
  </div>
</template>
<script>
import{mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  data(){
    return{
      active:0
    }
  },
  created(){

    // alert(this.token);
    // if(this.token){
    //   //查询info
    //   this.getInfo(this.token);
    // }else{
    //   this.$toast("token失效")
    //   //跳转到登陆
    //   this.$router.push({path:'/login'})
    // }
  },
  components:{
    ...mapState("user",["token","info"])
  },
  methods:{
    ...mapMutations("user",{
      'getInfo':"info"
    }) ,
    // 跳转到其他页面
    tabChangeHandler(path){
      this.$router.push({path})
    }
  }
}
</script>