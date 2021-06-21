import React, { useState } from 'react';
import Card from '../../components/card';
import Button from '../../components/buttons/button'
import TextArea  from 'components/text-area/text-area';
import './tasks.css'
import { ListTodo } from './list-todo';
 
const Tasks: React.FC = () => {
  const [newTask, setNewTask] = useState('')

  const getId = (): number => {
    const tasksDb = localStorage['tasks'];
    let listaTasks = tasksDb ? JSON.parse(tasksDb) : [];
    return listaTasks.length++;
  }

  const onChangeNewTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(evt.target.value)
  }

  const addNewTask = (): void => {
    const newTasks =  {
      id: getId(),
      description: newTask,
      isCompleted: false,
    };

    const tasksDB = localStorage['tasks'];
    const tasks = tasksDB ? JSON.parse(tasksDB) : [];
    tasks.push(newTasks);
    localStorage['tasks'] = JSON.stringify(tasks);
    setNewTask('');
  }


  return (
    <Card>
      <div className='header'>
        <h4>Tasks</h4>
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