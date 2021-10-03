import React from 'react';
import './icon-button.css'
 
type Props = {
  icon: React.ReactNode
  onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>


const IconButton: React.FC<Props> = ({icon, onClick}: Props) => {
  return (
    <button className="iconButton" onClick={onClick} >{icon}</button>
  );
}
export default IconButton;