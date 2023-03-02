import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
};
export const formDataSlice = createSlice({
  name: 'formdata',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    }
  },
})

export const { addFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
