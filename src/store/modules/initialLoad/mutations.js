export default {
  SET_USER_INFO(state, data) { // 用户信息
    state.userInfo = data
  },
  SET_ROOMNO (state, data) { // 直播室编号
    state.roomNo = data
  },
  SET_ROOMINFO (state, data) { // 直播室信息
    state.roomInfo = data
  },
}
