import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './authSlice'
import storage from 'redux-persist/lib/storage'; 
const persistConfig = {
  key: 'root',  // Key used to store the state in localStorage
  storage,      // The storage to use (localStorage for web)
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const store =configureStore({
  reducer: {
    auth:persistedAuthReducer
  }
})
const persistor = persistStore(store);
export {store,persistor}
