import { atom } from 'recoil'

export const measurementState = atom({
  key: 'measurementState',
  default: false
})

export const cardState = atom({
  key: 'cardState',
  default: false
})

export const tokenState = atom({
  key: 'tokenState',
  default: localStorage.getItem('ACCESS_TOKEN')
})

export const userState = atom({
  key: 'userState',
  default: null
})
