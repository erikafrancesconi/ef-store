import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userslices";

export default configureStore({
  reducer: {
    user: userReducer,
  }
});