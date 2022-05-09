import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Result } from "../../../interfaces/interface";
import { AppState, AppThunk } from "../../app/store";

export interface searchState {
  value: string[];
  names: Result[];
  text: string;
}

const initialState: searchState = {
  value: [],
  names: [],
  text: "",
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
    name: (state, action: PayloadAction<Result[]>) => {
      state.names = [...action.payload];
    },
    text: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const selectSearch = (state: AppState) => state.search.names;

export const { add, name, text } = searchSlice.actions;

export default searchSlice.reducer;
