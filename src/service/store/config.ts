import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';



const rootReducer = combineReducers({
    searchData: searchSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
