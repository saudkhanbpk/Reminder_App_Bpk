import { configureStore } from '@reduxjs/toolkit';
import formDataSlice from './FormdataSlice';

export default configureStore({
  reducer: {
    data: formDataSlice
  }
})