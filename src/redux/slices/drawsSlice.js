import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  drawResult: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const performDraw = createAsyncThunk('draws/performDraw', async ({ prizeId, numberOfWinners }, { getState }) => {
  const { participants, prizes } = getState();
  const prize = prizes.items.find(p => p.id === prizeId);
  if (!prize) {
    throw new Error('Prize not found');
  }

  const availableParticipants = [...participants.items];
  const shuffled = availableParticipants.sort(() => 0.5 - Math.random());
  const winners = shuffled.slice(0, numberOfWinners);

  return { prize, winners };
});

const drawsSlice = createSlice({
  name: 'draws',
  initialState,
  reducers: {
    clearDraw: (state) => {
      state.drawResult = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(performDraw.pending, (state) => {
        state.status = 'loading';
        state.drawResult = null;
        state.error = null;
      })
      .addCase(performDraw.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.drawResult = action.payload;
      })
      .addCase(performDraw.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearDraw } = drawsSlice.actions;

export default drawsSlice.reducer;
