import React from 'react';
import './icon-button.css'
 
type Props = {
  icon: React.ReactNode,
  onClick: (value: boolean, identificador: number) => void
}


const IconButton: React.FC<Props> = ({icon, onClick}: Props) => {
  return (
    <button className="iconButton" onClick={() => onClick}>{icon}</button>
  );
}
export default IconButton;