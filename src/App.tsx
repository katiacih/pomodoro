import React, { useState } from 'react';
import Header from './components/header'
import Button from 'components/buttons/button'
import ToggleCustom  from 'components/buttons/toggleCustom';
import ComoFunciona from 'pages/ComoFunciona';
import Tasks from './pages/task/tasks';
import ContentTimer from './pages/content-timer/content-timer';
import { RecoilRoot } from 'recoil';
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
        <h2 className="titlePomodoro">Pomodoro</h2>
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
          ?
            <RecoilRoot>
              <div className='contentTaskTimer'>
                <Tasks />
                <ContentTimer/>
              </div>
            </RecoilRoot>
          : <ComoFunciona/>
      }
      
    </div>
  );
}

export default App;
