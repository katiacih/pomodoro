import React, { useEffect, useRef } from 'react';
import { FaCheckCircle, FaInfoCircle, FaGrin } from "react-icons/fa";
import { MdClose } from 'react-icons/md'
import { AiFillWarning, AiOutlineCloseCircle } from 'react-icons/ai'
import './alert.css'

type variantType = 'success' | 'info' | 'warning' | 'danger' | 'well'
type variantAlert = 'outline' | 'fill'

type Props = {
  // variant: Indica se a variante do alerta 
  variant: variantType
  // indica se o conteudo sera outline ou fill
  variantAlert?: variantAlert

  title: string

  description: string

  isShow: boolean
}
 
const Alert: React.FC<Props> = ({
  variant, variantAlert = 'outline', title, description, isShow }: Props) => {
  let alertRef = useRef(null)

  const setAnimacaoOpen = (): void => {
    const element = alertRef?.current as unknown as HTMLElement
    if (element !== undefined) {
      setTimeout(() => {
        element.style.top = '12px';
        element.style.display = 'flex';
      }, 2000)
    }
  }

  const closeAlert = (): void => {
    const element = alertRef?.current as unknown as HTMLElement
    if (element !== undefined) {
        element.style.top = '0px';
        element.style.display = 'none';
    }
  }

  useEffect(() => {
    setAnimacaoOpen()

  }, [])
  
  return (
    <div ref={alertRef} className={["alert", variant, variantAlert ].join(' ')}>
      <div>
        {
          variant === 'success'
            ? <FaCheckCircle className={['icon', variant].join(" ")} />
            : null
        }
        {
          variant === 'info'
          ? <FaInfoCircle className='icon' />
          : null
        }
        {
          variant === 'warning'
          ? <AiFillWarning className='icon' />
          : null
        }
        {
          variant === 'danger'
          ? <AiOutlineCloseCircle className='icon' />
          : null
        }
        {
          variant === 'well'
          ? <FaGrin className='icon' />
          : null
        }
        
        <span>
          <strong>{title}</strong>{description}
        </span>
      </div>
    <button onClick={() => closeAlert()}><MdClose/></button>
    </div>
  );
}
export default Alert;
