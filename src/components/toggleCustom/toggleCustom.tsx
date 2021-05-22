import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs'
import './toggleCustom.css';

type Props = {
  value: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
}

const ToggleCustom: React.FC<Props> = ({ value, disabled = false, onChange}: Props) => {
  return (
    <div className="toggleContent">
      <span className="btnIcon" onClick={() => onChange(false)}><BsMoon className='moon'/></span>
      <input
        onClick={() => onChange(!value)}
        disabled={disabled}
        checked={value}
        type="checkbox"
        name="checkbox"
        className="toggle" />
      <span className="btnIcon" onClick={() => onChange(true)}><BsSun className='sun'/></span>
    </div>
  );
}
export default ToggleCustom;