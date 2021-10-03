import { createContext, useContext } from 'react'

export type TypeOperacao = 'Play' | 'Stop' | 'Pause' | 'Restart'

export type TypeOptions = 15 | 25 | 5

export type TimerContent = {
  minOption: TypeOptions 
  operacao: TypeOperacao
  setOperacao: (newValue: TypeOperacao) => void
  setOption: (newValue: TypeOptions) => void
}

export const MyTimerContext = createContext<TimerContent>({
  minOption: 25,
  operacao: 'Stop',
  setOperacao: () => {},
  setOption: () => {}
})

export const useTimerContext = () => useContext(MyTimerContext)
