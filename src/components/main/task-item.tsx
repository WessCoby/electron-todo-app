import React, { FC, useState } from 'react';

import { Task } from '../../types';
import {
  useAppDispatch, useAction
} from '../../store';
import { UpdateTaskForm } from '..';
import { ReactComponent as Edit } from '../../svg/edit.svg';
import { ReactComponent as Delete } from '../../svg/delete.svg';


type TaskItemProps = Pick<Task, 'id' | 'title' | 'icon' | 'completed'>;

const TaskItem: FC<TaskItemProps> = ({ id, title, completed, icon }) => {
  const dispatch = useAppDispatch();
  const { toggleCompleted, removeTask } = useAction();
  const [isEditMode, setEditMode] = useState(false);

  return !isEditMode ? (
    <div className="my-2 flex justify-between items-center">
      <label
        className={
          `cursor-pointer flex items-center text-xl md:text-2xl transform motion-reduce:transform-none hover:translate-x-1 hover:-translate-y-1 hover:scale-100 transition ease-in-out duration-500`
        }
      >
        <input
          type="checkbox"
          name="task"
          id={id}
          checked={completed}
          onChange={
            () => dispatch(toggleCompleted(id))
          }
          className="focus:outline-none focus:shadow-outline  checked:border-transparent form-checkbox text-gray-400"
        />
        <span className={
            `${completed ? 'line-through text-gray-400' : 'text-gray-800'} ml-2`
          }
        >
          {title}
        </span>
      </label>
      <div className="inline-flex">
        <button
          className="transition duration-500 ease-in-out hover:bg-secondary-500 hover:text-white text-secondary-500 font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
          onClick={() => setEditMode(true)}
        >
          <Edit className="w-6 h-6" />
        </button>
        <button
          className="transition duration-500 ease-in-out hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded-r text-red-500 focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(removeTask(id))}
        >
          <Delete className="w-6 h-6" />
        </button>
      </div>
    </div>
  ) : (
    <UpdateTaskForm
      onFocus={isEditMode}
      setter={setEditMode}
      id={id}
      title={title}
    />
  )
}

export default TaskItem;