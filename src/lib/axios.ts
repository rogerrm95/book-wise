import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.URL_PRODUCTION
    : process.env.URL_DEV

export const api = axios.create({
  baseURL: `https://book-wise-beta-brown.vercel.app/api`,
})
