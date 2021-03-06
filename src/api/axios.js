import axios from 'axios'
import NProgress from 'nprogress'
import  'nprogress/nprogress.css'


NProgress.configure({showSpinner:false})

const service = axios.create({
    baseURL:"/api",
    timeout: 15000
})
service.interceptors.request.use((config) => {
    NProgress.start()
    console.log("请求拦截器执行")
    return config
})

service.interceptors.response.use((response) => {
    NProgress.done()
    return response.data
},(error) => {
    NProgress.done()
    alert(`请求出错: ${error.message || '未知错误'}`)
    return Promise.reject(error)
})

export default service