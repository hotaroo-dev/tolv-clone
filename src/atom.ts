import { atom } from 'recoil'
import { ICart } from './products'

const measurementState = atom({
  key: 'measurementState',
  default: false
})

const cardState = atom({
  key: 'cardState',
  default: false
})

const tokenState = atom({
  key: 'tokenState',
  default: localStorage.getItem('ACCESS_TOKEN')
})

const userState = atom({
  key: 'userState',
  default: null
})

const cartsState = atom({
  key: 'cartsState',
  default: [] as ICart[]
})

export { measurementState, cardState, tokenState, userState, cartsState }
