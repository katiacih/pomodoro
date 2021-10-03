import React from 'react';
import Blank from '../../../../components/contents/blank';
import './tarefas-list.css';
import { BiTrash } from 'react-icons/bi';
import Checkbox from '../../../../components/buttons/checkbox'
import { removeTaskLocalStorage , setTaskStatusLocalStorage } from '../../../../controller/tarefas-controller';
import IconButton from 'components/buttons/icon-button';
import { useRecoilState, useRecoilValue } from 'recoil'
import { taskListState, infoTaskList } from '../../../../atoms/atoms'


export const TarefasList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(taskListState)
  const info = useRecoilValue(infoTaskList)

  const onChangeMark = (value: boolean, identificador: number): void => {
    setTasks(setTaskStatusLocalStorage(identificador, value))
  }

  const onClickRemover = (identificador: number): void => {
    setTasks(removeTaskLocalStorage(identificador))
  }


  return (
      <div>
        <p className="total">Tarefas Finalizadas: {info.taskCompleted}</p>
      {
        tasks.length > 0 
      ? <div className="content-list-tarefa">
      {
        tasks.map((item) => (
          <div className="cell" key={item.id}>
  
            <Checkbox
              identificador={item.id}
              label={item.description}
              name={`item${item.id}`}
              onChange={onChangeMark}
              checked={item.isCompleted} />
            <div className="item-2">
              <IconButton icon={<BiTrash/>} onClick={() => onClickRemover(item.id)} />
            </div>
            
          </div>
          ))
        }
      </div>
      : <div className="blank">
        <Blank/>
        </div>
        }
    </div>
         
  );
}