import axios from 'axios'
import { API_HOST } from '../api.constants'

console.log(process.env.REACT_APP_API_HOST)

export const $api = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
})
