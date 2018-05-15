<template>
  <div class="loadingBox mask">
    <div class="loading"></div>
  </div>
</template>
<script>
  import {mapGetters, mapState} from 'vuex'
  import {socketService} from '../../services/socket'
  import {getParameterValue} from '../../services/commonFunction'
  import {setStorage,getStorage,removeItem,clearAll} from '../../services/localStorage.js'
  import {getHomeUrl} from "../../utils/urlFilter"
  import {DEFAULT_APPID,DEFAULT_OFFICIAL_ID,DEFAULT_ACTIVITY_ID} from "../../config/defaultConfig"

  export default {
    name: 'loading',
    data () {
      return {
        wxcode: '',
        officialId:'',
        from:'',
      }
    },
    computed: {
      ...mapGetters(['loaded'])
    },
    mounted () {
      this.activityId = getParameterValue("activityId") ? getParameterValue("activityId") : DEFAULT_ACTIVITY_ID
      this.officialId = getParameterValue("officialId")
      this.from = getParameterValue('from') || this.$route.query.from;
      if(this.from){
        let from = decodeURIComponent(this.from)
        this.officialId=from.split('|')[0];
        this.activityId=from.split('|')[1];
      }
      let code = getParameterValue('code');
      if (code) {
        this.wxcode = code;
      }
      this.validatePermission();
    },
    methods:{
      validatePermission(){
        let baseInfo = JSON.parse(getStorage('baseInfo'))
        if((baseInfo != null && baseInfo.openid !== 'null')){
            this.$store.dispatch('loaded',true);
            this.validatePrice(baseInfo.openid);
          console.log('有baseInfo。。');
        }else{
          if(this.wxcode){
            let params={
              officialId:this.officialId,
              code:this.wxcode
            }
             this.$store.dispatch('getWeChatByPage',params).then((data)=>{
              if(data.code==-1){
                this.wxBasicUrl();
              }else{
                this.validatePrice(data.openid)
                this.$store.dispatch('loaded',true);
              }
             })
          }else{
            this.wxBasicUrl();
          }
        }
      },
      wxBasicUrl(){
        let wxBasicUrl = getHomeUrl(0);
        this.$store.dispatch('findAppIdById',{officialId:this.officialId}).then((data)=>{
           let  paramData=this.officialId+"|"+this.activityId
          if(data.code==1){
            let appId=data.data.appId;
       window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+"&redirect_uri=" + encodeURIComponent(wxBasicUrl)+"?from="+paramData+ "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
          }
        })
      },
      validatePrice(openid){
        let params={
          officialId:this.officialId,
          openid:openid,
          activityId:this.activityId,
        }

        let activityPage=getHomeUrl(1)+"?officialId="+this.officialId+"&activityId="+this.activityId+"&parentId="+openid;
        /*
        * 活动是否结束
        * */
        this.$store.dispatch('findActivityState',{activityId:this.activityId}).then((data)=>{
           if(data.data==0){
             window.location.href=activityPage;//活动结束页面
           }
          return false;
        })
       /*
       * 判断新老粉
       * */
//        this.$store.dispatch("getFansOldNew",{officialId:this.officialId, openid:openid,}).then((result)=>{
//          if(result.data==0){
//            window.location.href=activityPage;//活动页面
//          }
//          return false;
//        })
        /*
        * 砍价结果
        * */
        this.$store.dispatch("getValidate",params).then((data)=>{
//          this.$store.dispatch('setPriceStatus',data.data)
          if(data.data){
            this.$router.push({path: 'index'})
          }else{
            this.$router.push({path: 'fail'})
          }
        })

      }
    }

  }
</script>

<style scoped>

</style>
