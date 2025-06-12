import { create } from "zustand";
import { CartStore, Product } from "../types/ProductType";
import axios from "axios";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
    currentUser: null,

    fetchItems: async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            set({ items: res.data });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    },
    // 카테고리별
    getItemCategory: (category: string) => {
        const allItem = get().items;
        if (!category || category === "all") return allItem;
        return allItem.filter((item) => item.category === category);
    },
    // 장바구니 담기
    addCart: (product: Product) => {
        set((state) => {
            const existingItem = state.cartItems.find(item => item.id === product.id);
            let updateCart;

            if (existingItem) {
                updateCart = state.cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updateCart = [...state.cartItems, { ...product, quantity: 1 }];
            }

            const updateCount = updateCart.reduce((sum, item) => sum + item.quantity, 0);
            // reduce(누적값, 현재값) : 배열에 있는 데이터를 체크를 하면서 누적 값을 계산하는 함수
            const updateTotal = updateCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            alert("상품이 장바구니에 담겼습니다.");
            return {
                cartItems: updateCart,
                cartCount: updateCount,
                totalPrice: updateTotal
            };
        });
    },
    // 장바구니 삭제
    removeCart: (id: number) => {
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

    increaseQuantity: (id: number) => {
        set((state) => {
            const updateCart = state.cartItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            const updateCount = updateCart.reduce((sum, item) => sum + item.quantity, 0);
            const updateTotal = updateCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            return {
                cartItems: updateCart,
                cartCount: updateCount,
                totalPrice: updateTotal
            };
        })
    },

    decreaseQuantity: (id: number) => {
        set((state) => {
            const itemToUpdate = state.cartItems.find(item => item.id === id);

            if (!itemToUpdate) return state;

            let updateCart;
            if (itemToUpdate.quantity === 1) {
                updateCart = state.cartItems.filter(item => item.id !== id);
            } else {
                updateCart = state.cartItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }

            const updateCount = updateCart.reduce((sum, item) => sum + item.quantity, 0);
            const updateTotal = updateCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            return {
                cartItems: updateCart,
                cartCount: updateCount,
                totalPrice: updateTotal
            };
        });
    },

    // 회원가입
    memberUser: async (user, navigate) => {
        try {
            const { email, password } = user;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            console.log('Firebase User: ', firebaseUser);

            // 이메일 인증 보내기
            await sendEmailVerification(firebaseUser);

            alert("회원가입에 성공했습니다. 이메일 인증을 해주세요.");

            if (navigate) navigate("/login");

            return {
                success: true,
                user: firebaseUser
            };
        } catch (error: any) {
            console.log(error);
            alert("회원가입 실패: " + error.message);
            return {
                success: false,
                error: error.message
            };
        }
    },


    // 로그인
    login: async (user, navigate) => {
        try {
            const { email, password } = user;

            // Firebase Authentication으로 로그인
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            // 이메일 인증 여부 확인
            if (!firebaseUser?.emailVerified) {
                alert("이메일 인증이 필요합니다.");
                return;
            }

            // 로그인 상태 저장
            set({ currentUser: { email: firebaseUser.email } });

            alert("로그인 되었습니다.");

            if (navigate) navigate("/member");

        } catch (error) {
            console.log(error);
            alert("로그인 실패");
        }
    },

    // 로그아웃
    logout: async () => {
        await signOut(auth);
        set({ currentUser: null });
        alert("로그아웃되었습니다");
    }
}))