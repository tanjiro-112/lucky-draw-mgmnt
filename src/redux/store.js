import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import prizesReducer from './slices/prizesSlice';
import participantsReducer from './slices/participantsSlice';
import drawsReducer from './slices/drawsSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    prizes: prizesReducer,
    participants: participantsReducer,
    draws: drawsReducer,
  },
});

export default store;
