// types.ts
export interface Combo {
  id: number
  name: string
  slug: string
  price: number
  body: string
  codes: never[]
}

export interface BrandData {
  name: string
  combo: Combo[]
  single: {
    id: number
    name: string
    trongluong: number
    egg: number
    price: number
  }[]
}

export interface Data {
  givral: BrandData
  brodard: BrandData
}

