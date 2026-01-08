import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prizes: [],
};

const prizesSlice = createSlice({
  name: 'prizes',
  initialState,
  reducers: {
    addPrize: (state, action) => {
      state.prizes.push(action.payload);
    },
  },
});

export const { addPrize } = prizesSlice.actions;
export default prizesSlice.reducer;
