export interface Task {
  id: string;
  title: string;
  listId: string;
  icon?: string;
  completed: boolean;
}

export interface TaskList {
  id: string;
  name: string;
  icon: string;
  writable: boolean;
}