<template>
  <div class="login">
      <div class="header">
        <div class="logo">jz</div>
        <div class="title">
          家政服务平台--员工端
        </div>
      </div>
      <div class="form">
        {{form}}
        <van-cell-group>
          <van-field
            v-model="form.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
          />

          <van-field
            v-model="form.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <div style="text-align:center">
          <van-button type="default"
            icon="https://img.yzcdn.cn/vant/logo.png" 
            @click="loginHandler">登陆</van-button>
        </div>
      </div>
  </div>
</template>
<script>
import {mapActions,mapMutations,mapGetters,mapState} from 'vuex'
export default {
  data(){
    return{
      form:{
        type:'waiter'
      }
    }
  },
  methods:{
    ...mapActions("user",["login"]),
    // 登录方法
    loginHandler(){
      // 提交员工账号，密码，类型
      this.login(this.form)
      .then(()=>{
        //登陆成功，跳到首页
        this.$router.push({path:'/manager/home'})
      })
    }
  }
}
</script>
<style scoped>
   .header{
    height:140px;
    padding:50px;
    color:#ffffff;
    background-color:cyan;
    text-align: center
  }
  .header .logo {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    border:1px solid #efefef;
    margin:0 auto;
    color: #efefef;
    font-weight:bold;
    margin-bottom: 1em;

  }
  .header .title {
    font-size: 24px;
  }
</style> 
 


