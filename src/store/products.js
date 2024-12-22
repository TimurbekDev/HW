import { create } from "zustand";
import { customAxios } from "../api/axios";

export const useProductStore = create(set => ({
    products: [],
    product: null,
    isLoading: false,
    error: null,
    getAllProducts: async () => {
        set({ isLoading: true });
        set({ error: null });
        try {
            const { data } = await customAxios.get('/products')
            set({ products: data.products })
            return data
        } catch (error) {
            set({ error: error })
        } finally {
            set({ isLoading: false })
        }
    },
    getSingleProduct: async (id) => {
        set({ isLoading: true });
        set({ error: null });
        try {
            const { data } = await customAxios.get(`/products/${id}`)
            set({ product: data })
            return data
        } catch (error) {
            set({ error: error })
        } finally {
            set({ isLoading: false })
        }
    },
    refetch: () => {
        getAllProducts()
    }
}))