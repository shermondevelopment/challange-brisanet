import React, { useContext } from 'react'

/* link */
import { Link } from 'react-router-dom'

/* icon */
import { CgClose } from 'react-icons/cg'

/* style */
import * as S from './style'

/* context */
import { ModalContext } from '../../context/ModalContext'

const Modal: React.FC = (): React.ReactElement => {
  const { opened, setOpenedModal } = useContext(ModalContext)

  return (
    <S.Modal opened={opened}>
      <S.CloseAreaAction onClick={() => setOpenedModal(false)}>
        <CgClose size={22} />
      </S.CloseAreaAction>
      <S.ShowCardSelect>
        <S.ShowCardAreaFigure>
          <S.ShowCardFigure src="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
        </S.ShowCardAreaFigure>
        <S.ShowCardAreaDesc>
          <S.ShowCardTitle>Homem de Ferro</S.ShowCardTitle>
          <S.ShowCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nisi
            minus iste a ipsum officiis necessitatibus quod est consectetur sed.
            Hic rem beatae labore sequi. Necessitatibus itaque laudantium
            asperiores harum?
          </S.ShowCardDescription>
          <S.ShowCardInfo>
            <S.ShowCardDetails>
              <span>Publicado</span>
              <span>10/12/1999</span>
            </S.ShowCardDetails>
            <S.ShowCardDetails>
              <span>Preço</span>
              <span>R$ 10.20</span>
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
