import { Todo } from './model'

export const getTasksDB = (): Todo[] => {
  const tasksDb = localStorage['tasks'];
  const tasks = tasksDb ? JSON.parse(tasksDb) : [];

  return tasks;
}

export const setTasksDB = (tasks: Todo[]): void => {
  localStorage['tasks'] = JSON.stringify(tasks);
}