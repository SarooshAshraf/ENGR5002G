import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  metrics: [
    { id: '1', name: 'Heart Rate', value: '75 bpm', date: '2024-05-30' },
    { id: '2', name: 'Sleep', value: '7 hrs', date: '2024-05-30' },
    { id: '3', name: 'Weight', value: '70 kg', date: '2024-05-30' },
  ],
};

const healthSlice = createSlice({
  name: 'health',
  initialState,
  reducers: {
    addMetric: (state, action) => {
      state.metrics.push({ ...action.payload, id: new Date().toISOString() });
    },
    // Future reducers for update/delete can be added here
  },
});

export const { addMetric } = healthSlice.actions;
export default healthSlice.reducer; 