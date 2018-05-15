import {getUrl} from '../../../config/urlConfig'
import {getRequest, postRequest} from '../../../services/request'
import {DEFAULT_CHANNEL,DEFAULT_COMPANY_ID} from '../../../config/defaultConfig'

export default {
  	async getUserInfo({commit, state}, param) { // 获取用户信息
	    let params = {
	      channel: DEFAULT_CHANNEL,
	      companyId: DEFAULT_COMPANY_ID,
	      roomToken: param.roomToken
	    }
	    const url = getUrl('initialLoad', 'minilive', 'getUserInfo')
	    try {
	      let result = await getRequest(url, params)
	      if (result.code == 1) {
	        commit('SET_USER_INFO', result)
	      }
	      return result
	    } catch (err) {
	      console.log(err)
	    }
  	},
  	async getRoomNo({commit, state}, param) { // 获取直播室号
	    let params = {
	      channel: DEFAULT_CHANNEL,
	      companyId: DEFAULT_COMPANY_ID,
	      roomToken: param.roomToken,
	      serverId: param.serverId
	    }
	    const url = getUrl('initialLoad', 'minilive', 'getRoomNo')
	    try {
	      let result = await getRequest(url, params)
	      if (result.code == 1) {
	        commit('SET_ROOMNO', result)
	      }
	      return result
	    } catch (err) {
	      console.log(err)
	    }
  	},
  	async getRoomInfo({commit, state}, param) { //  获取直播室信息
	    let params = {
	      channel: DEFAULT_CHANNEL,
	      companyId: DEFAULT_COMPANY_ID,
	      roomNo: param.roomNo
	    }
	    const url = getUrl('initialLoad', 'minilive', 'getRoomInfo')
	    try {
	      let result = await getRequest(url, params)
	      if (result.code == 1) {
	        commit('SET_ROOMINFO', result.data[0])
	      }
	      return result
	    } catch (err) {
	      console.log(err)
	    }
  	},
  	async connectSocket({commit, state}, param) { // socket连接
	    try {
	      let params = {
	        channel: DEFAULT_CHANNEL
	      }
	      let url = getUrl('initialLoad', 'minilive', 'getSocketAddr')
	      let data = await getRequest(url, params)
	      return data
	    } catch (err) {
	      console.log(err)
	    }
  	}
}
