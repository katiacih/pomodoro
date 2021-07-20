import { Task } from '../model/Task'

export const getTasksLocalStorage = (): Task[] => {
  const tasksDb = localStorage['tasks'];
  const tasks = tasksDb ? JSON.parse(tasksDb) : [];

  return tasks;
}

export const setTasksLocalStorage = (tasks: Task[]): void => {
  localStorage['tasks'] = JSON.stringify(tasks);
}


const getNewId = (): number => {
  const tasksDb = localStorage['tasks'];
  let listaTasks = tasksDb ? JSON.parse(tasksDb) : [];
  return listaTasks.length++;
}

export const addTaskLocalStorage = (newTask: string): Task[] => {
  const newTaskCustom: Task =  {
    id: getNewId(),
    description: newTask,
    isCompleted: false,
  };
  const tasks: Task[] = getTasksLocalStorage()
  tasks.push(newTaskCustom);
  setTasksLocalStorage(tasks)
  return tasks
}


export const removeTaskLocalStorage = (taskId: number): Task[]=> {
  let tasks: Task[] = getTasksLocalStorage()
  console.log('is removendo', taskId)
  tasks = tasks.filter(tarefa => tarefa.id !== taskId)
  setTasksLocalStorage(tasks)
  return tasks
}

export const setTaskStatusLocalStorage = (taskId: number, isCompleted: boolean): Task[] => {
  let tasks: Task[] = getTasksLocalStorage()
  tasks = tasks.filter((item) => item.id === taskId
    ? item.isCompleted = isCompleted : item)
  setTasksLocalStorage(tasks)
  return tasks
}