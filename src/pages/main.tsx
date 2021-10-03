import React, { useState } from 'react';
import Header from './components/header'
import Button from 'components/buttons/button'
import ComoFunciona from 'pages/como-funciona/como-funciona';
import Home from './home/home';
import { RecoilRoot } from 'recoil';
import { useTheme } from '../context/theme'
import './main.css';

const Main: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isThemeLight, setIsThemeLight] = useState(true)
  const [isPagePomodoroActive, setIsPagePomodoroActive] = useState(true)

  const onClickComoFunciona = (): void => {
    setIsPagePomodoroActive(false)
  }

  const onClickVoltarPagePomodoro = (): void => {
    setIsPagePomodoroActive(true)
  }

  const onChangeTheme = (value: boolean): void => {
    setTheme({
      ...theme,
      type: value === true ? 'light' : 'dark'
    })
    setIsThemeLight(value)
  }

  return (
    <div style={{ background: theme.type === 'light' ? theme.light.colors.background :  theme.dark.colors.background}} className={"App"}>
      <Header 
        title={"PomoAdoro"}
        subtitle={"Use a técnica pomodoro para estudar de forma eficiente."}
        valueToggle={isThemeLight}
        onChangeToggle={onChangeTheme}
        actions={
          isPagePomodoroActive
          ? <Button 
              label="Como funciona?" 
              onClick={onClickComoFunciona}
            />
            :<Button 
              label="Voltar" 
              onClick={onClickVoltarPagePomodoro}
            />
       } />
      {
        isPagePomodoroActive
          ?
            <RecoilRoot>
              <Home/>
            </RecoilRoot>
          : <div style={{ display: 'flex', justifyContent: 'center'}}><ComoFunciona/></div>
      }
      
    </div>
  );
}

export default Main;
