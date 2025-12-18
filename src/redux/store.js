import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import groupReducer from './groupSlice';
import expenseReducer from './expenseSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupReducer,
    expenses: expenseReducer,
  },
});
