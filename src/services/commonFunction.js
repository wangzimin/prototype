/* 获取URL中search参数的值 */
export const getParameterValue = (parameter) => {
  var reg = new RegExp("(^|&)" + parameter + "=([^&]*)(&|$)", "i")
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
/* 获取URL中hash参数的值 */
export const getParameterHashValue = (parameter) => {
  var reg = new RegExp("(^|&)" + parameter + "=([^&]*)(&|$)", "i")
  var r = window.location.hash.substr(3).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/* 判断Object是否为空 */
export const isEmptyObject = (items) => {
  for (let item in items) {
    return false
  }
  return true
}

//timeFormat
const REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
export const timeFormat = (val, format) => {
	if (val){
		// 如果不是时间戳格式，且含有字符 '-' 则将 '-' 替换成 '/'
    	// 将 '-' 替换成 '/' 的原因是safari浏览器仅支持 '/' 隔开的时间格式
	    if (val.toString().indexOf('-') > 0) {
	      	val = val.toString().replace(/-/g, '/')
	    }
	    let date = new Date(val)
	    date.setHours(date.getHours() + 8)
	    const [whole, yy, MM, dd, hh, mm, ss] = date.toISOString().match(REGEX)
	    // const year = new Date().getFullYear()
	    // const month = new Date().getMonth() + 1
	    // const dates = new Date().getDate()
	    if (format) {
	      	return format
		        .replace('yyyy', yy)
		        .replace('yy', yy.slice(2))
		        .replace('MM', MM)
		        .replace('dd', dd)
		        .replace('hh', hh)
		        .replace('mm', mm)
		        .replace('ss', ss)
    	} else {
      		return [yy, MM, dd].join('-') + ' ' + [hh, mm, ss].join(':')
    	}
  	} else {
    	return '--'
	}
}