import React, { FC, useState } from 'react';
import pl from 'pluralize';

import {
  useSelectTasksByListId, useSelectActiveList
} from '../../store';
import TaskItem from './task-item';
import { AddTaskForm } from '..';
import { ReactComponent as Plus } from '../../svg/plus.svg';


const Main: FC = () => {
  const [isAddTaskMode, setAddTaskMode] = useState(false);
  const activeList = useSelectActiveList();
  const tasks = useSelectTasksByListId();

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto h-full">
      <div className="px-6 flex flex-col h-full">
        <div className="my-4 flex items-center justify-start">
          <img src={activeList.icon} alt={activeList.name} className="mr-1"/>
          <div className="">
            <p className="text-xs tracking-wider text-gray-600">
              {pl('task', tasks.length, true)}
            </p>
            <h3 className="text-3xl xl:text-4xl tracking-wider font-sans font-black text-gray-900 -mt-1">
              {activeList.name}
            </h3>
          </div>
        </div>
        <div className="overflow-auto h-full">
          {tasks
            .map(({ id, title, icon, completed }) => (
              <TaskItem
                key={id}
                id={id}
                title={title}
                icon={icon}
                completed={completed}
              />
            ))
          }
        </div>
        <div className="justify-self-end w-full my-4">
          <div className={`flex w-full ${!isAddTaskMode && 'justify-end'}`}>
            {!isAddTaskMode && (
              <button
                className="p-1 rounded-full bg-secondary-500 shadow-lg hover:bg-secondary-700 focus:outline-none focus:shadow-outline"
                onClick={() => setAddTaskMode(true)}
              >
                <Plus className="w-10 h-10 text-bold text-white" />
              </button>
            )}
            {isAddTaskMode && (
              <div className="w-full flex">
                <AddTaskForm onFocus={isAddTaskMode} setter={setAddTaskMode} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;