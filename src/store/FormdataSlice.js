import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
  id: '',

};
export const formDataSlice = createSlice({
  name: 'formdata',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
    addId: (state, action) => {
      state.id = action.payload;
    }

  },

})



export const { addFormData, addId } = formDataSlice.actions;
export default formDataSlice.reducer;
