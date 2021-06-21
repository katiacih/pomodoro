import React from 'react';
import './checkbox.css'
 
type Props = {
  identificador: number
  checked: boolean
  onChange: (value: boolean, identificador: number) => void
}

const Checkbox: React.FC<Props> = ({ checked, identificador, onChange }: Props) => {
  const onChangeCheckbox = (): void => {
    console.log('this is checked')
    onChange(!checked, identificador)
  }
  return (
    <label className="container">
      <input onChange={() => onChangeCheckbox()}
        type="checkbox"
        checked={checked} />
      <span className="checkmark"></span>

    </label>
  );
}
export default Checkbox;