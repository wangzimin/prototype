import axios from 'axios';

axios.defaults.timeout = 30 * 1000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * get request => http get
 * @param url,params
 * @returns {*}
 *
 */
export const getRequest = async (url, params) => {
  let urlStr = `${translateParams(url, params, 'geturl')}`;
  let parameters = {
    url: params ? urlStr : url,
    method: 'get'
  };
  let data = await axios.request(parameters);
  return data.data;
};

/**
 * post request => http post
 * @param url,params
 * @returns {*}
 */
export const postRequest = async (url, urlparams, notUrlParams) => {
  let parameters = {
    url: translateParams(url, urlparams, 'posturl'),
    method: 'post',
    data: translateParams(url, notUrlParams, 'postdata')
  };
  let data = await axios.request(parameters);
  return data.data;
}

/**
 *  若参数在URL里面是用'{{key}}'形式存在的，将'{{key}}'替换为参数的值，
 *  否则将参数以'&param=paramVal'的形式拼接在URL后面
 *  @param url,param
 *  @returns {string}
 */
export function translateParams (url, param, type) {
  if (type == 'postdata') {
    let url = ''
    for (let key in param) {
      url += `${key}=${encodeURIComponent(param[key])}&`
    }
    return url.substring(0, url.length - 1)
  } else {
    if (!url) {
      return ''
    }

    if (!url.match(/[\?](\S*)/)) { // 若URL后没有问号，添加问号
      url += '?'
    }

    for (let key in param) {
      if (url.indexOf(`{{${key}}}`) != -1) {
        url = url.replace(`{{${key}}}`, param[key])
      } else {
        url += `&${key}=${encodeURIComponent(param[key])}`
      }
    }

    // 若问号后面第一个字符是 '&' 删除之
    let str = url.match(/[\?](\S*)/)[1].substr(0, 1)
    if (str == '&') {
      url = url.replace(str, '')
    }

    return url
  }
}
