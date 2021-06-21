import React, { useEffect, useState } from 'react';
import Blank from '../../components/contents/blank';
import './list-todo.css';
import { BiTrash } from 'react-icons/bi';
import Checkbox from '../../components/buttons/checkbox'
import { Todo } from 'model/model';
import { getTasksDB, setTasksDB } from 'model/util';


export const ListTodo: React.FC = () => {
  const ITENS_POR_PAG = 5;
  const [totalItens, setTotalItens] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [tasks, setTasks] = useState<Todo[]>([]);

  const getTaskFinalizadas = (): number => {
    const finalizadas = tasks.filter( item => item.isCompleted)
    return finalizadas.length;
  }

  const onChangeMark = (value: boolean, identificador: number): void => {
    const tasks= getTasksDB()
    const tasksList = tasks.map((t) => {
      if (t.id === identificador) {
        t.isCompleted = value;
      }
      return t
    });
    setTasksDB(tasksList);
   
  }

  const getTasks = (): void => {
    let listaTasks = getTasksDB();
    //paginar
    setTotalItens(listaTasks.length)
    setTasks(listaTasks.splice((paginaAtual - 1) * ITENS_POR_PAG, ITENS_POR_PAG ))
  }


  useEffect(() => {
    getTasks();
  }, []);


  return (
      <div className='listaTasks'>
        <p className="total">Tasks Finalizadas: {getTaskFinalizadas()}</p>
      {
        tasks.length > 0 
      ?
      tasks.map((item) => (
        <div className="content" key={item.id}>
          <div className="item-1" style={{ display: 'flex' }}>
            <Checkbox identificador={item.id} onChange={onChangeMark} checked={item.isCompleted} />
            <label> {item.description}</label>
          </div>
          <div className="item-2">
            <button>
              <BiTrash/>
            </button>
          </div>
          
        </div>
        ))
          : <div className="blank">
              <Blank/>
            </div>
      }
    </div>
  );
}