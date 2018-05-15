<template>
    <!--优选网络-->
    <div class="net_area_container" v-if="showNets">
        <div class="net_area">
            <div class="tipName">优选网络</div>
            <ul class="net_list">
                <li v-for="(item,index) in netList" @click="chooseOneNet(item,index)">
                    <img class="checkFlag" :src="item.selected ? checkedBtn : noCheckedBtn"></img>
                    <span :class="['imgDesc',item.selected ? 'clB' : '']">{{item.label.substring(0,item.label.indexOf('（'))}}</span>
                </li>
            </ul>
            <div class="bot">
                <span @click="close()">取消</span>
                <span @click="submitNet()">确定</span>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'chooseNet',
    data () {
      return {
        // channel: '',
        netList: [],
        checkedBtn: require('../../assets/imgs/interactive/tRadioBtn.png'),
        noCheckedBtn: require('../../assets/imgs/interactive/fRadioBtn.png'),
        choosedNetName: '',
        // showNets: false
      }
    },
    computed: {
      ...mapGetters(['showNets','netChannel'])
    },
    watch: {
    },
    mounted () {
      this.initialNetChannel();
    },
    methods: {
      // 初始化通讯通道
      initialNetChannel(){
        setTimeout(() => {
          if(typeof window.GS !== 'undefined'){
            console.log("<====$$$$$$$$$$$=====>")
            console.log(window.GS)
            console.log("<====$$$$$$$$$$$=====>")
            console.log(GS.createChannel())
            var that = this;
            this.$store.dispatch('setNetChannel',GS.createChannel()).then(()=>{
              this.netChannel.bind("onNetSettings",function(event) {
                console.log("<===***************============>")
                console.log(event)
                that.netList = event.data.list;
                for(let i of that.netList){
                  if(i.selected == true){
                    that.choosedNetName = i.label;
                  }
                }
              })
            })
          }else {
            this.initialNetChannel();
          }
        },100)
      },
      // 选中一个网络
      chooseOneNet(item,index){
        this.choosedNetName = item.label;
        if(item.selected == false){
          for(let i of this.netList){
            if(i.selected == true){
              i.selected = false;
            }
          }
          item.selected = true;
        }
      },
      // 提交优选网络
      submitNet(){
        if(this.choosedNetName){
          this.netChannel.send("submitNetChoice",{
            "label": this.choosedNetName
          });
          this.$store.dispatch('setShowNets',false);
        }else{
          console.log('请选择一个网络。');
        }
      },
      close(){
        this.$store.dispatch('setShowNets',false);
      }
    }
  }
</script>
<style scoped>
    .net_area_container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 100;
    }
    .net_area{
        position: absolute;
        top: 4.3rem;
        left: 15%;
        z-index: 101;
        width: 70%;
        background: #fff;
        border-radius: 0.2rem;
        border: 1px solid #e2e2e2;
        font-family: PingFang SC;
        color: #6B6B6B;
        font-size: 0.36rem;
    }
    .net_list{
        width: 60%;
        text-align: left;
        margin: 0 auto;
    }
    .net_list li{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .net_area .tipName{
        height: 0.8rem;
        border-bottom: 1px solid #e2e2e2;
        line-height: 0.8rem;
        margin-bottom: 0.1rem;
    }
    .net_area .bot{
        text-align: left;
        height: 0.8rem;
        line-height: 0.8rem;
        border-top: 1px solid #e2e2e2;
        margin-top: 0.1rem;
    }
    .net_area .bot span{
        display: inline-block;
        text-align: center;
    }
    .net_area .bot span:nth-child(1){
        width: 48.5%;
        border-right: 1px solid #e2e2e2;
    }
    .net_area .bot span:nth-child(2){
        width: 45%;
        color: #5383EC;
    }
    .clB{
        color: #5383EC;
    }
    .checkFlag{
        width: 0.2rem;
    }
    .imgDesc{
        padding-left: 0.2rem;
    }
</style>
