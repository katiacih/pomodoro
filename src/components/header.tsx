import React from 'react';
import './header.css';

type Props = {
  actions: React.ReactNode
}
 
const Header: React.FC<Props> = ({ actions }: Props) => {
  return (
    <div className="headerContent">
      <h5 className="subtitle">Use a técnica pomodoro para estudar de forma eficiente.</h5>
      <div className="headerActions">
        {actions}
      </div>
      </div>
  );
}
export default Header;