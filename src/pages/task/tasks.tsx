import React, { useState } from 'react';
import Card from '../../components/card';
import Button from '../../components/buttons/button'
import TextArea  from 'components/text-area/text-area';
import './tasks.css'
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'atoms/atoms';
import { Todo } from '../../model/model'
import { ListTodo } from './list-todo';


const t = [
  {
    descricao: 'Corrigir exercicios',
    isCompleted: false
  },
  {
    descricao: 'Estudar javascript',
    isCompleted: false
  },
  {
    descricao: 'Criar banners',
    isCompleted: false
  }
]
 
const Tasks: React.FC = () => {
  const [newTask, setNewTask] = useState('')
  const setListTodo = useSetRecoilState(todoListState)
  let id = 0;

  const getId = (): number => {
    return id++;
  }


  const onChangeNewTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(evt.target.value)
  }

  const addNewTask = (): void => {
    const n =  {
      id: getId(),
      description: newTask,
      isCompleted: false,
    };
    setListTodo( prev => [...prev, n]);
    setNewTask('');
    
  }

  const getTasksFinalizadas = (): number => {
    return 1;
  }

  return (
    <Card>
      <div className='header'>
        <h3>Tasks</h3>
        <p>Inclua suas tarefas para melhorar aproveitamento.</p>
      </div>
      <TextArea value={newTask} onChange={onChangeNewTask}/>
    
      <div className="addtasks">
        <Button label="Add Task" onClick={() => addNewTask()}
          />
      </div>

      <ListTodo/>

    </Card>
  );
}
export default Tasks;