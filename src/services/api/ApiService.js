import AxiosService, { NoAuthAxios } from './axiosService'
import authConfig from '../../configs/auth'

const baseUrl = process.env.REACT_APP_API_ENDPOINT

const ApiService = {
  authGet: path => {
    return new Promise((resolve, reject) => {
      return NoAuthAxios.get(path, {})
        .then(response => {
          return response.status === 200 ? resolve(response) : reject(response)
        })
        .catch(({ response }) => reject(response))
    })
  },
  authPost: (path, payload) => {
    return new Promise((resolve, reject) => {
      return NoAuthAxios.post(path, payload)
        .then(response => {
          return response.status === 200 ? resolve(response) : reject(response)
        })
        .catch(({ response }) => reject(response))
    })
  },

  get: path => {
    return new Promise((resolve, reject) => {
      return AxiosService.get(baseUrl + path, {
        // headers: {
        //   Authorization: 'Bearer ' + localStorage.getItem(authConfig.storageTokenKeyName)
        // }
      })
        .then(response => {
          return response.status === 200 ? resolve(response) : reject(response)
        })
        .catch(error => {
          if (error?.response?.status === 401) {
            return resolve(error.response)
          }
          const { response } = error
          reject(response)
        })
    })
  },

  post: (path, payload) => {
    return new Promise((resolve, reject) => {
      return AxiosService.post(baseUrl + path, payload, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem(authConfig.storageTokenKeyName) }
      })
        .then(response => {
          return response.status === 201 || 204 ? resolve(response) : reject(response)
        })
        .catch(({ response }) => reject(response))
    })
  },
  put: (path, payload) => {
    return new Promise((resolve, reject) => {
      return AxiosService.put(baseUrl + path, payload, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(authConfig.storageTokenKeyName)
        }
      })
        .then(response => {
          return response.status === 200 ? resolve(response) : reject(response)
        })
        .catch(({ response }) => reject(response))
    })
  },
  patch: (path, payload) => {
    return new Promise((resolve, reject) => {
      return AxiosService.patch(baseUrl + path, payload, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem(authConfig.storageTokenKeyName) }
      })
        .then(response => {
          return response.status === 200 ? resolve(response) : reject(response)
        })
        .catch(({ response }) => reject(response))
    })
  },

  delete: path => {
    return new Promise((resolve, reject) => {
      return AxiosService.delete(baseUrl + path, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(authConfig.storageTokenKeyName)
        }
      })
        .then(response => {
          return response.status === 200 || 204 ? resolve(response) : reject(response)
        })
        .catch(({ response }) => {
          reject(response)
        })
    })
  }
}

export default ApiService
