import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      addToCart(item) {
        const products = get().products;
        const productsInState = products.find(
          (product) => product.id === item.id
        );

        if (productsInState) {
          const updatedProducts = products.map((product) =>
            product.id === productsInState.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : item
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price * item.quantity,
          }));
        }
      },

      removeFromCart(item) {
        set((state) => {
          const updatedProducts = state.products.filter(
            (product) => product.id !== item.id
          );
          const totalItems = state.totalItems - item.quantity;
          const totalPrice = state.totalPrice - item.price * item.quantity;
          return {
            products: updatedProducts,
            totalItems: totalItems < 0 ? 0 : totalItems,
            totalPrice: totalPrice < 0 ? 0 : totalPrice,
          };
        });
      },
      clearCart() {
        set({
          products: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
