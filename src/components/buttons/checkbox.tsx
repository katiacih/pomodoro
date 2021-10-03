import React from 'react';
import './checkbox.css'
 
type Props = {
  identificador: number
  name: string
  checked: boolean
  label?: string
  onChange: (value: boolean, identificador: number) => void
}

const Checkbox: React.FC<Props> = ({ checked, identificador, name, label= '', onChange }: Props) => {
  const onChangeCheckbox = (): void => {
    onChange(!checked, identificador)
  }
  return (
    <label className="container">{label}
      <input type="checkbox" onChange={onChangeCheckbox} 
        checked={checked}/>
      <span className="checkmark"></span>
    </label>
  );
}
export default Checkbox;