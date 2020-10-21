import { v4 as uid } from 'uuid';

import { Task, TaskList } from '../types';


export const initialListData: TaskList[] = [
  {
    id: uid(),
    name: 'Today',
    icon: 'icons/sun-icon.png',
    writable: false
  },
  {
    id: uid(),
    name: 'Planned',
    icon: 'icons/calendar-icon.png',
    writable: false
  },
  {
    id: uid(),
    name: 'Personal',
    icon: 'icons/avatar-1.png',
    writable: false
  },
  {
    id: uid(),
    name: 'Work',
    icon: 'icons/briefcase-icon.png',
    writable: false
  },
  {
    id: uid(),
    name: 'Shopping',
    icon: 'icons/shop-icon.png',
    writable: false
  }
]

export const initialTaskData: Task[] = [
  {
    id: uid(),
    title: 'Go to Market',
    listId: initialListData[2].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Change your picture',
    listId: initialListData[2].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Buy theatre ticket',
    listId: initialListData[2].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Go to gym',
    listId: initialListData[2].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Add your portfolio',
    listId: initialListData[2].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Send project files',
    listId: initialListData[2].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Pay bills',
    listId: initialListData[2].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Watch Westworld',
    listId: initialListData[2].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Finish the Todo Project',
    listId: initialListData[0].id,
    completed: true,
  },
  {
    id: uid(),
    title: "Build sample app",
    listId: initialListData[0].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Complete the Advanced Redux Tutorial',
    listId: initialListData[0].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Watch Github for Intermediates Webinar',
    listId: initialListData[1].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Pick up Eddie at the Airport',
    listId: initialListData[1].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Finish the book',
    listId: initialListData[0].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Meet with Client',
    listId: initialListData[3].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Submit Report',
    listId: initialListData[3].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Setup Redux in Todo App',
    listId: initialListData[3].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Get the groceries',
    listId: initialListData[4].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Purchase new Headsets',
    listId: initialListData[4].id,
    completed: true,
  },
  {
    id: uid(),
    title: 'Get a Microphone',
    listId: initialListData[4].id,
    completed: false,
  },
  {
    id: uid(),
    title: 'Get the Fullstack course on Udemy',
    listId: initialListData[4].id,
    completed: true,
  }
]