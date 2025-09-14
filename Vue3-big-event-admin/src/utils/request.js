import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'https://fe-bigevent-web.itheima.net/'

const instance = axios.create({
    // TODO 1. 基础地址，超时时间
    baseURL,
    timeout: 10000
})
//请求拦截器
instance.interceptors.request.use(
    (config) => {
        // TODO 2. 携带token
        const useStore = useUserStore()
        if (useStore.token) {
            config.headers.Authorization = useStore.token
        }
        return config
    },
    (err) => Promise.reject(err)
)

instance.interceptors.response.use(
    (res) => {
        // TODO 4. 摘取核心响应数据
        if (res.data.code === 0) {
            return res
        }
        // TODO 3. 处理业务失败
        ElMessage.error(res.data.message || '服务异常')
        return Promise.reject(res.data)
    },
    (err) => {
        // TODO 5. 处理401错误
        //错误特殊情况， 401权限不足 或token 过期 拦截到登录
        if (err.response?.status === 401) {
            router.push('/login')
        }
        ElMessage.error(err.response.data.message || '服务异常')
        return Promise.reject(err)
    }
)

export default instance
export { baseURL }