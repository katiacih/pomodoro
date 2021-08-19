import React from 'react';
import './text-field.css';

type Props = {
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  msgError?: string
}

const TextField: React.FC<Props> = ({value, onChange, msgError = ''}: Props) => {
  return (
    <div className="inputContent">
      <input value={value} onChange={ evt => onChange(evt)}/>
      {
        msgError && <span>{msgError}</span>
      }
      
    </div>
  );
}
export default TextField;