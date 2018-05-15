export const emojiArray = [
  '/::)',  // 微笑
  '/::~',  // 撇嘴
  '/::B',  // 色
  '/::|',  // 发呆
  '/:8-)', // 得意
  '/::<',  // 流泪
  '/::$',  // 害羞
  '/::X',  // 闭嘴
  '/::Z',  // 睡
  "/::'(", // 大哭
  '/::-|', // 尴尬
  '/::@',  // 发怒
  '/::P',  // 调皮
  '/::D',  // 呲牙
  '/::O',  // 惊讶
  '/::(',  // 难过
  '/::+',  // 酷
  '/:--b', // 冷汗
  '/::Q',  // 抓狂
  '/::T',  // 吐
  '/:,@P', // 偷笑
  '/:,@-D',// 愉快
  '/::d',  // 白眼
  '/:,@o', // 傲慢
  '/::g',  // 饥饿
  '/:|-)', // 困
  '/::!',  // 惊恐
  '/::L',  // 流汗
  '/::>',  // 憨笑
  '/::,@', // 悠闲
  '/:,@f', // 奋斗
  '/::-S', // 咒骂
  '/:?',   // 疑问
  '/:,@x', // 嘘
  '/:,@@', // 晕
  '/::8',  // 疯了
  '/:,@!', // 衰
  '/:!!!', // 骷髅
  '/:xx',  // 敲打
  '/:bye', // 再见
  '/:wipe',// 擦汗
  '/:dig', // 抠鼻
  '/:handclap',  // 鼓掌
  '/:&-(',   // 糗大了
  '/:B-)',   // 坏笑
  '/:<@',  // 左哼哼
  '/:@>',  // 右哼哼
  '/::-O',   // 哈欠
  '/:>-|',   // 鄙视
  '/:P-(',   // 委屈
  "/::'|",   // 快哭了
  '/:X-)',   // 阴险
  '/::*',  // 亲亲
  '/:@x',  // 吓
  '/:8*',  // 可怜
  '/:pd',  // 菜刀
  '/:<W>',   // 西瓜
  '/:beer',  // 啤酒
  '/:basketb',  // 篮球
  '/:oo',  // 乒乓
  '/:coffee',  // 咖啡
  '/:eat',   // 饭
  '/:pig',   // 猪头
  '/:rose',  // 玫瑰
  '/:fade',  // 凋谢
  '/:showlove',  // 嘴唇
  '/:heart',   // 爱心
  '/:break',   // 心碎
  '/:cake',  // 蛋糕
  '/:li',  // 闪电
  '/:bome',  // 炸弹
  '/:kn',  // 刀
  '/:footb',   // 足球
  '/:ladybug',   // 瓢虫
  '/:shit',  // 便便
  '/:moon',  // 月亮
  '/:sun',   // 太阳
  '/:gift',  // 礼物
  '/:hug',   // 拥抱
  '/:strong',  // 强
  '/:weak',  // 弱
  '/:share',   // 握手
  '/:v',   // 胜利
  '/:@)',  // 抱拳
  '/:jj',  // 勾引
  '/:@@',  // 拳头
  '/:bad',   // 差劲
  '/:lvu',   // 爱你
  '/:no',  // No
  '/:ok',  // Ok
  '/:love',  // 爱情
  '/:<L>',   // 飞吻
  '/:jump',  // 跳跳
  '/:shake',   // 发抖
  '/:<O>',   // 怄火
  '/:circle',  // 转圈
  '/:kotow',   // 磕头
  '/:turn',  // 回头
  '/:skip',  // 跳绳
  '/:oY',  // 挥手
  '/:#-0',   // 激动
  '/:hiphot',  // 乱舞 // hiphot doesnot work!
  '/:kiss',  // 献吻
  '/:<&',  // 左太极
  '/:&>'] // 右太极

