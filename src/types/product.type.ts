export enum CAKE_TYPE {
  GIVRAL = 'givral',
  COMBO_GIVRAL = 'combo/givral',
  BRODARD = 'brodard',
  COMBO_BRODARD = 'combo/brodard'
}

interface ITrongLuong {
  [key: string]: {
    egg: number;
    price: number;
    code: string;
  } | undefined;
}

export interface IProduct {
  id: number;
  name: string;
  body?: string;
  slug: string;
  price?: number;  // price là optional vì có thể không có trong single item
  img: string;
  type: string;
  egg?: number;
  codes?: string[];  // sử dụng string[] để lưu trữ danh sách các mã code
  brand: string;
  trongluong?: ITrongLuong;  // sử dụng ITrongLuong cho thuộc tính trongluong
}
