import { configureStore } from '@reduxjs/toolkit';
import addressesReducer from './addressReducer';
import thunkMiddleware from 'redux-thunk';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        addresses: addressesReducer,
    },
    middleware: (gDM) => gDM().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
