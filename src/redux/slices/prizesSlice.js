import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/client';

export const fetchPrizes = createAsyncThunk(
  'prizes/fetchPrizes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.getPrizes();
      return response.prizes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPrize = createAsyncThunk(
  'prizes/createPrize',
  async (prizeData, { rejectWithValue }) => {
    try {
      const response = await apiClient.createPrize(prizeData);
      return response.prize;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const prizesSlice = createSlice({
  name: 'prizes',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    creatingStatus: 'idle',
    creatingError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrizes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPrizes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPrizes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createPrize.pending, (state) => {
        state.creatingStatus = 'loading';
        state.creatingError = null;
      })
      .addCase(createPrize.fulfilled, (state, action) => {
        state.creatingStatus = 'succeeded';
        state.items.unshift(action.payload);
      })
      .addCase(createPrize.rejected, (state, action) => {
        state.creatingStatus = 'failed';
        state.creatingError = action.payload;
      });
  },
});

export default prizesSlice.reducer;
