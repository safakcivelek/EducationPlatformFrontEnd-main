"use client"
import { productsType } from "@/interFace/interFace";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
interface CartState {
  cartProducts: productsType[];
}

const initialState: CartState = {
  cartProducts: [],
};

export const wishlistSlice = createSlice({
  name: "wist",
  initialState,
  reducers: {
    wishlist_product: (state, { payload }: PayloadAction<productsType>) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity! += 1;
        toast.info("Increase Product Quantity", {
          position: "top-left",
        });
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`${payload.title} added to wishlist`, {
          position: "top-left",
        });
      }
    },
    remove_wishlist_product: (state, { payload }: PayloadAction<productsType>) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload.id
      );
      toast.error(`remove from your wishlist`, {
        position: "top-left",
      });
    },

    clear_cart: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all wishlist items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_quantity: (state, { payload }: PayloadAction<productsType>) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );
      if (cartIndex >= 0 && state.cartProducts[cartIndex]?.quantity) {
        state.cartProducts[cartIndex].quantity! -= 1;
        toast.error(`Decrease cart quantity`, {
          position: "top-left",
        });
      }
    },
  },
});

export const {
  wishlist_product,
  remove_wishlist_product,
  clear_cart,
  decrease_quantity,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
