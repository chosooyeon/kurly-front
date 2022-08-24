import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  value: any
}

const initialState: CommonState = {
  value: {}
};

export const searchSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    setSearchData(state, action: PayloadAction<any>) {
      state.value = action.payload;
    }
  }
});

export const { setSearchData } = searchSlice.actions;

export default searchSlice;