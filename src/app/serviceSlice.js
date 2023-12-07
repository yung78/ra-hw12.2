import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  serviceInfo: {},
  loading: true,
  error: null,
  params: null,
  services: []
};

export const serviceSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    servicesRequest:(state) => {
      return {...state, loading: true, error: null};
    },
    serviceRequest: (state, action) => {
      return {...state, loading: true, error: null, params: action.payload};
    },
    requestFailur: (state, action) => {
      return {...state, loading: false, error: action.payload, };
    },
    servicesSuccess: (state, action) => {
      return {...state, loading: false, error: null, services: action.payload};
    },
    serviceSuccess: (state, action) => {
      return {...state, serviceInfo: action.payload, loading: false, error: null,};
    },
  },
});

export const { serviceRequest, servicesRequest, requestFailur, servicesSuccess, serviceSuccess } = serviceSlice.actions;
export default serviceSlice.reducer;
