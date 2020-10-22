import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { Task } from '../../types';
import { initialTaskData } from '../data';

type UpdatePayload = Pick<Task, 'id' | 'title'>;
type CreatePayload = Pick<Task, 'title' | 'listId' | 'icon'>;


const initialState: Task[] = initialTaskData;

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: {
      reducer: (state, { payload }: PayloadAction<Task>) => {
        state.push(payload);
      },
      prepare: ({ title, listId, icon }: CreatePayload) => ({
        payload: {
          id: uuid(),
          title,
          listId,
          icon,
          completed: false
        }
      })
    },
    updateTask: (state, { payload }: PayloadAction<UpdatePayload>) => {
      const task = state.find(task => task.id === payload.id!);
      if(task) {
        task.title = payload.title;
      }
    },
    toggleCompleted: (state, { payload }: PayloadAction<string>) => {
      const task = state.find(task => task.id === payload);
      if(task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, { payload }: PayloadAction<string>) => {
      const index = state.findIndex(task => task.id === payload);
      if(index !== -1) {
        state.splice(index, 1);
      }
    }
  }
})

export const { actions: taskActions } = taskSlice;
export default taskSlice.reducer;