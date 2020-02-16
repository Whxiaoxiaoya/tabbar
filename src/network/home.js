import { request } from "network/request.js"

export function getHomeList() { 
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
      url: '/home/data',
      params: {
        type,
        page
      }
    })
  }