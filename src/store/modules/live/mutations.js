export default {
  SET_COURSE_LIST(state,data){
    if(data && data.data.length>0){
      for(let item of data.data){
        if(item.level==0){
          item.levelName='普通版'
        }
        if(item.level==1){
          item.levelName='精英版'
        }
        if(item.level==2){
          item.levelName='至尊版'
        }
      }
    }
    state.courseList =state.courseList.concat(data.data);
  }
}
