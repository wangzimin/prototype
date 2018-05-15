<template>
    <div id="videoBox" ref="videoBox">
        <div class="videoDiv">
            <div class="video" ref="video" v-if="existVideoId" v-html="videoHtml"></div>
            <div class="video"  v-if="!existVideoId">
                <span class="videoIdErr">该视频暂无法播放!</span>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {getParameterValue} from '../../services/commonFunction'
  import {DEFAULT_ACTIVITY_ID} from "../../config/defaultConfig"
  export default {
    name: 'videoBox',
    data () {
      return {
        videoHtml: '',
        existVideoId :true,
        videoBG: location.origin + location.pathname.replace('index.html','') + 'static/img/videoBG.png',
        videoBTN: location.origin + location.pathname.replace('index.html','') + 'static/img/videoBTN.png',
        videoId:'',
        introduce:'',

      }
    },
    computed: {
      ...mapGetters(['roomInfo',])
    },
    components: {

    },
    beforeMount () {
    },
    mounted () {
      this.createJs('./static/gssdk.js')
      this.controlVideo()
    },
    watch: {

    },
    methods: {

      createJs (href) {
        var script = document.createElement('script')
        script.src = href
        script.type = "text/javascript"
        document.head.appendChild(script)
      },
     controlVideo(){
//        let videoID="24905b65551b40cfa24347d4396369cb";
           this.videoId=getParameterValue("videoUrl")?getParameterValue("videoUrl"):'';
           console.log("**************");
           console.log(getParameterValue("videoUrl"))
          if (this.videoId) {
            this.videoHtml = '<gs:video-vod id="webcast" site="yry5800.gensee.com" ctx="webcast" ownerid="'
              + this.videoId + '" bgimg="' + this.videoBG + '"  btnimg="' + this.videoBTN + '"/>';
            this.loadGsTag('video-vod');
          }else {
            this.existVideoId = false;
          }
      },
      loadGsTag (type) {
        setTimeout(() => {
          let els = document.getElementsByTagName('gs:' + type)
          if (els.length > 0 && typeof window.GS !== 'undefined') {
            let el = els[0]
            window.GS.loadTag(type, el)
          } else {
            this.loadGsTag(type)
          }
        }, 100)
      },
    }
  }
</script>
<style scoped>
    #videoBox {
        /*padding-top: 0.06rem;*/
    }
    .videoDiv {
        position: relative;
        height: 4.22rem;
        background-color: #1d2228;
    }
    .video {
        height: 4.22rem;
    }
    .videoIdErr{
        line-height: 4.2rem;
        font-size: 0.3rem;
        color: #ffffff;
    }
    .liveIcon{
        position: absolute;
        top: 0.3rem;
        left: 0.2rem;
        width: 1.15rem;
        height: 0.37rem;
    }
    .noVideoTip{
        position: absolute;
        color: white;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .noVideoTip img{
        width: 100%;
        height: 100%;
    }
</style>
