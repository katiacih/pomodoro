import { Todo } from './../model/model';
import { atom }  from 'recoil'


export const todoListState = atom({
  key: 'todoListState',
  default:[] as Todo[],
})