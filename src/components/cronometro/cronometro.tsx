import React, { useEffect, useRef, useState } from 'react';
import './cronometro.css'

type TimerState = 'Play' | 'Stop' | 'Pause' | 'Restart'
type OrderTimer = 'Crescente' | 'Decrescente'

type Props = {
  // minuteInit : indica o valor a ser inicializado para minutos
  minuteInit: number,
  // secondInit : indica o valor a ser inicializado para segundos
  secondInit: number,
  // timerState 'Play' | 'Stop' | 'Pause' | 'Restart'
  timerState?: TimerState
  // Label
  label?: string
  // Indica a ordem do timer 'Crescente' | 'Decrescente'
  order?: OrderTimer
}

const Cronometro: React.FC<Props> = ({
  minuteInit, secondInit, timerState = 'Stop', order = 'Crescente', label }: Props) => {
  const [state, setState] = useState({
    min: minuteInit,
    sec: secondInit,
    startDate: new Date()
  })
  const refLazy = useRef(null);
  const [intervalId, setIntervalId] = useState<any>(0)

  const formatTimer = (min: number, sec: number): string => {
    let m = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(min)
    let s = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(sec)
    return `${m}:${s}`
  }

  const incrementar = (): void => {
      
    // setState({
    //   ...state,
    //   min: state.sec === 59 ? state.min + 1 : state.min,
    //   sec: state.sec === 59 ? 0 : state.sec + 1
    // })
  }
  
  const decrementar = (): void => {
    if (state.min >= 0 && state.sec >= 0) {
      // setState({
      //   ...state,
      //   min: state.sec === 0 ? state.min - 1 : state.min,
      //   sec: state.sec > 0 ? state.sec - 1 : 0
      // })
    }
  }
  
  const execTick = (): void => {    
    setIntervalId(setInterval(() => {
      order === 'Crescente' ? incrementar() : decrementar()
    }, 1000)   
    )
  }

  const restartTick = (): void => {
    setState({ ...state, min: 0, sec: 0}) 
  }

  const stopTick = (): void => {
    clearInterval(intervalId)
    setState({ ...state, min: 0, sec: 0}) 
  }

  const pauseTick = (): void => {
    clearInterval(intervalId);
  }

  const initTimer = (): void => {
    switch (timerState) {
      case 'Pause':
        pauseTick();
      break;
      case 'Stop':
        stopTick();
      break;
      case 'Restart':
        restartTick();
      break;
      default:
        execTick();
        break;
    }

  }


  useEffect(() => {
    initTimer()
    // setInterval(function () {
    //   switch (timerState) {
    //     case 'Pause':
    //       console.log('Pause')
    //       break;
    //     case 'Stop':
    //       console.log('Stop')  
    //     break;
    //     case 'Restart':
    //       console.log('Restart')  
    //     break;
    //     default:
    //       console.log('Play')  
    //       break;
    //   }
    // }, 2000);
    
  }, [timerState])

  return (
    <div className="timer-group">
      <div className="timer minute">
        <div className="hand"><span></span></div>
        <div className="hand"><span></span></div>
      </div>
      <div className="face">
        {label && <h2>{label}</h2>}
        <p ref={refLazy} id="lazy">{formatTimer(state.min, state.sec)}</p>
      </div>
    </div>
  );
}
export default Cronometro;




