import { configureStore } from "@reduxjs/toolkit";
import favArrayReducer from "./favCart/favArraySlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import addCartReducer from "./favCart/addCartSlice";
import totalDaysReducer from "./daysHours/totalDaysSlice";
import totalHoursReducer from "./daysHours/totalHoursSlice";

export const store = configureStore({
  reducer: {
    favArrayReducer,
    addCartReducer,
    totalDaysReducer,
    totalHoursReducer
  
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
