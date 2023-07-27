import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CarProps } from "@types";

export interface totalDaysState {
  days: number;
}

const initialState: totalDaysState = {
    days : 0
};

export const totalDaysSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    totalDay: (state, action: PayloadAction<number>) => {
      state.days = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { totalDay } = totalDaysSlice.actions;

export default totalDaysSlice.reducer;
