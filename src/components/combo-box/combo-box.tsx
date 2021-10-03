import React, { useEffect, useState } from 'react'
import './combo-box.css'

type Option = {
  value: string
  label: string
}

type Props = {
  /** valueSelect: valor selecionado sendo 0 default e valor nao informado */
  valueSelected?: string
  options: Option[]
  onChangeOption?: (optionLabel: string, optionValue: string) => void
  className?: string
}

export const ComboBox: React.FC<Props> = ({valueSelected = '0', options, onChangeOption, className}: Props) => {
  const [state, setState] = useState(valueSelected)

  const setStateByValue = (value: string): Option => {
    const listOptions = options.filter(op => op.value === value)
    let op:Option
    if(listOptions.length === 0) op = { label: '', value: '0'}
    else {
      op = listOptions[0]
    }
    setState(op.value)
    return op
  }


  const onChangeSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const op: Option = setStateByValue(evt.target.value)
    if(onChangeOption) onChangeOption(op.label, op.value)
  }

  useEffect(() => {
    if(valueSelected !== '0') {
      const listOptions = options.filter(op => op.value === valueSelected)
      let op:Option
      if(listOptions.length === 0) op = { label: '', value: '0'}
      else {
        op = listOptions[0]
      }
      setState(op.value)
    }
  },[options, valueSelected])

  return (
    <div className={["select", className].join(' ')}>
      <select onChange={onChangeSelect} value={state}>
        <option value="0">Selecione o periodo:</option>
        {options.map((op, index) => (
          <option key={index} value={op.value}>{op.label}</option>
        ))}
      </select>
      <div  className="select_arrow"></div>
    </div>
  )
}