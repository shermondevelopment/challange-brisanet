import React from 'react'

/* icons */
import { BiSearch } from 'react-icons/bi'

/* styles */
import * as S from './style'

type PropInputSearch = {
  commicSearch: string
  setCommicSearch: React.Dispatch<React.SetStateAction<string>>
}

const InputSearch: React.FC<PropInputSearch> = ({
  commicSearch,
  setCommicSearch
}): React.ReactElement => {
  return (
    <S.InputContainer>
      <S.InputIcon>
        <BiSearch
          size={22}
          style={{ background: 'transparent' }}
          fill="#d61511"
        />
      </S.InputIcon>
      <S.InputSearch
        placeholder="Buscar commics...."
        value={commicSearch}
        onChange={(e) => setCommicSearch(e.currentTarget.value)}
      />
    </S.InputContainer>
  )
}

export default InputSearch
