import { createSlice } from '@reduxjs/toolkit';

import { uiGetTemplates } from './actions';

import { UI_SLICE_ID, UIStateSlice } from './types';

const uiInitialState: UIStateSlice = {
  TemplateList: [],
};

export const uiSlice = createSlice({
  name: UI_SLICE_ID,
  initialState: uiInitialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(uiGetTemplates.fulfilled, (state, action) => {
      state.TemplateList = action.payload;
    });
  },
});
