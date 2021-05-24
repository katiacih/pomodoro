import React from 'react';
import './text-area.css';

type Props = {
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const TextArea: React.FC<Props> = ({value, onChange}: Props) => {
  return (
    <div className="inputContent">
      <input value={value} onChange={ evt => onChange(evt)}/>
    </div>
  );
}
export default TextArea;