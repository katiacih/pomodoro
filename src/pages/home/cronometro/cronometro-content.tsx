import React, { useState } from 'react';
// import Card from '../../components/card/card';
import Button from '../../../components/buttons/button'
import './cronometro-content.css'
// import Checkbox from 'components/buttons/checkbox';
import Alert from 'components/alert/alert';
import Cronometro from './components/cronometro'

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
 
const CronometroContent: React.FC = () => {
  // const [newTask, setNewTask] = useState('')
  // const [tasks, setTasks] = useState<TaskProps[]>(t)
  const [stateTimer, setStateTimer] = useState<'Play' | 'Stop' | 'Pause' | 'Restart'>('Stop')
  const [stateLabel, setStateLabel] = useState<'Em descanso' | `Let's Bora!!` >('Em descanso')

  // const onChangeNewTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
  //   setNewTask(evt.target.value)
  // }

  // const addNewTask = (): void => {
    
  // }

  // const getTasksFinalizadas = (): number => {
  //   return 1;
  // }


  const actionPlay = (): void => {

  }

  const actionPause = (): void => {

  }

  return (
    <>
      <div className='header'>
        <h4>Timer</h4>
        <div className="content content-timer">
          <Cronometro
            minuteInit={0}
            secondInit={0}
            label={stateLabel}
            timerState={stateTimer}
            order={'Crescente'} />
        </div>
        <div className="actions">
          <Button onClick={actionPlay} className='marginRightLg' label={'Play'} variant='secondary'/>
          <Button onClick={actionPause} label={'Pause'} variant='outline'/>
        </div>
        <Alert variant='success' isShow={true} title='Titulo' description='Esta descricao é para ver' />
      </div>

    </>
  );
}
export default CronometroContent;