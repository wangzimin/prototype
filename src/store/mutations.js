export default {
  LOADED(state,data) { // loading页是否加载完毕
    state.loaded = data
  },
  SET_POP_FLAG(state,data) { // 弹框
    state.popFlag = data
  },
  SET_ERROR_MESSAGE(state, data) { // 公用错误信息展示
    state.errorMessage = {
      status: data.status,
      msg: data.msg
    }
    if (state.errorMessage.status) {
      setTimeout(() => {
        state.errorMessage = {status: false, msg: ''};
      }, 1500)
    }
  },
  GET_LOAD(state, flag) {
    state.getLoad = flag
  },
  SET_NETCHANNEL(state, data){  // GS.channel
    state.netChannel = data
  },
  SET_SHOWNETS(state, data){  // nets窗口
    state.showNets = data
  },
  SET_VIDEO_STATUS(state, data){  // nets窗口
    state.videoStatus = data
  },
  SET_PRICE_STATUS(state, data){  // nets窗口
    state.priceStatus = data
  },

}
