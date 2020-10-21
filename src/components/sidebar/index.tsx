import React, { FC } from 'react';
import pl from 'pluralize';

import { useSelectLists, useSelectTotalTasksForList } from '../../store';
import { useSidebarContext } from '../../context/sidebar.context';
import List from './list';
import { ReactComponent as Hamburger } from '../../svg/hamburger.svg';
import { ReactComponent as Close } from '../../svg/close.svg';


const Sidebar: FC = () => {
  const lists = useSelectLists();
  const { isOpen, setIsOpen } = useSidebarContext();
  const totalToday = useSelectTotalTasksForList(lists[0].id)

  return (
    <div
      className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 transition duration-300 transform bg-gradient-to-b from-primary-500 text-gray-900 overflow-y-auto md:translate-x-0 md:static lg:inset-0 flex flex-col`}
    >
      <div className="px-4 flex items-center py-4">
        <button
          className="text-gray-500 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          {isOpen ?
            <Close className="w-6 h-6 fill-current text-gray-800" /> :
            <Hamburger className="w-6 h-6 fill-current text-gray-800" />
          }
        </button>
      </div>
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold ">Hello Wess</h3>
          <p className="text-xs tracking-wide">
            Today, you have {pl('task', totalToday, true)}
          </p>
        </div>
        <div className="">
          <img src="/icons/avatar-2.png" alt="" className=""/>
        </div>
      </div>

      <nav className="mt-2 px-4 flex-1 overflow-auto">
        {lists.map(list => (
          <List key={list.id} data={list} />
        ))}
      </nav>
    </div>
  )
}

export default Sidebar;