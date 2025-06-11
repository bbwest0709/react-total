import {create} from "zustand";
import { CartStore, Product } from "../types/ProductType";
import axios from "axios";

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    cartItems: [],
    cartCount:0,
    totalPrice:0,

    fetchItems: async() => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            set({items:res.data});
            console.log(res.data);
        } catch(error) {
            console.error(error);
        }
    },
    // 카테고리별
    getItemCategory:(category:string) => {
        const allItem = get().items;
        if(!category || category === "all") return allItem;
        return allItem.filter((item) =>item.category === category);
    },
    // 장바구니 담기
    addCart: (product: Product) => {
        set((state) => {
            const updateCart = [...state.cartItems, product];
            const updateCount = state.cartCount + 1;
            // reduce(누적값, 현재값) : 배열에 있는 데이터를 체크를 하면서 누적 값을 계산하는 함수
            const updateTotal = updateCart.reduce((sum, item) => sum + item.price, 0);
            alert("상품이 장바구니에 담겼습니다.");
            return {
                cartItems: updateCart,
                cartCount: updateCount,
                totalPrice: updateTotal
            };
        });
    },
    // 장바구니 삭제
    removeCart: (id:number) => {
        set((state) => {
            const updateCart = state.cartItems.filter((item) => item.id !== id);
            const updateCount = state.cartCount - 1;
            const updateTotal = updateCart.reduce((sum, item) => sum + item.price, 0);
            alert("상품이 삭제되었습니다")
            return {
                cartItems: updateCart,
                cartCount: updateCount,
                totalPrice: updateTotal
            }
        })
    },
}))