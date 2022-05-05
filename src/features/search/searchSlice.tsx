import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";

export interface searchState {
  value: string[];
}

const initialState: searchState = {
  value: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const selectSearch = (state: AppState) => state.search.value;

export const { add } = searchSlice.actions;

export default searchSlice.reducer;
