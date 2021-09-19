import React, { useState, useCallback } from 'react';
import { ComboBox } from 'components/combo-box/combo-box'
import './cronometro-content.css'
import Button from 'components/buttons/button'
import CircleTimer from './components/circle-timer'

const CronometroContent: React.FC = () => {

  const [stateDuracao, SetStateDuracao] = useState({
    value: '1',
    label: '25 minutos'
  })
  const [stateTimerOperacao, setStateTimerOperacao] = useState<'Play' | 'Stop' | 'Pause' | 'Restart'>('Stop')
  const [stateTimer, setStateTimer] = useState({
    min: 25,
    sec: 0
  })

  const actionPlay = (): void => {
    setStateTimerOperacao('Play')
    
  }
  const actionPause = (): void => {
    setStateTimerOperacao('Pause')
  }

  const actionStop = (): void => {
    setStateTimerOperacao('Stop')
    
    setStateTimer({
      min: stateDuracao.value === '1' ? 25 
      : stateDuracao.value === '2' ? 15
      : 5,
      sec: 0
    })
  }

  const resetar = (): void => {
    onChangeDuracao('25 minutos', '1')
  }

  const atualizaDuracao = useCallback((optionLabel: string, optionValue: string): void => onChangeDuracao(optionLabel, optionValue), [])


  const onChangeDuracao = (optionLabel: string, optionValue: string)=> {
    SetStateDuracao({ label: optionLabel, value: optionValue })

    if(optionValue === '1') setStateTimer({
      min: 25,
      sec: 0
    })
    if(optionValue === '2') setStateTimer({
      min: 15,
      sec: 0
    })
    if(optionValue === '3') setStateTimer({
      min: 5,
      sec: 0
    })
  }

  return (
    <>
      <div className='header'>
        <div className="content">
          <section className="action-top">
            <ComboBox 
              key="comboBox"
              options={[
                {label: '25 minutos', value: '1'},
                {label: '15 minutos', value: '2'},
                {label: '5 minutos', value: '3'}
              ]}
              onChangeOption={atualizaDuracao}
              className="action-top-select"
              valueSelected={stateDuracao.value}
            />
            <Button label="Resetar" 
              onClick={resetar}
              variant={'link'}
            />
          </section>
          <section className="content-timer">
            <CircleTimer  
              min={stateTimer.min} 
              operacao={stateTimerOperacao}
              sec={stateTimer.sec}  />       
          </section>

          <section className="actions">
            <Button onClick={actionPlay} className='marginRightLg' label={'Play'} variant='secondary'/>
            <Button onClick={actionPause} label={'Pause'} variant='outline'/>
            <Button onClick={actionStop} label={'Parar'} variant='outline'/>
          </section>
          
        </div>
        
      </div>

    </>
  );
}
export default CronometroContent;
