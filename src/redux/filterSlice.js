import { createSlice } from "@reduxjs/toolkit";
const filterInitialState = {
  filter: "",
}

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setNameFilter(state, action) {
         state.filter = action.payload;
    }

  }


})

export const { setNameFilter } = filterSlice;
export const filterReducer = filterSlice.reducer;