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