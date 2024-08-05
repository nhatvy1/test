import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Định nghĩa kiểu cho sản phẩm
export type Product = {
  id: number
  name: string
  brand: string
  type: string
  quantity: number
  price: number
  img: string
}

export type CounterState = {
  count: number
  products: Product[]
}

export type CounterActions = {
  decrementCount: () => void
  incrementCount: () => void
  addProduct: (product: Product) => void
  removeProduct: (id: number) => void
  updateProduct: (product: Product) => void
}

export type CounterStore = CounterState & CounterActions

const cartList: Product[] = []

export const defaultInitState: CounterState = {
  count: 0,
  products: cartList
}

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    addProduct: (product: Product) =>
      set((state) => {
        const updatedProducts = [...state.products, product]
        //circle

        // const storedArray = JSON.parse(localStorage.getItem("book")); // ["apple", "banana", "cherry"]
        // console.log(storedArray)
        // localStorage.setItem('book',1)
        return { products: updatedProducts }
      }),
    removeProduct: (id: number) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== id)
      })),
    updateProduct: (updatedProduct: Product) =>
      set((state) => ({
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      }))
  }))
}

// Khởi tạo store
const counterStore = createCounterStore()

// Export hook để sử dụng trong component
export const useCounterStore = () => useStore(counterStore)
