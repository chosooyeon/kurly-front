import axios from 'axios';

axios.defaults.baseURL = 'https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com/dev'

async function getDetail () {
    const res = await axios.get(`/post/1?userId=1`)
    return res.data
}

async function getSearch (payload?:string) {
    const res = await axios.get(`/product?take=&page=0&keyword=${payload}&userId=1`)
    return res.data
}

async function putCart (payload?:any) {
    const res = await axios.post(`/product/cart`,{
        userId: payload?.userId,
        productId: payload?.productId
      })
    return res.data
}

async function putCartAll (payload?:any) {
    const res = await axios.post(`/product/cart/bulk`, {
        "productMap":
            payload?.productMap
        ,
        "userId": payload?.userId
    })
    return res.data
}



export { getDetail, getSearch, putCart, putCartAll }