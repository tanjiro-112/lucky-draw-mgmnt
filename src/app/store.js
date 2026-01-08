import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import prizesReducer from '../features/prizes/prizesSlice';
import participantsReducer from '../features/participants/participantsSlice';
import drawsReducer from '../features/draws/drawsSlice';

export const store = configureStore({
  reducer: {
    prizes: prizesReducer,
    participants: participantsReducer,
    draws: drawsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
