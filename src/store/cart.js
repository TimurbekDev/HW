import { create } from "zustand";

export const useCartStore = create(set => ({
    cart: [],
    isLoading: false,
    error: null,
    addToCart: (product) => set(state => ({
        cart: [...state.cart, {
            ...product, count: 1
        }]
    })),
    removeFromCart: (id) => set(state => ({ cart: state.cart.filter(prod => prod.id != id) })),
    decreaseCount: (id) => set(state => ({
        cart: state.cart.map(prod => prod.id == id ? { ...prod, count: +prod.count + 1 } : prod)
    })),
    increaseCount: (id) => set(state => ({
        cart: state.cart.map(prod => prod.id == id ? { ...prod, count: +prod.count - 1 } : prod)
    })),
    clearCart: () => set({ cart: [] }),
    refetch: () => {
        getAllCarts()
    }
}))