import React, { InputHTMLAttributes } from 'react'

interface PropsButton extends InputHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

/* style */
import * as S from './style'

const Button: React.FC<PropsButton> = ({
  children,
  ...props
}): React.ReactElement => {
  return <S.Button {...props}>{children}</S.Button>
}

export default Button
