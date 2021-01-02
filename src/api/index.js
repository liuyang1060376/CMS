import ajax from './ajax'

var baseUrl = 'http://192.168.0.106:3000'
// 登录
export const reqLogin = (form) => ajax(baseUrl + '/cms/login', { form }, 'POST')

// 请求CMS首页slider
export const reqSlider = () => ajax(baseUrl + '/cms/getSlider', {}, 'GET')
