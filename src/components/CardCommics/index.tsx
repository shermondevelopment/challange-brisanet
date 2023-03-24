import React, { useContext } from 'react'
import { CommicContext } from '../../context/Commic'

/* modal */
import { ModalContext } from '../../context/ModalContext'

/* style */
import * as S from './style'

interface PropCardsCommics {
  id: number
  img: string
  title: string
  price: string
  date: string
  description?: string
}

const CardCommics: React.FC<PropCardsCommics> = ({
  img,
  title,
  date,
  description,
  price,
  id
}): React.ReactElement => {
  const { setCommic } = useContext(CommicContext)

  const { setOpenedModal } = useContext(ModalContext)

  const viewCommicInModal = () => {
    setCommic({
      id,
      date,
      image: img,
      price,
      title,
      description
    })
    setOpenedModal(true)
  }

  return (
    <S.CardSection>
      <S.AreaFigure>
        <S.FigureMask>{title}</S.FigureMask>
        <S.CardFigure src={img} />
      </S.AreaFigure>
      <S.CardButton onClick={viewCommicInModal}>VISUALIZAR</S.CardButton>
    </S.CardSection>
  )
}

export default CardCommics
