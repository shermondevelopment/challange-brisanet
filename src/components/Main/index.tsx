import React from 'react'
import Button from '../Button'

/* icons */
import { HiArrowSmRight } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'

/* style of header */
import { Content } from '../Header/style'

/* style */
import * as S from './style'

const Main: React.FC = (): React.ReactElement => {
  return (
    <S.Main>
      <Content>
        <S.MainInfo>
          <S.MainInfoContent>
            <S.MainTitle>
              CHAME SE HEROI FAVORITO PARA SEU ENDEREÇO.
            </S.MainTitle>
            <Button type="submit">
              Solicitar Heroi
              <HiArrowSmRight size={25} style={{ background: 'transparent' }} />
            </Button>
          </S.MainInfoContent>
        </S.MainInfo>
        <S.MainBanner>
          <S.Figure src="hulk.svg" width={280} />
        </S.MainBanner>
      </Content>
    </S.Main>
  )
}

export default Main
