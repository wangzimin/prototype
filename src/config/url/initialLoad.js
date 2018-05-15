export default {
  'initialLoad': {
    domain: {
      'minilive': {
        development: 'https://test-minilive.hz5800.com',
        // development: 'http://192.168.3.151:8078/futures-minilive-outer-server',
        singleton: 'https://singleton-minilive.hz5800.com',
        production: 'https://minilive.hz5800.com'
      },
      'user': {
        // development: 'https://test-user.hz5800.com',
        development: 'https://192.168.3.151:7111/futures-user-server',
        singleton: 'https://singleton-user.hz5800.com',
        production: 'https://user.hz5800.com'
      }
    },
    path: {
      // 'getUserInfo': 'api/1/user/{{channel}}/token/login?token={{token}}', // 获取用户信息
      // 获取用户信息 ↓
      'getUserInfo': 'api/v1/customer/{{channel}}/{{companyId}}/info/{{roomToken}}.json', 
      // 获取roomNo ↓
      'getRoomNo': 'api/v1/room/{{channel}}/{{companyId}}/getRoomsByRoomToken.json?roomToken={{roomToken}}&serverId={{serverId}}', 
      // 根据roomNo获取直播室信息↓
      'getRoomInfo':"api/v1/room/{{channel}}/{{companyId}}/getRoomByRoomNo/{{roomNo}}.json", 
      // socket ↓
      'getSocketAddr': 'api/v1/server/{{channel}}/getWebAddr.json', 
      // 发互动 ↓
      'sendInteractive': 'api/v1/message/{{channel}}/{{roomNo}}/send.json',
      // 获取直播室往期节目 ↓
      'getPreviousClass': 'api/v1/room/web/100/getRoomHistoryVideoPage.json'
    }
  },
  'course':{
    domain: {
      'minilive': {
        development: window.location.protocol+'//test-minilive.hz5800.com',
        // development: 'http://192.168.3.151:8078/futures-minilive-outer-server',
        singleton: window.location.protocol+'//singleton-minilive.hz5800.com',
        production: window.location.protocol+'//minilive.hz5800.com'
      }
    },
    path: {
      'getCourseList':'api/v1/meal/wx/getAllMeals', // 高手文章列表
      "getIsPay":'api/v1/vipcourse/{{companyId}}/judge?roomToken={{roomToken}}&mealId={{mealId}}&teacherNo={{teacherNo}}',//是否购买
      // "getIsPay":'api/v1/vipcourse/wx/{{companyId}}/login?roomToken={{roomToken}}',//是否购买
    }
  }
}
