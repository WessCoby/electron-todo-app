import { configureStore, createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import taskReducer  from './slices/tasks.slice';
import listReducer from './slices/lists.slice';
import activeListReducer from './slices/active.slice';
import { Task, TaskList } from '../types';


const store = configureStore({
  reducer: {
    lists: listReducer,
    tasks: taskReducer,
    active: activeListReducer
  }
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//! Custom Hooks
// Dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();


// Selector
export const useSelectActive = () => useSelector(
  (state: RootState) => state.active
);

export const useSelectLists = () => useSelector(
  (state: RootState) => state.lists
);

export const useSelectTasks = () => useSelector(
  (state: RootState) => state.tasks
);

// Filter task by ListId
const filterByListId = createSelector(
  (state: RootState) => state.tasks,
  (_: any, listId: string) => listId,
  (tasks: Task[], listId: string) => tasks.filter(
    task => task.listId === listId
  )
);
export const useSelectTasksByListId = (listId?: string) => useSelector(
  (state: RootState) => filterByListId(state, listId ?? state.active)
)
// Total number of tasks for the list
export const useSelectTotalTasksForList = (listId: string) => useSelector(
  (state: RootState) => filterByListId(state, listId).length
)

// Selector for active list object
const activeListFinder = createSelector(
  (state: RootState) => state.lists,
  (_: any, id: string) => id,
  (lists: TaskList[], id: string) => lists.find(
    list => list.id === id
  )!
);
export const useSelectActiveList = () => useSelector(
  (state: RootState) => activeListFinder(state, state.active)
)


//! Action Creators
export { changeActive } from './slices/active.slice';
export {
  createTask, removeTask, toggleCompleted, updateTask
} from './slices/tasks.slice';
export {
  createList, removeList, updateList
} from './slices/lists.slice';

//! Store
export default store;