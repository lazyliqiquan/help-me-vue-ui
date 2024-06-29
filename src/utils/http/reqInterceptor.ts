import {type AxiosInstance} from "axios";

export default function useReqInterceptor(axios: AxiosInstance) {
  axios.interceptors.request.use(
    function (config) {
      // 在发送请求之前做些什么，比如把token加到请求头中
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )
}
