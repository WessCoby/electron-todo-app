import React, { FC } from 'react';
import pl from 'pluralize';

import {
  useAppDispatch, changeActive, useSelectTotalTasksForList
} from '../../store';
import { useSidebarContext } from '../../context/sidebar.context';
import { TaskList } from '../../types';
import { ReactComponent as DotsVertical } from '../../svg/dots-vertical.svg';


interface Props {
  data: TaskList;
}

const List: FC<Props> = ({ data: { id, icon, name, writable } }) => {
  const dispatch = useAppDispatch();
  const { setIsOpen } = useSidebarContext();
  const total = useSelectTotalTasksForList(id);

  return (
    <div
      className="flex justify-between w-full py-5 my-3 cursor-pointer bg-white  shadow-xl rounded-lg hover:bg-secondary-300 relative"
      onClick={() => {
        setIsOpen(false);
        dispatch(changeActive(id));
      }}
    >
      <div className="flex items-center pl-2">
        <img src={icon} alt="" className=""/>
        <div className="pl-2">
          <h3 className="font-semibold tracking-wide">{name}</h3>
          <p className="text-xs text-gray-600">{pl('Task', total, true)}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-2">
        <DotsVertical className="w-4 h-4 fill-current text-gray-600" />
      </div>
    </div>
  )
}

export default List;