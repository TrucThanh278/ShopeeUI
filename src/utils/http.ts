import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { isAxiosUnprocessableEntityAxiosError } from './utils'
import { toast } from 'react-toastify'
import { AuthResponse } from '../types/auth.type'
import {
  clearAccessTokenFromLocalStorage,
  getAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  setProfileToLocalStorage
} from './auth'
import path from '../constants/path'

class Http {
  instance: AxiosInstance
  private accessToken: string // Lưu trên RAM => nhanh hơn khi không dùng biến (phải đọc trực tiếp từ localStorage chính là ổ cứng -> làm giảm hiệu năng mỗi lần gọi APIs)
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        const data = response.data as AuthResponse
        if (url === path.login || url === path.register) {
          this.accessToken = data.data.access_token
          setAccessTokenToLocalStorage(this.accessToken)
          setProfileToLocalStorage(data.data.user)
        } else if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLocalStorage()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        console.log(error)
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
