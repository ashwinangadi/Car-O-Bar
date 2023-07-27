import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CarProps } from "@types";

export interface totalHoursState {
  hours: number;
}

const initialState: totalHoursState = {
    hours : 0
};

export const totalHoursSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    totalhour: (state, action: PayloadAction<number>) => {
      state.hours = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { totalhour } = totalHoursSlice.actions;

export default totalHoursSlice.reducer;
