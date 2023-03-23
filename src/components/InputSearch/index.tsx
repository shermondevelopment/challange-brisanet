import React from 'react'

/* icons */
import { BiSearch } from 'react-icons/bi'

/* styles */
import * as S from './style'

const InputSearch: React.FC = (): React.ReactElement => {
  return (
    <S.InputContainer>
      <S.InputIcon>
        <BiSearch
          size={22}
          style={{ background: 'transparent' }}
          fill="#d61511"
        />
      </S.InputIcon>
      <S.InputSearch placeholder="Buscar commics...." />
    </S.InputContainer>
  )
}

export default InputSearch
