import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CarProps } from "@types";

export interface addCartState {
  cart: CarProps[];
}

const initialState: addCartState = {
  cart:[]
};

export const addCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CarProps>) => {
      state.cart.splice(0,1,action.payload);
      console.log("addtocart",action.payload)
      console.log(state.cart)
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart } = addCartSlice.actions;

export default addCartSlice.reducer;
