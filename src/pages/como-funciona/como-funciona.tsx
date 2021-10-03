import React from 'react';
import './como-funciona.css';
 
const ComoFunciona: React.FC = () => {
  return (
    <div className="como-funciona">
      <div>
        <h2>Como Funciona</h2>
        <br/>
        <p>O método Pomodoro é simples e dura duas horas. Primeiro, você realiza uma atividade durante 25 minutos. Quando acabar o tempo, descansa 5 minutos. Assim sucessivamente até que complete as duas horas. Como recompensa, você descansa mais 30 minutos.</p>

        <p>Ao final use o descanso de 15 minutos como bônus.</p>
      </div>

      <div className="como-funciona-content">

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" fill="red" />
          </svg>
          <span style={{color: "red"}}>25 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" strokeWidth="2" stroke="green" fill="transparent" />
          </svg>
          <span style={{color: "green"}}>5 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" fill="red" />
          </svg>
          <span style={{color: "red"}}>25 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" strokeWidth="2" stroke="green" fill="transparent" />
          </svg>
          <span style={{color: "green"}}>5 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" fill="red" />
          </svg>
          <span style={{color: "red"}}>25 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" strokeWidth="2" stroke="green" fill="transparent" />
          </svg>
          <span style={{color: "green"}}>5 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" fill="red" />
          </svg>
          <span style={{color: "red"}}>25 min</span>
        </div>

        <div>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="50%" fill="green" />
          </svg>
          <span style={{color: "green"}}>15 min</span>
        </div>


        
      </div>


    <span  className="e110_124">Totalizando duas horas de estudo rumo ao sucesso!!</span>
    </div>
  );
}
export default ComoFunciona;