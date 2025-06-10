import {create} from "zustand";
import { CartStore } from "../types/ProduxtType";
import axios from "axios";

const useStore = create<CartStore>((set, get) => ({
    items: [],
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
    }
}))