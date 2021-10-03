import{ useEffect, useRef } from 'react'

type CallbackFunction = () => void

export const useInterval = (callback: CallbackFunction, delay: number) => {
  const callbackRef = useRef<CallbackFunction>()

  useEffect(() => {
    callbackRef.current = callback
  },[callback])

  useEffect(() => {
    function tick() {
      if(callbackRef.current !== undefined) callbackRef.current()
    }
    if(delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])

}