import React, { useContext } from 'react'

/* link */
import { Link } from 'react-router-dom'

/* icon */
import { CgClose } from 'react-icons/cg'

/* style */
import * as S from './style'

/* context */
import { ModalContext } from '../../context/ModalContext'
import { CommicContext } from '../../context/Commic'

const Modal: React.FC = (): React.ReactElement => {
  const { opened, setOpenedModal } = useContext(ModalContext)
  const { commic } = useContext(CommicContext)

  return (
    <S.Modal opened={opened}>
      <S.CloseAreaAction onClick={() => setOpenedModal(false)}>
        <CgClose size={22} />
      </S.CloseAreaAction>
      <S.ShowCardSelect>
        <S.ShowCardAreaFigure>
          <S.ShowCardFigure src={commic.image} />
        </S.ShowCardAreaFigure>
        <S.ShowCardAreaDesc>
          <S.ShowCardTitle>{commic.title}</S.ShowCardTitle>
          <S.ShowCardDescription>
            {commic.description?.substring(0, 195)}
          </S.ShowCardDescription>
          <S.ShowCardInfo>
            <S.ShowCardDetails>
              <span>Publicado</span>
              <span>{commic.date}</span>
            </S.ShowCardDetails>
            <S.ShowCardDetails>
              <span>Preço</span>
              <span>{commic.price}</span>
            </S.ShowCardDetails>
          </S.ShowCardInfo>
          <Link to="/maps" onClick={() => setOpenedModal(false)}>
            <S.ShowCardButton>Enviar Heroi</S.ShowCardButton>
          </Link>
        </S.ShowCardAreaDesc>
      </S.ShowCardSelect>
    </S.Modal>
  )
}

export default Modal
