import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  participants: [],
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      state.participants.push(action.payload);
    },
  },
});

export const { addParticipant } = participantsSlice.actions;
export default participantsSlice.reducer;
