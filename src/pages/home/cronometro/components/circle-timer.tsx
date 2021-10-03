import React, { useState, useEffect }  from 'react';
import { useTimerContext } from '../../../../context/timer'
import { useInterval } from '../../../../hooks/useInterval'
import './circle-timer.css';

type Props = {
  resetar: () => void
}

const CircleTimer: React.FC<Props> = ({ resetar }: Props) => {

  const { minOption, operacao } = useTimerContext()
  const [minInitial, setMinInitial] = useState<number>(minOption)
  const [state, setState] = useState({
    min: minInitial,
    sec: 0
  })

  useEffect(() => {
    if(minOption !== minInitial) {
      setMinInitial(minOption)
        setState({
          ...state,
          min: minOption,
          sec: 0
        })
    }
  },[minInitial, minOption, state])

  useEffect(() => {
    if(operacao === 'Stop' && state.min !== minInitial) {
      setState({
        ...state,
        min: minOption,
        sec: 0
      })
    } 
  }, [minInitial, minOption, operacao, state])

  useInterval(() => {
    if(state.min >= 0 || state.sec >= 0) {
      controllerTimer()
    }
  },1000)


  const goBackStateDefault = (): void => {    
    resetar()
  }

  const controllerTimer = (): void => {

    if(state.min === 0 && state.sec === 0 && operacao === 'Play') {
      goBackStateDefault()
    } else {
      if(operacao === 'Play') {
  
        if(state.sec === 0 && state.min > 0 ) {
          setState({
            ...state,
            min: state.min - 1,
            sec: 59
          })
        } else {
          setState({
            ...state,
            min: state.min,
            sec: state.sec - 1
          })
        }
      } 
      else {
        if(operacao === 'Stop' && state.min !== minInitial) {        
          resetar()
      }}
    }
  }

  const formatTimer = (): string => {
    let m = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(state.min)
    let s = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(state.sec)
    return `${m}:${s}`
  }

  return (
    <>
      <div className="circle-timer-bg">
        <svg className="circle-timer-bg-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle className="circle-svg-shadow" cx="50" cy="50" r="45"/>
          <circle className={["circle-timer-bg-svg-circle", 
          state.min === 0 && state.sec === 0 ?
          "circle-animation-off" :
          operacao === 'Play' && minInitial === 25 ? 'circle-animation-25-min' :
          operacao === 'Play' && minInitial === 15 ? 'circle-animation-15-min' :
          operacao === 'Play' && minInitial === 5 ? 'circle-animation-5-min' : "circle-animation-off"
        ].join(' ')} cx="50" cy="50" r="45"/>
        </svg>
        <span>{formatTimer()}</span>
      </div>
    </>
  );
}
export default CircleTimer;