export function findIndex (element) {
  return emojiArray.findIndex(function (innerElement) {
    return element.indexOf(innerElement) > -1
  })
}

export const faceMap = {
  '/::)': '0',// 微笑
  '/::~': '1',// 撇嘴
  '/::B': '2',// 色
  '/::|': '3', // 发呆
  '/:8-)': '4',// 得意
  '/::<': '5',// 流泪
  '/::$': '6', // 害羞
  '/::X': '7',// 闭嘴
  '/::Z': '8',// 睡
  "/::'(": '9',// 大哭
  '/::-|': '10',// 尴尬
  '/::@': '11',// 发怒
  '/::P': '12',// 调皮
  '/::D': '13', // 呲牙
  '/::O': '14',// 惊讶
  '/::(': '15',// 难过
  '/::+': '16',// 酷
  '/:--b': '17',// 冷汗
  '/::Q': '18',// 抓狂
  '/::T': '19',// 吐
  '/:,@P': '20',// 偷笑
  '/:,@-D': '21',// 愉快
  '/::d': '22',// 白眼
  '/:,@o': '23',// 傲慢
  '/::g': '24',// 饥饿
  '/:|-)': '25', // 困
  '/::!': '26',// 惊恐
  '/::L': '27',// 流汗
  '/::>': '28',// 憨笑
  '/::,@': '29',// 悠闲
  '/:,@f': '30',// 奋斗
  '/::-S': '31', // 咒骂
  '/:?': '32',// 疑问
  '/:,@x': '33',// 嘘
  '/:,@@': '34',// 晕
  '/::8': '35',// 疯了
  '/:,@!': '36',// 衰
  '/:!!!': '37',// 骷髅
  '/:xx': '38',// 敲打
  '/:bye': '39',// 再见
  '/:wipe': '40',// 擦汗
  '/:dig': '41',// 抠鼻
  '/:handclap': '42',// 鼓掌
  '/:&-(': '43', // 糗大了
  '/:B-)': '44',// 坏笑
  '/:<@': '45',// 左哼哼
  '/:@>': '46',// 右哼哼
  '/::-O': '47', // 哈欠
  '/:>-|': '48',// 鄙视
  '/:P-(': '49', // 委屈
  "/::'|": '50',// 快哭了
  '/:X-)': '51', // 阴险
  '/::*': '52',// 亲亲
  '/:@x': '53',// 吓
  '/:8*': '54',// 可怜
  '/:pd': '55',// 菜刀
  '/:<W>': '56',// 西瓜
  '/:beer': '57',// 啤酒
  '/:basketb': '58', // 篮球
  '/:oo': '59',// 乒乓
  '/:coffee': '60',// 咖啡
  '/:eat': '61',// 饭
  '/:pig': '62', // 猪头
  '/:rose': '63',// 玫瑰
  '/:fade': '64', // 凋谢
  '/:showlove': '65',// 嘴唇
  '/:heart': '66', // 爱心
  '/:break': '67', // 心碎
  '/:cake': '68',// 蛋糕
  '/:li': '69', // 闪电
  '/:bome': '70',// 炸弹
  '/:kn': '71', // 刀
  '/:footb': '72',  // 足球
  '/:ladybug': '73',  // 瓢虫
  '/:shit': '74', // 便便
  '/:moon': '75', // 月亮
  '/:sun': '76', // 太阳
  '/:gift': '77', // 礼物
  '/:hug': '78', // 拥抱
  '/:strong': '79',  // 强
  '/:weak': '80', // 弱
  '/:share': '81', // 握手
  '/:v': '82',  // 胜利
  '/:@)': '83', // 抱拳
  '/:jj': '84', // 勾引
  '/:@@': '85', // 拳头
  '/:bad': '86', // 差劲
  '/:lvu': '87',  // 爱你
  '/:no': '88', // No
  '/:ok': '89', // Ok
  '/:love': '90', // 爱情
  '/:<L>': '91',  // 飞吻
  '/:jump': '92', // 跳跳
  '/:shake': '93',  // 发抖
  '/:<O>': '94', // 怄火
  '/:circle': '95',  // 转圈
  '/:kotow': '96', // 磕头
  '/:turn': '97', // 回头
  '/:skip': '98', // 跳绳
  '/:oY': '99', // 挥手
  '/:#-0': '100', // 激动
  '/:hiphot': '101', // 乱舞
  '/:kiss': '102',  // 献吻
  '/:<&': '103',// 左太极
  '/:&>': '104' // 右太极
}

