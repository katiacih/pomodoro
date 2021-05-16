import React from 'react';
import './card.css'

type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }:Props) => {
  return (
    <div className='card'>{children}</div>
  );
}
export default Card;