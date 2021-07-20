import React from 'react';
import './blank.css';

const Blank: React.FC = () => {
  return (
    <div className="contentBlank">
      <p>Digite uma tarefa para fazer </p>
      <p>e clique em <strong>Add Task</strong></p>
    </div>
  );
}
export default Blank;