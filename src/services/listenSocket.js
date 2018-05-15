import store from '../store'

class ListenSocket {
  constructor () {
  }

  onMessage (result, oldId) {
    let d = JSON.parse(result)
    let r = d.data
    switch (d.cmd) {
      case "message": // 消息
        if (r.dataType === 1) {// 观点
          /**
           * 由于互动列表包含互动内容和观点内容
           * 只看老师列表只包含观点内容
           * 所以做两次增加
           */
          store.commit('SOCKET_INTRACTIVE', r) // 增加互动里的观点
          store.commit('SOCKET_POINT', r) // 增加只看老师里的观点
        } else if (r.dataType === 2) { // 互动
          setTimeout(() => {
            let interactive = store.state.interactive
            if (interactive && interactive.interactiveList && interactive.interactiveList.length > 0 && interactive.interactiveList[0].sequenceNo === r.sequenceNo) { // 若是当前用户发送互动，并将返回数据存储本地，socket不重复推送
              return
            } else {
              console.log('%csocket pushed a item to interactiveList', 'color:green')
              store.commit('SOCKET_INTRACTIVE', r)
            }
          }, 100)
        }
        break
      case "strategy": // 策略
        if (r) {
          let flag = false //列表中不存在该老师
          let tempList = store.getters.strategyList;
          r.extend = false;
          let remarkEnd = "（个人观点仅供参考，投资必须自主决策、风险自担！）"
          let res = r.remark.trim() + remarkEnd;
          r.remark = res;
          if (res.length > 55) {
            r.remarkSub = res.substr(0, 55) + "..."
          } else {
            r.remarkSub = res
          }
          for (let [index, item] of tempList.entries()) {
            if (item.initTeacherNo == r.initTeacherNo) {
              store.getters.strategyList.splice(index, 1);
              store.getters.strategyList.unshift(r);
              flag = true;
              break;
            }
          }
          if (!flag) {
            store.getters.strategyList.unshift(r)
          }
          store.getters.historyList.unshift(r)
        }
        break
      case "needapprove":

        break
      case "delete":	// 删除观点
        /**
         * 由于互动列表包含互动内容和观点内容
         * 只看老师列表只包含观点内容
         * 所以做两次删除
         */
        if (store.state.home && store.state.home.userInfo) {
          let userToken = store.state.home.userInfo.userToken
          store.getters.interactiveList.forEach((item, index) => { // 删除互动里的观点
            if (item.userToken === userToken) {
              return
            } else {
              if (r.sequenceNo === item.sequenceNo) {
                store.getters.interactiveList.splice(index, 1)
              }
            }
          })
          store.getters.pointsList.forEach((item, index) => { // 删除只看老师里的观点
            if (item.userToken === userToken) {
              return
            } else {
              if (r.sequenceNo === item.sequenceNo) {
                store.getters.pointsList.splice(index, 1)
              }
            }
          })
        }
        break
      case "delinteract":	// 删除互动
        if (store.state.home && store.state.home.userInfo) {
          let userToken = store.state.home.userInfo.userToken
          store.getters.interactiveList.forEach((item, index) => {
            if (item.userToken === userToken) {
              return
            } else {
              if (r.sequenceNo === item.sequenceNo) {
                store.getters.interactiveList.splice(index, 1)
              }
            }
          })
        }
        break
      case "settop": // 置顶

        break
      case "deletetop": // 删除置顶

        break
      case "onlinecount": // 在线人数

        break
      case "roominfo": // 直播室信息
        store.commit('SET_ROOMINFO', r)
        break
    }
  }
}

export default new ListenSocket()
