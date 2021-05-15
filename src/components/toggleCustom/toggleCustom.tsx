import React from 'react';
import './toggleCustom.css';

type Props = {
  value: boolean
  disabled?: boolean
  onChange: (value: boolean) => void

}

const ToggleCustom: React.FC<Props> = ({ value, disabled = false, onChange}: Props) => {
  return (
    <div className="toggleContent">
      <label>Theme Dark</label>
      <input
        onClick={() => onChange(!value)}
        disabled={disabled}
        checked={value}
        type="checkbox"
        name="checkbox"
        className="toggle" />
    </div>
  );
}
export default ToggleCustom;