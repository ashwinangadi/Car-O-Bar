import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CarProps } from "@types";

export interface favArrayState {
  favArray: CarProps[];
}

const initialState: favArrayState = {
  favArray: [],
};

export const favArraySlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<CarProps>) => {
      state.favArray.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<CarProps>) => {
      state.favArray.filter((carmodel: { model: string }, index) => {
        if (carmodel.model === action.payload.model) {
          state.favArray.splice(index, 1);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFav, removeFav } = favArraySlice.actions;

export default favArraySlice.reducer;
