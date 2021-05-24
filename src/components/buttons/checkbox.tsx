import React from 'react';
import './checkbox.css'
 
type Props = {
  checked: boolean
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<Props> = ({checked, onChange}: Props) => {
  return (
    // <label className="container">
    //   {checked}
    //   <input type='checkbox' checked={checked} />
    //   <span className="checkmark"></span>
    // </label>
    <input className='check1' type="checkbox"
      onChange={evt => onChange(evt)}
      checked={checked} />
  );
}
export default Checkbox;