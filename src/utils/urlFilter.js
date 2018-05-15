const url={
  domain:{
    development: window.location.protocol+'//test-jsapp.ys5800.com',
    production: window.location.protocol+'//jsapp.ys5800.com',
  },
  path:{
    liveHome:'jsapp/bargainProject/live/index.html',
    activityHome:'jsapp/bargainProject/sinaBargain/index.html'
  }
}

export function getHomeUrl(type) {
  const env = process.env.NODE_ENV || 'production';
  switch(type){
    case 0:
      return (`${url.domain[env]}/${url.path['liveHome']}`)
      break
    case 1:
      return (`${url.domain[env]}/${url.path['activityHome']}`)
      break
    default:
      break
  }
}