import axios from 'axios';

export const getAxios = async (url) => {
  try {
    const host = 'http://localhost:8080';
    const ret = await axios.get(`${host}${url}`);
    return ret;
  } catch (err) {
    console.log(err);
  }
};