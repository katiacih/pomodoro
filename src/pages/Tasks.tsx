import React, { useState } from 'react';
import Card from '../components/card';
import Button from '../components/button'
import './tasks.css'
 
const Tasks: React.FC = () => {
  const [newTask, setNewTask] = useState('')

  const onChangeNewTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(evt.target.value)
  }

  const addNewTask = (): void => {
    
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

    </Card>
  );
}
export default Tasks;