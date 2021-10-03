import React, { useState, useEffect } from 'react';
import Button from '../../../components/buttons/button'
import TextField  from 'components/text-field/text-field';
import './tarefas.css';
import { TarefasList } from './components/tarefas-list';
import { addTaskLocalStorage, getTasksLocalStorage } from '../../../controller/tarefas-controller'
import { useRecoilState } from 'recoil'
import { taskListState } from '../../../atoms/atoms'
 
const Tarefas: React.FC = () => {
  const [newTask, setNewTask] = useState('')
  const [, setTasks] = useRecoilState(taskListState)
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
  }, [setTasks]);
  return (
    <>
      <div className='header'>
        <h3>Tarefas</h3>
        <p>Inclua suas tarefas para um melhor aproveitamento.</p>
      </div>
      <TextField value={newTask} onChange={onChangeNewTask} msgError={errorText}/>
    
      <div className="addtasks">
        <Button label="Adicionar Tarefa" onClick={() => addNewTask()}
          />
      </div>

      <TarefasList />

    </>
  );
}
export default Tarefas;