<template>
    <div class="activeLive">
        <div class="activeLiveWrap">
            <div>
                <videoWindow></videoWindow>
                <!--<p></p>-->
                <!--<navCenter></navCenter>-->
                <!--<chooseNet></chooseNet>-->
            </div>
        </div>
        <getLoad></getLoad>
    </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import videoWindow from './video.vue'
  import navCenter from './navCenter.vue'
  import getLoad from "../common/getLoad.vue"
  //  import chooseNet from "../common/chooseNet.vue"

  export default {
    name: 'Live',
    data () {
      return {
      }
    },
    computed: {

    },
    created () {

    },
    components: {
      videoWindow,
      navCenter,
      getLoad
    },
    destroyed(){
    },
    mounted () {

    }
  }
</script>
<style>
    .activeLive {
        height: 100%;
        /*width: 1280px;*/
        width: 100%;
        /*background-color: #373e47;*/
        display: flex;
        flex: 9;
        flex-direction: column;
        margin: 0 auto;
        padding: 0;
    }
    .activeLiveWrap{
        /*border-bottom: 1px solid #e8e8e8;*/
    }
    .traininghome , .myhome{
        border:none
    }
</style>
