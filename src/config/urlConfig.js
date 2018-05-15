import initialLoad from './url/initialLoad'
import weChat from './url/weChat'


const urlConfig = Object.assign(initialLoad,weChat)

/**
 * @param  type: 接口类别; server: 接口服务类别; path: 接口路径
 */
export function getUrl (type, server, path, param) {
  const env = process.env.NODE_ENV || 'production'
  return (`${urlConfig[type].domain[server][env]}/${urlConfig[type].path[path]}`)
}
