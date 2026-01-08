import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/client';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.getEvents();
      return response.events;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await apiClient.createEvent(eventData);
      return response.event;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createEvent.pending, (state) => {
        // Optionally set a specific loading state for creation
        state.status = 'loading'; 
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.unshift(action.payload); // Add the new event to the beginning
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
