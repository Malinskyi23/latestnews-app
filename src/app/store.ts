// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { rootReducer } from '@/app/rootReducer.ts';
import { currentsApi } from '@/shared/api';
import {
  configureStore,
  type Action,
  type ThunkAction,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type RootState = ReturnType<typeof rootReducer>;

// TODO: Add correct types for middleware, for now we use any
// const logger = store => next => action => {
//   console.log('Dispatching action:', action);
//   const result = next(action);
//   console.log('New state:', store.getState());
//   return result;
// };

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(currentsApi.middleware),
  // .concat(logger),
});

export const persistor = persistStore(store);

// Infer the type of `store`
export type Store = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = Store['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
