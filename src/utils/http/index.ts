import axios from "axios"
import useReqInterceptor from "./reqInterceptor";
import useResInterceptor from "./resInterceptor";

const http = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers:{
    'Content-Type': 'multipart/form-data'
  }
})

useReqInterceptor(http)
useResInterceptor(http)

export default http
