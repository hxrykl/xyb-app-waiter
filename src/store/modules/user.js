import{get,post_json,post}from '../../http/axios'
import {setToken,getToken,removeToken}from '../../utils/auth'
export default {
    namespaced:true,
    state:{
        // 刷新网页的时候从本地存储获取token
        token:getToken(),
        //用户信息
        info:{}
    },
    mutations:{
        refreshInfo(state,info){
            state.info=info;
        },
        // token保存，第一次本地还没有token,所以要先设置一次
        refreshToken(state,token){
            state.token=token;
            console.log(state.token);
        }
    },
    actions:{  
        // 通过员工登录信息
        async login(context,payload){
            //1.登陆获取token
            let response=await post_json("/user/login",payload);
            let token=response.data.token;
            //2.将token缓存起来  通过localStorage本地存储
            setToken(token);
            //3.将token维护到状态机
            context.commit("refreshToken",token);
            
        },
        // 通过token获取info
        async inFo(context,token){
           // 根据token获取用户信息
            let response=await get("/user/info",{token});
            //将用户信息设置到info中
            context.commit("refreshInfo",response.data)

        },
        //退出
        async logout(context){
            //1.请求后台退出
            await post("/user/logout");
            //2.清理本地缓存
            removeToken();
            //3.清理store
             context.commit('refreshToken',"");
            context.commit('refreshInfo',{});
        }
        
    }
}