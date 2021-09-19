import React, { useState, useEffect }  from 'react';
import { useInterval } from '../../../../hooks/useInterval'
import './circle-timer.css';

type Props = {
  min: number
  sec: number
  operacao: 'Play' | 'Stop' | 'Pause' | 'Restart'
}

const CircleTimer: React.FC<Props> = ({ min, sec, operacao }: Props) => {

  const [stateOperacao, setOperacao] = useState(operacao)
  const [minInitial, setMinInitial] = useState(min)
  const [state, setState] = useState({
    opInicialMin: min,
    min: min,
    sec: sec
  })

  useInterval(() => {
    if(state.min > 0 || state.sec > 0) {
      controllerTimer(stateOperacao)
    }
  },1000)

  useEffect(() => {
    if(stateOperacao !== operacao){
      setOperacao(operacao)
    }
  },[operacao, stateOperacao])

  useEffect(() => {   
    setMinInitial(min)
  },[min])

  const resetState = (): void => {    
    setState({
      ...state,
      min: minInitial,
      sec: 0
    })
  }


  const controllerTimer = (operacao: 'Play' | 'Stop' | 'Pause' | 'Restart'): void => {
    if(operacao === 'Play') {
      if(state.sec === 0 && state.min > 0) {
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
      if(stateOperacao === 'Stop' && state.min !== minInitial) resetState()
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
          stateOperacao === 'Play' && minInitial === 25 ? 'circle-animation-25-min' :
          stateOperacao === 'Play' && minInitial === 15 ? 'circle-animation-15-min' :
          stateOperacao === 'Play' && minInitial === 5 ? 'circle-animation-5-min' : "circle-animation-off"
        ].join(' ')} cx="50" cy="50" r="45"/>
        </svg>
        <span>{formatTimer()}</span>
      </div>
    </>
  );
}
export default CircleTimer;

