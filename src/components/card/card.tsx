import React from 'react';
import './card.css'

type Props = {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<Props> = ({ children, className = "" }:Props) => {
  return (
    <div className={["card", className].join(' ')}>{children}</div>
  );
}
export default Card;