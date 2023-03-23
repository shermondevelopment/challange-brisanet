import React from 'react'

/* style */
import * as S from './style'

interface PropCardsCommics {
  img: string
}

const CardCommics: React.FC<PropCardsCommics> = ({
  img
}): React.ReactElement => {
  return (
    <S.CardSection>
      <S.AreaFigure>
        <S.FigureMask>Hulk 2023</S.FigureMask>
        <S.CardFigure src={img} />
      </S.AreaFigure>
      <S.CardButton>VISUALIZAR</S.CardButton>
    </S.CardSection>
  )
}

export default CardCommics