export const regStr = "/::\\)|/::~|/::B|/::\\||/:8-\\)|/::<|/::\\$|/::X|/::Z|/::'\\(|/::-\\||/::@|/::P|/::D|/::O|/::\\(|/::\\+|/:--b|/::Q|/::T|/:,@P|/:,@-D|/::d|/:,@o|/::g|/:\\|-\\)|/::!|/::L|/::>|/::,@|/:,@f|/::-S|/:\\?|/:,@x|/:,@@|/::8|/:,@!|/:!!!|/:xx|/:bye|/:wipe|/:dig|/:handclap|/:&-\\(|/:B-\\)|/:<@|/:@>|/::-O|/:>-\\||/:P-\\(|/::'\\||/:X-\\)|/::\\*|/:@x|/:8\\*|/:pd|/:<W>|/:beer|/:basketb|/:oo|/:coffee|/:eat|/:pig|/:rose|/:fade|/:showlove|/:heart|/:break|/:cake|/:li|/:bome|/:kn|/:footb|/:ladybug|/:shit|/:moon|/:sun|/:gift|/:hug|/:strong|/:weak|/:share|/:v|/:@\\)|/:jj|/:@@|/:bad|/:lvu|/:no|/:ok|/:love|/:<L>|/:jump|/:shake|/:<O>|/:circle|/:kotow|/:turn|/:skip|/:oY|/:#-0|/:hiphot|/:kiss|/:<&|/:&>"

export function transformEmoji (message, notify) {
  if (!message) {
    return ''
  }
  if (typeof message === 'object') { // 消息列表
    if (!message.content && !message.msgType) {
      return ''
    }
    let msg = message.content
    const reg = new RegExp(regStr, 'g')
    switch (message.msgType) {
      case 'text':
        return msg.replace(/[\s]/ig, '&nbsp;').replace(reg, function (r) {
          if (faceMap[r]) {
            return `<img code="${r}" class="emojiMsg" src="./static/wechatEmoji/${faceMap[r]}.png" />`
          } else {
            return msg
          }
        })
      case 'voice':
        return '[语音]'
      case 'image':
        return '[图片]'
      case 'video':
        return '[视频]'
      case 'file':
        return '[文件]'
      case 'news':
        return '[图文]'
      default:
        return msg.replace(/[\s]/ig, '&nbsp;').replace(/[\s]/ig, 'test').replace(reg, function (r) {
          if (faceMap[r]) {
            return `<img code="${r}" class="emojiMsg" src="./static/wechatEmoji/${faceMap[r]}.png" />`
          } else {
            return msg
          }
        })
    }
  } else {
    const reg = new RegExp(regStr, 'g')
    message = message.replace(/[\n]/ig, '<br/>')
    if (!notify) {
      message = message.replace(/[\s]/ig, '&nbsp;')
    }
    message = message.replace(reg, function (r) {
      if (faceMap[r]) {
        if (notify) {
          return '[表情]'
        } else {
          return `<img code="${r}" class="emojiMsg" src="./static/wechatEmoji/${faceMap[r]}.png" oncontextmenu="return false"/>`
        }
      } else {
        return message
      }
    })
    const linkReg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|#|\/|%|-)+)/g
    return message.replace(linkReg, '<a href="$1$2" class="custom-link" target="_blank">$1$2</a>')
  }
}
