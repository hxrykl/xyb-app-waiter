<template>
  <div class="user">
      <!-- <div class="nav">
        <van-nav-bar title="我的页面"/>
      </div>
    <p>
      <a href="" @click.prevent="logoutHandler">退出</a>
    </p> -->
    <div class="img" style="background:#4696f9;height:220px;">
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
      <van-button plain type="danger" 
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
    // 我的订单方法
    myOrder() {},
    myEarnings() {},
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