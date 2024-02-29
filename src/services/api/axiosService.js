import axios from 'axios'
import authConfig from '../../configs/auth'

const storedToken = typeof window !== 'undefined' ? window.localStorage.getItem(authConfig.storageTokenKeyName) : null

const AxiosService = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
  adapter: ['xhr', 'http'],
  headers: {
    Authorization: `Bearer ${storedToken}`
  }
})

export const NoAuthAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
  adapter: ['xhr', 'http']
})

export default AxiosService
