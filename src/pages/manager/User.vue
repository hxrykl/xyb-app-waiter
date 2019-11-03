<template>
  <div class="user">
    <div class="img" style="background:#02b8a6;height:220px;">
      <div style="text-align:right;padding:0.5em;">
        <span style="color:white;font-size:1.2em;">设置</span>
      </div>
      <div style="text-align:center;">
        <van-image
          round
          width="100px"
          height="100px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          fit="cover"
          style="border:4px solid #ddd"
        />
        <div><span style="color:white;font-size:1.5em;">{{info.name}}</span></div>
        <div style="height:0.5em;"></div>
      </div>
    </div>
    <div class="body">
      <van-cell is-link @click="myEarnings">我的收入</van-cell>
       <van-cell is-link @click="myOrder">我的订单</van-cell>
    </div>
    <div class="btn" style="text-align:center;">
      <van-button plain color="#ff912f" 
      @click="logoutHandler" size="large" 
      style="width:65%;height:40px;line-height:40px;border-radius:4px;margin-top:230px;">
      退出</van-button>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import {mapActions,mapMutations,mapGetters,mapState} from 'vuex'
export default {
  methods:{
    //动作
    ...mapActions("user",["logout"]),
    //普通方法
    // 跳转到我的订单方法
    myOrder() {
      this.$router.push({path:'/manager/order'})
    },
    // 跳转到我的收入界面方法
    myEarnings() {
      this.$router.push({path:'/manager/myincom'})
    },
    // 退出登录方法
    logoutHandler(){
      this.logout()//退出
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  },
  computed:{//为一个对象
    ...mapState("user",["info","token"])
  }
  
}
</script>

<style>

</style>