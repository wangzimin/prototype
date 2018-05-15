<template>
    <div class="introduce" :style="{height: scrollBoxHeight + 'px'}">
        <div class="teachWrap">
             <div class="left">
                 <img src="../../assets/imgs/interactive/teacher.jpg"/>
             </div>
            <div class="right">
                <p class="teachName">余岳桐</p>
                <p class="teachDesc">新浪金牌理财师,财富讲坛首席讲师...</p>
            </div>
        </div>
        <div class="imgDescWrap">
          <img class="imgDesc" src="../../assets/imgs/interactive/detail.jpeg"/>
        </div>
        <div class="channelNetIcon" v-show="videoStatus">
            <img class="netIcon" src="../../assets/imgs/interactive/switchover.png"  @click='getNets()'/>
        </div>
    </div>
</template>
<script>
  import {mapGetters, mapState} from 'vuex'
  import {socketService} from '../../services/socket'
  import {getParameterValue} from '../../services/commonFunction'
  import {setStorage,getStorage,removeItem,clearAll} from '../../services/localStorage.js'

  export default {
    name: 'introduce',
    data () {
      return {
        scrollBoxHeight: 0,
        screenHeight: 0,
      }
    },
    computed: {
      ...mapGetters(['introduce','netChannel','videoStatus'])
    },
    mounted () {
     this.initScrollBox();
    },
    methods:{
      initScrollBox(){
        this.screenHeight = document.documentElement.scrollHeight;
        this.scrollBoxHeight = this.screenHeight - document.getElementById("videoBox").offsetHeight
          - document.getElementsByClassName('topTab')[0].offsetHeight+3;
      },
      getNets(){
        this.netChannel.send("requireNetSettings", {
        });
        this.$store.dispatch('setShowNets',true);
      }
    }
  }
</script>

<style scoped>
 .imgDesc{
     width:100%;
 }
.introduce{
    overflow: auto;
}
.teachWrap{
    display: flex;
}
.left img{
    width: 1.0rem;
    height: 1.0rem;
    border-radius: 50%;
}
.right{
    flex:1;
    padding-left: 0.2rem;
}
.teachWrap{
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    background-color: #ffffff;
    padding-bottom: 0.2rem;
}
.teachName{
    text-align: left;
    font-size: 0.34rem;
    font-family: "PingFang SC";
    color: #3a3737;
    font-weight: bold;
}
 .teachDesc{
     font-size: 0.28rem;
     font-family: "PingFang SC";
     color: #7b7e81;
     text-align: left;
     padding-top: 0.1rem;
 }
 .imgDescWrap{
     padding-top: 0.15rem;
 }
 .netIcon{
     height: .8rem;
     width: .8rem;
     margin: .2rem 0;
     border-top-left-radius: .06rem;
     border-bottom-left-radius: .06rem;
     border-bottom-right-radius: .06rem;
     box-shadow: 0 0 1px #a5a5a5;
     position: fixed;
     z-index: 3;
     right: .27rem;
     bottom: .27rem;
 }
</style>
