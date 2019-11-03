import {get} from '../../http/axios'
import moment from 'moment'
export default{
    namespaced:true,
    state:{
        orders:[],
    },
    getters:{
        // 根据订单状态把订单传到相应的条件下
        filterOrderByStatus(state){
            return (status) => {
                return state.orders.filter(order => order.status === status)
            }
        }
    },
    mutations:{
        refreshOrder(state,orders) {
            state.orders =orders 
        }
    },
    actions:{
        // async findAllOrder(context){
        //     let response = await get('/order/findAll');
        //     context.commit('refreshAllOrder',response.data);
        //     console.log("1221");
        // }
          // 查询员工的订单信息
          async findAllWaiterOrders({commit,rootState}){
            let waiterId = rootState.user.info.id;
            console.log("员工id",rootState.user.info.id);
            let response = await get("/order/query",{waiterId});
            response.data.forEach((item) =>{
                item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss')
            })
            commit('refreshOrder',response.data)
        },
        // 接受订单
        async acceptOrder({state,dispatch},orderId){
            let response = await get("/order/takeOrder",{orderId});
            dispatch("findAllWaiterOrders");
            return response;
        },
        // 拒绝订单
        async rejectOrder({dispatch},orderId){
            let response = await get("/order/rejectOrder",{orderId});
            dispatch("findAllWaiterOrders");
            return response;
        },
        // 完成订单
        async completeOrder({dispatch},orderId){
            let response = await get("/order/serviceCompleteOrder",{orderId});
            dispatch("findAllWaiterOrders");
            return response;
        }
    }
}