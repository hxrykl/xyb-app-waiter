<template>
  <div class="home">
    <div class="photo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img width="100%" height="300px" src="../../assets/images/1.png" alt=""></van-swipe-item>
        <van-swipe-item><img width="100%" height="300px" src="../../assets/images/2.png" alt=""></van-swipe-item>
        <van-swipe-item><img width="100%" height="300px" src="../../assets/images/3.png" alt=""></van-swipe-item>
        <van-swipe-item><img width="100%" height="300px" src="../../assets/images/4.png" alt=""></van-swipe-item>
      </van-swipe>
      <!-- {{token}}
      {{info}} -->
    </div>
    
  </div>
  
  
</template>
<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {

  computed:{//为一个对象
    ...mapState("user",["info",'token']),
  
  },
  created() {
    console.log("hahaha");
    this.inFo(this.token)
  },
  methods: {
    ...mapActions('user',['inFo']),
  }
}
</script>
<style scoped>

</style>