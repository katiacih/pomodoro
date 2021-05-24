import React from 'react';
import './button.css'

type Props = {
  label: string
  variant?: "default"| "outline" | "secondary"
  onClick: () => void
  isDisabled?: boolean
}

const Button: React.FC<Props> = ({label, variant="default", onClick, isDisabled=false}: Props) => {
  return (
    <button
      onClick={() => isDisabled ? null : onClick()}
      className={['button',
        isDisabled ? 'disabled'
        : variant === 'outline' ? 'btnOutline'
        : variant === 'secondary' ? 'btnSecondary': 'btnPrimary' ].join(' ')}
    >{label}</button>
  );
}
export default Button;