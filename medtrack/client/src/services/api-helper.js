import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

const createPharmacies = async (data) => {
    const resp = await api.post('/pharmacies', { pharmacy: data })
    return resp.data
  }


const readAllPharmacies = async () => {
    const resp = await api.get('/pharmacies')
    return resp.data
  }

const updatePharmacies = async (id, data) => {
  const resp = await api.put(`/pharmacies/${id}`, { pharmacy: data })
  return resp.data
}

const destroyPharmacies = async (id) => {
  const resp = await api.delete(`/pharmacies/${id}`)
  return resp.data
}


  export {
    readAllPharmacies,
    createPharmacies,
    updatePharmacies,
    destroyPharmacies
  }
  