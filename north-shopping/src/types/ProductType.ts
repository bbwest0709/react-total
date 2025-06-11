export interface Product {
    id: number;
    title: string;
    price: number,
    description: string,
    image: string,
    category: string;
    rating:{
        count: number;
        rate: number;
    },
}

export interface CartStore {
    items:Product[],
    cartItems: Product[],
    cartCount: number,
    totalPrice: number,
    
    fetchItems: () => void;
    getItemCategory: (category:string) => Product[],
    addCart: (product:Product) => void;
    removeCart: (id:number) => void;
}