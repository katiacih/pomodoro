import React, { useState, useCallback } from 'react';
import { ComboBox } from 'components/combo-box/combo-box'
import './cronometro-content.css'
import Button from 'components/buttons/button'
import CircleTimer from './components/circle-timer'
import { MyTimerContext, TypeOperacao, TypeOptions } from '../../../context/timer'

const CronometroContent: React.FC = () => {

  const [minOption, setOption] = useState<TypeOptions>(25)
  const [operacao, setOperacao] = useState<TypeOperacao>('Stop')

  const [stateDuracao, SetStateDuracao] = useState({
    value: '1',
    label: '25 minutos'
  })

  const actionPlay = (): void => {
    setOperacao('Play')
  }
  // const actionPause = (): void => {
  //   setOperacao('Pause')
  // }

  const actionStop = (): void => {
    setOperacao('Stop')
    if(stateDuracao.value === '1') { 
      setOption(25)
    }
    if(stateDuracao.value === '2'){
      setOption(15)
    }
    if(stateDuracao.value === '3') {
      setOption(5)
    }
    
  }

  const resetar = (): void => {
    if(stateDuracao.value === '1')  onChangeDuracao('25 minutos', '1')
    else if(stateDuracao.value === '2')  onChangeDuracao('15 minutos', '2')
    else if(stateDuracao.value === '3')  onChangeDuracao('5 minutos', '3')
    actionStop()
  }

  const atualizaDuracao = useCallback((optionLabel: string, optionValue: string): void => onChangeDuracao(optionLabel, optionValue), [])


  const onChangeDuracao = (optionLabel: string, optionValue: string)=> {
    SetStateDuracao({ label: optionLabel, value: optionValue })

    if(optionValue === '1') { 
      setOption(25)
    }
    if(optionValue === '2'){
      setOption(15)
    }
    if(optionValue === '3') {
      setOption(5)
    }
    
  }

  return (
    <MyTimerContext.Provider value={{
      minOption, 
      operacao,
      setOperacao,
      setOption
    }}>
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
            <CircleTimer  resetar={resetar}/>       
          </section>

          <section className="actions">
            <Button onClick={actionPlay} className='marginRightLg' label={'Play'} variant='secondary'/>
            {/* <Button onClick={actionPause} label={'Pause'} variant='outline'/> */}
            <Button onClick={actionStop} label={'Parar'} variant='outline'/>
          </section>
          
        </div>
        
      </div>

    </MyTimerContext.Provider>
  );
}
export default CronometroContent;
