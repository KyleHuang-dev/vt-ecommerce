import CartItem from '@/src/components/CartItem'
import { ActionType, createAction, getType } from 'typesafe-actions'
import pruduct from '@/pruduct'

// import { CategoryItem } from '../categories/category.model'
export type CategoryItem = {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREASE_ITEM_FROM_CART = 'INCREASE_ITEM_FROM_CART',
  DECREASE_ITEM_FROM_CART = 'DECREASE_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export type CartItem = CategoryItem & {
  quantity: number
}

export const setIncreaseItemFromCar = createAction(
  CART_ACTION_TYPES.INCREASE_ITEM_FROM_CART
  )<CartItem[]>()

export const setDecreaseItemFromCar = createAction(
  CART_ACTION_TYPES.DECREASE_ITEM_FROM_CART
  )<CartItem[]>()

export const setClearCart = createAction(
  CART_ACTION_TYPES.CLEAR_CART
  )<CartItem[]>()

export const setRemoveItemFromCart = createAction(
CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART
)<CartItem[]>()

export const setIsCartOpen = createAction(
  CART_ACTION_TYPES.SET_IS_CART_OPEN
)<boolean>()

export const setCartItems = createAction(CART_ACTION_TYPES.SET_CART_ITEMS)<
  CartItem[]
>()

export const actions = {
  setIsCartOpen,
  setCartItems,
  setRemoveItemFromCart,
  setIncreaseItemFromCar,
  setDecreaseItemFromCar,
  setClearCart,
}

export interface IModel {
  readonly isCartOpen: boolean
  readonly cartItems: CartItem[]
}

export const CART_INITIAL_STATE: IModel = {
  isCartOpen: false,
  cartItems: [...pruduct],
}

export const cartReducer = (
  state: IModel = CART_INITIAL_STATE,
  action: ActionType<typeof actions>
): IModel => {
  switch (action.type) {
    case getType(setIsCartOpen):
      return { ...state, isCartOpen: action.payload }

    case getType(setCartItems):
      return { ...state, cartItems: action.payload }

    case getType(setRemoveItemFromCart):
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      }
      
    case getType(setIncreaseItemFromCar):
      return {
        ...state,
        // cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      }   

    case getType(setDecreaseItemFromCar):
      return {
        ...state,
        // cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      }        

    case getType(setClearCart):
      return {
        ...state,
        cartItems: []
      }  

    default:
      return state
  }
}
import { useCart } from './cart.hook'




