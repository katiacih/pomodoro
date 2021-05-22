import React, { useState } from 'react';
import Card from '../components/card';
import Button from '../components/button'
import './tasks.css'

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
 
const Tasks: React.FC = () => {
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
        <h2>Tasks</h2>
        <p>Inclua suas tarefas para melhorar aproveitamento.</p>

      </div>

      <input value={newTask} onChange={ evt => onChangeNewTask(evt)}/>
      <div className="addtasks">
        <Button label="Add Task" onClick={() => addNewTask()}
          />
      </div>

      <div className='listaTasks'>
        <h3>Tasks Finalizadas: {getTasksFinalizadas()}</h3>

        <ul>
          { tasks.map((item) => 
             <li>{item.descricao}</li>
            )
            }
        </ul>


      </div>

    </Card>
  );
}
export default Tasks;