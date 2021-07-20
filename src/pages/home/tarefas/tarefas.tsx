import React, { useState, useEffect } from 'react';
import Button from '../../../components/buttons/button'
import TextArea  from 'components/text-area/text-area';
import './tarefas.css';
import { TarefasList } from './components/tarefas-list';
import { addTaskLocalStorage, getTasksLocalStorage } from '../../../controller/tarefas-controller'
import { useRecoilState } from 'recoil'
import { taskListState } from '../../../atoms/atoms'
 
const Tarefas: React.FC = () => {
  const [newTask, setNewTask] = useState('')
  const [_, setTasks] = useRecoilState(taskListState)
  const [errorText, setErrorText] = useState('')


  const onChangeNewTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(evt.target.value)
    if(errorText !== "") setErrorText('')
    
  }

  const addNewTask = (): void => {
    if(newTask !== "") {
      setTasks(addTaskLocalStorage(newTask))
      setNewTask('');
    } else {
      setErrorText('Informe o campo.')
    }
  }

  useEffect(() => {
    const getTasks = (): void => {
      let listaTasks = getTasksLocalStorage();
      setTasks(listaTasks)
    }
    getTasks();
  }, []);

  return (
    <>
      <div className='header'>
        <h4>Tarefas</h4>
        <p>Inclua suas tarefas para um melhor aproveitamento.</p>
      </div>
      <TextArea value={newTask} onChange={onChangeNewTask} msgError={errorText}/>
    
      <div className="addtasks">
        <Button label="Adicionar Tarefas" onClick={() => addNewTask()}
          />
      </div>

      <TarefasList />

    </>
  );
}
export default Tarefas;