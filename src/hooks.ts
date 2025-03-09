import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store/store';
import { addListener, createListenerMiddleware } from '@reduxjs/toolkit';

declare type ExtraArgument = { foo: string };

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const listenerMiddleware = createListenerMiddleware();
export const addAppListener = addListener.withTypes<RootState, AppDispatch>();
export const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch,
  ExtraArgument
>();
