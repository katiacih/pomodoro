import React  from 'react';
import Card from '../../components/card/card';
import Tarefas from './tarefas/tarefas';
import CronometroContent from './cronometro/cronometro-content';
import './home.css'


const Home: React.FC = () => {

  return (
    <div className='contentTaskTimer'>
      <Card className='tasks'><Tarefas /></Card>
      <Card><CronometroContent/></Card>
    </div>
  );
}
export default Home;