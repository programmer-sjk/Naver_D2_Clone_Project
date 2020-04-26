import axios from 'axios'

export const search = async (keyword) => {
    try {
        const ret = await axios.get('/') // 후에 keyword 추가
    } catch(err) {
        console.log(err)
    }

    // 현재 데이터가 없어서 빈 배열 리턴함.
    return [];
}

export const abouts  = async () => {
    try {
        const ret = await axios.get('http://localhost:8080/about') // 후에 keyword 추가
        console.log(ret)
        return ret.data
    } catch(err) {
        console.log(err)
    }

    // 현재 데이터가 없어서 빈 배열 리턴함.
    return [];
}