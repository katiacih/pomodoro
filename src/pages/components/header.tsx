import React from 'react';
import ToggleCustom from '../../components/buttons/toggle-custom'
import './header.css';

type Props = {
  title: string
  subtitle: string
  actions: React.ReactNode
  valueToggle: boolean
  onChangeToggle: (value: boolean) => void 
}
 
const Header: React.FC<Props> = ({ title, subtitle, actions, valueToggle, onChangeToggle }: Props) => {
  return (
    <>
     <div className="actionThemeContent">
        <h2 className="titlePomodoro">{title}</h2>
        <ToggleCustom
          value={valueToggle} 
          onChange={onChangeToggle}
        />
      </div>
      <div className="headerContent">
        <p className="subtitle">{subtitle}</p>
        <div className="headerActions">
          {actions}
        </div>
      </div>
    </>

  );
}
export default Header;