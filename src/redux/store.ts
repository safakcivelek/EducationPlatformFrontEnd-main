import { combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, Persistor } from 'redux-persist';
import { configureStore as configureStoreRTK } from '@reduxjs/toolkit';
import { wishlistSlice } from './slices/wishlist-slice';


// RootState and AppDispatch declarations

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  cart: cartSlice.reducer,
  wist:wishlistSlice.reducer,
  
}));

const store = configureStoreRTK({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppPersistor = Persistor;

export const persistor = persistStore(store);

export default store;

