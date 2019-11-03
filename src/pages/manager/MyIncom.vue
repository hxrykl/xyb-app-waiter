<template>
    <div class="myincom">
        <div style="background-color:#02b8a6;">
            <van-row style="line-height: 3em;">
                <van-col span="3" style="padding-left:10px;">
                   <van-icon name="arrow-left" @click="backPage" />
                </van-col>
                <van-col span="10" offset="3">
                    <div style="text-align:center;color:#fff;">
                        我的收入
                    </div>
                </van-col>
            </van-row>
        </div>
        <div>
            <van-row v-if="wcOrder.length !== 0">
              <van-panel v-for="o in filterOrderByStatus('已完成')" :key="o.id" :title="o.customer.realname+'的订单'" >
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
                <!-- <van-row>
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
                </van-row> -->
              </van-panel>
            </van-row>
            <van-row v-else-if="filterOrderByStatus('已完成').length === 0">
              <div class="nullData">暂无收入</div>
            </van-row>
        </div>
        <div style="position:fixed;bottom:65px;padding-left: 15px;">
            总共收入:<span style="font-size:24px;color:red;">{{allincome+'.00'}}</span>元
        </div>
    </div>
</template>



<script>

import {mapState,mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            allincome:0,
            wcOrder:[]
        }
    },
    computed: {
        ...mapGetters('order',['filterOrderByStatus']),
    },
    created() {
        this.wcOrder = this.filterOrderByStatus('已完成');
        this.wcOrder.map((item,index)=>{
            this.allincome += item.total
        })
        console.log('执行',this.wcOrder);
    },
    methods: {
        backPage() {
            this.$router.go(-1);
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