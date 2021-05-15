import React from 'react';
import './toggle.css';

type Props = {
  value: boolean
  disabled?: boolean
  onChange: (value: boolean) => void

}

const Toggle: React.FC<Props> = ({ value, disabled = false, onChange}: Props) => {
  return (
    <input
      onClick={() => onChange(!value)}
      disabled={disabled}
      type="checkbox"
      name="checkbox"
      className="switch" />
  );
}
export default Toggle;

// https://codepen.io/ahmadbassamemran/pen/yLBXBmy