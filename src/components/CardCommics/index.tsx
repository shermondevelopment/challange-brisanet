import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

/* style */
import * as S from './style'

interface PropCardsCommics {
  img: string
}

const CardCommics: React.FC<PropCardsCommics> = ({
  img
}): React.ReactElement => {
  const { setOpenedModal } = useContext(ModalContext)

  return (
    <S.CardSection>
      <S.AreaFigure>
        <S.FigureMask>Hulk 2023</S.FigureMask>
        <S.CardFigure src={img} />
      </S.AreaFigure>
      <S.CardButton onClick={() => setOpenedModal(true)}>
        VISUALIZAR
      </S.CardButton>
    </S.CardSection>
  )
}

export default CardCommics
