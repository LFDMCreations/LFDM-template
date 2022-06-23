// VITE_API_ROOT is set in '@/.env' and in '@/.env.production'

import axios from 'axios'

const getData = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  // withCredentials: true,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    //"Sec-Fetch-Site": "cross-site",
    'Access-Control-Allow-Origin': '*',
  },
})

 const postData = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  // withCredentials: true,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, DELETE',
    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  }
})

const loginPost = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  withCredentials: true,
  headers: { 
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

export { getData, postData, loginPost }
