import { atom, selector } from 'recoil'
import { Task } from '../model/Task'

export const taskListState = atom({
  key: 'taskListState',
  default: [] as Task[]
})


export const infoTaskList = selector({
  key: 'taskListStatsState',
  get: ({get}) => {
    const list = get(taskListState)
    const totalNum = list.length
    const taskCompleted = list.filter( item => item.isCompleted).length
    return {
      totalNum,
      taskCompleted
    }
  }
})

