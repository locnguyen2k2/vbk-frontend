import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { persistedState } from './persisted.store';
import { userSlice } from './reduceres/user.slice';
import { listenerMiddleware } from '../hooks';
import { configSlice } from './reduceres/config.slice';

export const rootReducer = combineSlices(userSlice, configSlice);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  preloadedState: persistedState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;
