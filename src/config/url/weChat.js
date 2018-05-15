export default {
  'weChat': {
    domain: {
      'minilive': {
        development:'https://test-wxmgr.yinrui99.com',
        // development: 'http://192.168.3.151:8078/futures-minilive-outer-server',
        singleton:'https://test-wxmgr.yinrui99.com',
        production:'https://wxmgr.yinrui99.com'
      }
    },
    path: {
      'getWeChatByPage':'wechat/userInfoMgr/getUserInfo.do', //网页授权用户登录并获取登录信息
      'getAppId':'api/admin/1/article/channel/getById',
      'getVideoInfo':'wechat/videoMgr/getVideoInfo.do',//获取视频信息
      'getValidate':'wechat/fansActivityUserMgr/findActivityUserListCount.do',//砍价结果
      'getFansOldNew':'wechat/fansActivityUserMgr/getFansOldOrNew.do',//判断新老粉
      'findActivityState':'wechat/fansActivityUserMgr/findActivityState.do',//活动是否结束
      'findAppIdById':'wechat/fansActivityUserMgr/findAppIdById.do',//获取APPID
    }
  }
}