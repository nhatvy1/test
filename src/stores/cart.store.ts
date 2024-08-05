import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'react-toastify'
import { IProduct } from '@/types/product.type'

type ICartItem = {
  id: number
  name: string
  brand: string
  type: string
  quantity: number
  price?: number
  img: string
  trongluong?: any
}

interface CartState {
  quantity: number
  cartItems: ICartItem[]
  addProduct: (item: IProduct, quantity: number, weight?: any) => void
  increaseQuantity: (id: number, weight: any) => void
  decreaseQuantity: (id: number, weight: any) => void
  removeItemFromCart: (id: number, weight: any) => void
  order: () => void
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      quantity: 0,
      cartItems: [],
      addProduct: (item, quantity, weight) => {
        if (item.type !== 'combo/givral' && item.type !== 'combo/brodard') {
          const itemExists = get().cartItems.find(
            (cartItem) =>
              cartItem.id === item.id && cartItem?.trongluong.weight === weight
          )
          if (itemExists) {
            if (typeof itemExists.quantity === 'number') {
              itemExists.quantity += quantity
            }
            set({
              cartItems: [...get().cartItems],
              quantity: (get().quantity += quantity)
            })
          } else {
            set({
              cartItems: [
                ...get().cartItems,
                {
                  ...item,
                  quantity: quantity,
                  trongluong: { ...item?.trongluong?.[weight], weight: weight }
                }
              ],
              quantity: (get().quantity += quantity)
            })
          }
        } else {
          const itemExists = get().cartItems.find(
            (cartItem) => cartItem.id === item.id
          )
          if (itemExists) {
            if (typeof itemExists.quantity === 'number') {
              itemExists.quantity += quantity
            }
            set({
              cartItems: [...get().cartItems],
              quantity: (get().quantity += quantity)
            })
          } else {
            set({
              cartItems: [
                ...get().cartItems,
                {
                  ...item,
                  quantity: quantity
                }
              ],
              quantity: (get().quantity += quantity)
            })
          }
        }
        toast.success('Thêm sản phẩm vào giỏ hàng thành công')
      },
      increaseQuantity: (id: number, weight: any) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id && cartItem.trongluong === weight
        )

        if (itemExists) {
          if (typeof itemExists.quantity === 'number') {
            itemExists.quantity++
          }

          set({
            cartItems: [...get().cartItems],
            quantity: (get().quantity += 1)
          })
        }
      },
      decreaseQuantity: (id: number, weight: any) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id && cartItem.trongluong === weight
        )

        if (itemExists) {
          if (itemExists.quantity === 1) {
            return
          } else {
            itemExists.quantity--
            set({
              cartItems: [...get().cartItems],
              quantity: (get().quantity -= 1)
            })
          }
        }
      },
      removeItemFromCart: (id: number, weight: any) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id && cartItem.trongluong === weight
        )
        const itemExistsIndex = get().cartItems.findIndex(
          (cartItem) => cartItem.id === id && cartItem.trongluong === weight
        )

        if (itemExists && !itemExists.type.includes('combo')) {
          const array = get().cartItems
          array.splice(itemExistsIndex, 1)
          set({
            cartItems: array,
            quantity: get().quantity - itemExists.quantity
          })
          toast.info('Xóa sản phẩm khỏi đơn hàng thành công')
        } else {
          const itemExists = get().cartItems.find(
            (cartItem) => cartItem.id === id
          )
          const itemExistsIndex = get().cartItems.findIndex(
            (cartItem) => cartItem.id === id
          )
          if (itemExists) {
            const array = get().cartItems
            array.splice(itemExistsIndex, 1)
            set({
              cartItems: array,
              quantity: get().quantity - itemExists.quantity
            })
          }
          toast.info('Xóa sản phẩm khỏi đơn hàng thành công')
        }
      },
      order: () => {
        set({ cartItems: [], quantity: 0 })
      }
    }),
    {
      name: 'cart-cake-moon'
    }
  )
)

export default useCartStore
