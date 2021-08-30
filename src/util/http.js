import axios from "axios";
import { Toast } from 'vant';
const http = axios.create({
  baseURL:"https://m.maizuo.com",
  timeout:1000,
  headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16223891571754988061655041","bc":"310100"}',
  }
});
http.interceptors.request.use(
  config => {
    //加载提示
    Toast.loading({
      message: '加载中...',
      forbidClick: false,
    });
    return config
  },
  err => {
    return Promise.reject(err)
  })
  
  http.interceptors.response.use(
    response => {
      Toast.clear();
      return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
      return Promise.reject(error) // 返回接口返回的错误信息
    })
export default http;