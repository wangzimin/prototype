import {getUrl} from '../../../config/urlConfig'
import {getRequest, postRequest} from '../../../services/request'
import * as DEFAULT_CONFIG  from '../../../config/defaultConfig'
export default {
  async getWeChatByPage({commit, state, rootState}, param){
    let url=getUrl('weChat','minilive','getWeChatByPage');
    try{
      let data=await getRequest(url,param);
      if(data && data.code==1){
      }
      return data;
    }catch(err){
      return null
    }
  },
  async getVideoInfo({commit, state, rootState}, param){
    let url=getUrl('weChat','minilive','getVideoInfo');
    try{
      let data=await getRequest(url,param);
      if(data && data.code==1){
      }
      return data;
    }catch(err){
      return null
    }
  },
   /*
   * 砍价结果
   *
   * */
  async getValidate({commit, state, rootState}, param){
    let url=getUrl('weChat','minilive','getValidate');
    try{
      let data=await getRequest(url,param);
      if(data && data.code==1){
      }
      return data;
    }catch(err){
      return null
    }
  },
  // async getActiveId({commit, state, rootState}, param){
  //   let url=getUrl('weChat','minilive','getVideoInfo');
  //   console.log("<====videoUrl===>"+url)
  //   try{
  //     let data=await getRequest(url,param);
  //     if(data && data.code==1){
  //     }
  //     return data;
  //   }catch(err){
  //     return null
  //   }
  // },
  /*
  * 判断新老粉
  * */
  async getFansOldNew({commit, state, rootState}, param) {
    let url=getUrl('weChat','minilive','getFansOldNew');
    try{
      let data=await getRequest(url,param);
      return data;
    }catch(err){
      console.log(err);
      return null
    }
  },
 /*
 *判断活动是否结束
 * */
  async findActivityState({commit, state, rootState}, param) {
    let url=getUrl('weChat','minilive','findActivityState');
    try{
      let data=await getRequest(url,param);
      return data;
    }catch(err){
      console.log(err);
      return null
    }
  },
 /*
 * 获取APPID
 * */
  async findAppIdById({commit, state, rootState}, param) {
    let url=getUrl('weChat','minilive','findAppIdById');
    try{
      let data=await getRequest(url,param);
      return data;
    }catch(err){
      console.log(err);
      return null
    }
  },
  async getCourseList({commit, state, rootState}, param) {
    commit('GET_LOAD', true)
    let url=getUrl('course','minilive','getCourseList');
    try{
      let data=await getRequest(url,param);
      if(data && data.code==1){
        commit("SET_COURSE_LIST",data)
        commit('GET_LOAD', false)
      }
      return data;
    }catch(err){
      console.log(err);
      commit('GET_LOAD', false)
      return null
    }
  },
  setIntroduce({commit, state, rootState}, param){
    state.introduce=param;
  }
}
