import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialListData } from '../data';


const initialState: string = initialListData[0].id;

const { actions, reducer } = createSlice({
  name: 'active',
  initialState,
  reducers: {
    select: (_state, { payload }: PayloadAction<string>) => payload
  }
})

export const {
  select: changeActive
} = actions;

export default reducer;