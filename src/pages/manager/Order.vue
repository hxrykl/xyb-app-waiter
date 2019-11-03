<template>
  <div class="order">
      <van-nav-bar title="订单"></van-nav-bar>
        <van-tabs v-model="active">
          <van-tab title="所有订单">
            <!-- 所有订单的内容 -->
            <van-row v-if="orders.length !==0">
              <!-- {{token}} -->
              <van-panel class="title"  :title="o.customer.realname"  :status="o.status"  v-for="o in orders" :key="o.id">
                <van-row>
                  <van-col :span="4" style="text-align:center;margin-buttom:5px;">
                    <van-icon name="gold-coin-o" style="font-size:12px;color:gray;"></van-icon>
                  </van-col>
                  <van-col :span="20" style="font-size:12px;color:gray;">总额:{{o.total}}</van-col>
                </van-row>
                <van-row>
                  <van-col :span="4" style="text-align:center;margin-buttom:5px;">
                    <van-icon name="clock-o" style="font-size:12px;color:gray;"></van-icon>
                  </van-col>
                  <van-col :span="20" style="font-size:12px;color:gray;">下单时间:{{o.orderTime}}</van-col>
                </van-row>
                <!-- <van-row>
                  <van-col :span="4" style="text-align:center;margin-buttom:5px;">
                    <van-icon name="clock-o" style="font-size:12px;color:gray;"></van-icon>
                  </van-col>
                  <van-col :span="20" style="font-size:12px;color:gray;">服务内容:{{}}</van-col>
                </van-row> -->
                <van-row>
                  <van-col :span="4" style="text-align:center;margin-buttom:5px;">
                    <van-icon name="phone-o" style="font-size:12px;color:gray;"></van-icon>
                  </van-col>
                  <van-col :span="20" style="font-size:12px;color:gray;">电话:{{o.customer.telephone}}</van-col>
                </van-row>
                <van-row>
                  <van-col :span="4" style="text-align:center;margin-buttom:5px;">
                    <van-icon name="location-o" style="font-size:12px;color:gray;"></van-icon>
                  </van-col>
                  <van-col :span="20" style="font-size:12px;color:gray;">
                    地址:{{o.address.province}}{{o.address.city}}{{o.address.area}}{{o.address.address}}
                  </van-col>
                </van-row>
              </van-panel>
            </van-row>  
            
          </van-tab>
          <van-tab title="未接订单">
            <!-- 未接订单的内容 -->
            <van-row v-if="filterOrderByStatus('待接单').length !== 0">
              <van-panel v-for="o in filterOrderByStatus('待接单')" :key="o.id" :title="o.customer.realname" :status="o.status">
                  <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="gold-coin-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">总额：{{o.total}}</van-col>
                  </van-row>
                  
                  <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="clock-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">下单时间：{{o.orderTime}}</van-col>
                  </van-row>

                  <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="phone-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">顾客电话：{{o.customer.telephone}}</van-col>
                  </van-row>
                  <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="location-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                  </van-row>
                  <div slot="footer" style="text-align:right">
                      <div v-if="o.status === '待接单'">
                          <van-button type="danger" plain size="mini" @click="rejectOrderHandler(o.id)">拒绝</van-button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <van-button type="primary" plain size="mini" @click="acceptOrderHandler(o.id)">接受</van-button>
                      </div>
                  </div>
              </van-panel>
          </van-row>
          <van-row v-else-if="filterOrderByStatus('待接单').length === 0">
              <div class="nullData">暂无待接单信息</div>
          </van-row>
            
          </van-tab>
          
          <van-tab title="已接订单">
            <van-row v-if="filterOrderByStatus('待服务').length !== 0">
              <van-panel v-for="o in filterOrderByStatus('待服务')" :key="o.id" :title="o.customer.realname" :status="o.status">
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="gold-coin-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">总额：{{o.total}}</van-col>
                </van-row>
                
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="clock-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">下单时间：{{o.orderTime}}</van-col>
                </van-row>

                <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="phone-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">顾客电话：{{o.customer.telephone}}</van-col>
                  </van-row>
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="location-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                </van-row>
                <div slot="footer" style="text-align:right">
                    <div v-if="o.status === '待服务'"> 
                      <van-button type="warning" plain size="mini" @click="completeOrderHandler(o.id)">完成</van-button>
                    </div>
                </div>
              </van-panel>
                </van-row>
                <van-row v-else-if="filterOrderByStatus('待服务').length === 0">
                    <div class="nullData">暂无待服务信息</div>
                </van-row>
          </van-tab>
          <van-tab title="待确认">
            <van-row v-if="filterOrderByStatus('待确认').length !== 0">
              <van-panel v-for="o in filterOrderByStatus('待确认')" :key="o.id" :title="o.customer.realname" :status="o.status">
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="gold-coin-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">总额：{{o.total}}</van-col>
                </van-row>
                
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="clock-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">下单时间：{{o.orderTime}}</van-col>
                </van-row>

                <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="phone-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">顾客电话：{{o.customer.telephone}}</van-col>
                  </van-row>
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="location-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                </van-row>
              </van-panel>
          </van-row>
          <van-row v-else-if="filterOrderByStatus('待确认').length === 0">
              <div class="nullData">暂无待确认信息</div>
          </van-row>
          </van-tab>
          <van-tab title="完成订单">
            <van-row v-if="filterOrderByStatus('已完成').length !== 0">
              <van-panel v-for="o in filterOrderByStatus('已完成')" :key="o.id" :title="o.customer.realname" :status="o.status">
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="gold-coin-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">总额：{{o.total}}</van-col>
                </van-row>
                
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="clock-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">下单时间：{{o.orderTime}}</van-col>
                </van-row>

                <van-row>
                      <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                          <van-icon name="phone-o" style="font-size:12px;color:gray;"></van-icon>
                      </van-col>
                      <van-col :span="20" style="font-size:12px;color:gray;">顾客电话：{{o.customer.telephone}}</van-col>
                  </van-row>
                <van-row>
                    <van-col :span="4" style="text-align:center;margin-bottom:5px;">
                        <van-icon name="location-o" style="font-size:12px;color:gray;"></van-icon>
                    </van-col>
                    <van-col :span="20" style="font-size:12px;color:gray;">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                </van-row>
              </van-panel>
            </van-row>
            <van-row v-else-if="filterOrderByStatus('已完成').length === 0">
              <div class="nullData">暂无已完成信息</div>
            </van-row>
          </van-tab>
        </van-tabs>
     
  </div>
