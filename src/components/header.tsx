import React from 'react';
import './header.css';

type Props = {
  actions: React.ReactNode
}
 
const Header: React.FC<Props> = ({ actions }: Props) => {
  return (
    <div className="headerContent">
      <p className="subtitle">Use a técnica pomodoro para estudar de forma eficiente.</p>
      <div className="headerActions">
        {actions}
      </div>
      </div>
  );
}
export default Header;