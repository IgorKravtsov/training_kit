import axios from 'axios'
import { API_HOST } from '../api.constants'

export const $api = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
})
