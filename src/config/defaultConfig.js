
const env = process.env.NODE_ENV || 'production';
export const DEFAULT_CHANNEL = 'wechat';
export const DEFAULT_CHANNELID = '1001';
export const DEFAULT_COMPANY_ID = 100;
export const DEFAULT_SERVERID = 106;
export const DEFAULT_OFFICIAL_ID = '1038';
export const DEFAULT_ACTIVITY_ID =14;


let default_appid = '';
if(env === 'production'){
	default_appid = 'wx1567a9c0869e7a75'; //正式
}else {
	default_appid = 'wx1567a9c0869e7a75'; //测试
}
export const DEFAULT_APPID = default_appid; //正式
// export const DEFAULT_APPID ='wxbe8b8c1fc82671f0'; //正式
// export const DEFAULT_APPID ='wx168934c239b55eca'; //测试
export const defaultPhoto = require('@/assets/imgs/defaultavator.png');
