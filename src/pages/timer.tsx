import React, { useState } from 'react';
import Card from '../components/card';
import Button from '../components/buttons/button'
import './timer.css'

type TaskProps = {
  descricao: string
  isCompleted: boolean
}

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
 
const Timer: React.FC = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>(t)

  const onChangeNewTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(evt.target.value)
  }

  const addNewTask = (): void => {
    
  }

  const getTasksFinalizadas = (): number => {
    return 1;
  }

  return (
    <Card>
      <div className='header'>
        <h2>Timer</h2>

      </div>

    </Card>
  );
}
export default Timer;