</template>
<script>

import {mapState,mapActions, mapGetters} from 'vuex'

export default {
  data(){
    return {
      active:'所有订单'
    }
  },
  created(){
    // this.findAllOrder()
    this.inFo(this.token);

    console.log("ordertoken",this.token);
    // t通过状态筛选订单
    this.filterOrderByStatus();
    // 查询员工的订单
    this.findAllWaiterOrders();
    
    
  },
  computed:{
    ...mapState('order',['orders']),
    ...mapState('user',['token']),
    ...mapGetters('order',['filterOrderByStatus'])
  },
  methods:{
    //...mapActions('order',['findAllOrder']),
    ...mapActions("order",["findAllWaiterOrders","acceptOrder","rejectOrder","completeOrder"]),
    ...mapActions('user',['inFo']),
        // 普通方法
        // 拒绝订单
        rejectOrderHandler(orderId){
            this.$emit('reject',orderId);
            this.rejectOrder(orderId)
            .then((response) => {
                this.$toast(response.statusText);
            })
        },
        // 接受订单
        acceptOrderHandler(orderId){
            this.$emit('accept',orderId);
            this.acceptOrder(orderId)
            .then((response) => {
                this.$toast(response.statusText);
            })
        },
        // 完成订单
        completeOrderHandler(orderId){
            this.$emit('complete',orderId);
            this.completeOrder(orderId)
            .then((response) => {
                this.$toast(response.statusText);
            })
        }
  }
}
</script>
<style  scoped>
div.nullData {
  text-align: center;
  color: #cdcdcd;
  line-height: 3em;
}
</style>