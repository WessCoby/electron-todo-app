import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialListData } from '../data';


const initialState: string = initialListData[2].id;

const activeListSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    changeActive: (_state, { payload }: PayloadAction<string>) => payload
  }
})

export const { actions: activeListActions } = activeListSlice;
export default activeListSlice.reducer;