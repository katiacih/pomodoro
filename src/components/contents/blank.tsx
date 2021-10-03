import React from 'react';
import './blank.css';

const Blank: React.FC = () => {
  return (
    <div className="contentBlank">
      <p>Digite uma tarefa para fazer </p>
      <p>e clique em <strong>Adicionar Tarefa</strong></p>
    </div>
  );
}
export default Blank;