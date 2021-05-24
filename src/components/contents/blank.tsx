import React from 'react';
import { BiConfused } from 'react-icons/bi'
import './blank.css';

const Blank: React.FC = () => {
  return (
    <div className="contentBlank">
      <BiConfused />
      <p>Sem dados</p>
    </div>
  );
}
export default Blank;