import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartMenuReducer from './lib/showCartMenu'
import userReducer from "./lib/userInfo"
import cartReducer from './lib/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import wishlistReducer from './lib/wishlistSlice'
import productsReducer from './lib/productsSlice'
import shippingReducer from './lib/shippingSlice'
import orderReducer from './lib/orderList'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  showCartMenu: cartMenuReducer,
  userInfo: userReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  productsData: productsReducer,
  shippingData: shippingReducer,
  orderData:orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)