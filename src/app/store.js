import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import epic from '../epics/fetchServiceEpic';
import serviceReducer from './serviceSlice';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: serviceReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(epic);
