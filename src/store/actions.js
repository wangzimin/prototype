export const loaded = (content, data) => { // loading页是否加载完毕
  content.commit('LOADED', data)
}
export const setPopFlag = (content, data) => { // 发消息弹窗
  content.commit('SET_POP_FLAG', data)
}
export const setErrMsg = (content, flag) => {
  content.commit('SET_ERROR_MESSAGE', flag)
}
export const getLoad = (content, flag) => {
  content.commit('GET_LOAD', flag)
}
export const setNetChannel = (content, data) => {  // 初始化GS.channel
  content.commit('SET_NETCHANNEL', data)
}
export const setShowNets = (content, data) => {  // nets窗口
  content.commit('SET_SHOWNETS', data)
}
export const setVideoStatus = (content, data) => {  // nets窗口
  content.commit('SET_VIDEO_STATUS', data)
}
export const setPriceStatus = (content, data) => {  // nets窗口
  content.commit('SET_PRICE_STATUS', data)
}


