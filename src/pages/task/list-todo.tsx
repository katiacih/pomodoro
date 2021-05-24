import React from 'react';
import { useRecoilValue } from 'recoil'
import { todoListState } from './../../atoms/atoms'
import Blank from '../../components/contents/blank';
import './list-todo.css';
import { BiTrash } from 'react-icons/bi';
import Checkbox from '../../components/buttons/checkbox'


export const ListTodo: React.FC = () => {
  const list = useRecoilValue(todoListState)

  const getTaskFinalizadas = (): number => {
    const finalizadas = list.filter( item => item.isCompleted)
    return finalizadas.length;
  }

  const onchangeMark = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(evt);
  }

  return (
      <div className='listaTasks'>
        <h4 className="total">Tasks Finalizadas: {getTaskFinalizadas()}</h4>
      {
        list.length > 0 
      ?
          list.map((item) => (
          
            <div style={{
              display: 'flex',
              padding: '12px 4px',
              border: '1px solid var(--secondary-color)',
              justifyContent: 'space-between'
            }} key={item.id}>
              <div className="item-1" style={{ display: 'flex' }}>
                <Checkbox onChange={onchangeMark} checked={item.isCompleted} />
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