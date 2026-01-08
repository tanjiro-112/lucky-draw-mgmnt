import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  draws: [],
};

const drawsSlice = createSlice({
  name: 'draws',
  initialState,
  reducers: {
    addDraw: (state, action) => {
      state.draws.push(action.payload);
    },
  },
});

export const { addDraw } = drawsSlice.actions;
export default drawsSlice.reducer;
