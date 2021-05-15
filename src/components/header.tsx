import React from 'react';
import './header.css';

type Props = {
  actions: React.ReactNode
}
 
const Header: React.FC<Props> = ({ actions }: Props) => {
  return (
    <div className="headerContent">
        <div className="header">
          <h1>Pomodoro</h1>
          <h5>Use a técnica pomodoro para estudar de forma eficiente.</h5>
        </div>
        <div className="headerActions">
          {actions}
        </div>
      </div>
  );
}
export default Header;