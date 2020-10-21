import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { TaskList } from '../../types';
import { initialListData } from '../data';

type CreatePayload = Pick<TaskList, 'name'>;
type UpdatePayload = Pick<TaskList, 'id' | 'name'>;


const initialState: TaskList[] = initialListData;

const { actions, reducer } = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<TaskList>) => {
        state.push(payload);
      },
      prepare: ({ name }: CreatePayload) => ({
        payload: {
          id: uuid(),
          name,
          icon: '/icons/list-icon.png',
          writable: true
        }
      })
    },
    update: (state, { payload }: PayloadAction<UpdatePayload>) => {
      const list = state.find(task => task.id === payload.id!);
      if(list && list.writable) {
        list.name = payload.name;
      }
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      const index = state.findIndex(list => list.id === payload);
      if(index !== -1 && state[index].writable) {
        state.splice(index, 1);
      }
    }
  }
})

// Actions
export const {
  create: createList,
  update: updateList,
  remove: removeList
} = actions;

export default reducer;