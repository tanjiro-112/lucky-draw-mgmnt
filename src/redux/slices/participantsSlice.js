import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchParticipants = createAsyncThunk('participants/fetchParticipants', async () => {
  // For now, we'll use mock data. Later, this will be replaced with an API call.
  return [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];
});

export const addParticipant = createAsyncThunk('participants/addParticipant', async (participant) => {
    const newParticipant = { ...participant, id: Date.now() };
    return newParticipant;
});

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParticipants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchParticipants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addParticipant.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default participantsSlice.reducer;
