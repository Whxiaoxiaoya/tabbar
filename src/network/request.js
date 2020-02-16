import axios from 'axios'

export function request (config) {  
   //1.创建axios实例：
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout:50000
    })

    //2.axios拦截：
    // 2.1 请求拦截：
    instance.interceptors.request.use(config => { 
        return config
    }, err => { 
        window.console.log(err);
    })

    // 2.2 响应拦截：
    instance.interceptors.response.use(res => { 
        return res.data
    }, err => { 
        window.console.log(err);
    })

    // 3.返回axios实例：
    return instance(config)
}