import React, { ReactNode } from 'react'

/* style */
import * as S from './style'

type PropsMain = {
  children: ReactNode
}

const Main: React.FC<PropsMain> = ({ children }): React.ReactElement => {
  return <S.Main>{children}</S.Main>
}

export default Main
