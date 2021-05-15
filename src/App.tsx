import React, { useState } from 'react';
import Header from './components/header'
import Button from 'components/button'
import ToggleCustom  from 'components/toggleCustom/toggleCustom';
import ComoFunciona from 'pages/ComoFunciona';
import Tasks from 'pages/Tasks';
import 'App.css';

function App() {
  const [isThemeLight, setIsThemeLight] = useState(true)
  const [isPagePomodoroActive, setIsPagePomodoroActive] = useState(true)

  const onClickComoFunciona = (): void => {
    setIsPagePomodoroActive(false)
  }

  const onClickVoltarPagePomodoro = (): void => {
    setIsPagePomodoroActive(true)
  }


  const onChangeTheme = (value: boolean): void => {
    setIsThemeLight(value)
  }

  return (
    <div className={["App",
        isThemeLight ? "themeLight": "themeDark"].join(' ')}>
      <div className="actionThemeContent">
        <ToggleCustom
          value={isThemeLight} 
          onChange={onChangeTheme}
        /></div>
      <Header actions={
        isPagePomodoroActive
        ? <Button label="Como funciona?" onClick={onClickComoFunciona}
          />
          :<Button label="Voltar" onClick={onClickVoltarPagePomodoro}
          />
       } />
      {
        isPagePomodoroActive
          ? <Tasks />
          : <ComoFunciona/>
      }
      
    </div>
  );
}

export default App;
