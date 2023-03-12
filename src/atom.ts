import { atom } from 'recoil'

export interface ICart {
  productId: string
  name: string
  price: number
  count?: number
}

export interface IUser {
  id: string
  name: string
  email: string
  email_verified_at?: string
  created_at: string
}

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
  default: null as IUser | null
})

const cartsState = atom({
  key: 'cartsState',
  default: [] as ICart[]
})

export { measurementState, cardState, tokenState, userState, cartsState }
