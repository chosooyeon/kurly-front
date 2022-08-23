import axios from 'axios';

axios.defaults.baseURL = 'https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com/dev'

async function getDetail () {
    const res = await axios.get(`/post/1?userId=1`)
    return res.data
}

async function getSearch (payload?:string) {
    const res = await axios.get(`/product?take=8&page=0&keyword=${payload}&userId=1`)
    return res.data
}

export { getDetail, getSearch }