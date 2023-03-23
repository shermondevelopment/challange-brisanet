import React from 'react'

/* link */
import { Link } from 'react-router-dom'

/* components */
import Button from '../Button'

/* icons */
import { HiArrowSmRight } from 'react-icons/hi'

/* style of header */
import { Content } from '../Header/style'

/* style */
import * as S from './style'

const Banner: React.FC = (): React.ReactElement => {
  return (
    <S.Banner>
      <Content>
        <S.BannerGroupTitle>
          <S.BannerInfoContent>
            <S.BannerTitle>
              CHAME SE HEROI FAVORITO PARA SEU ENDEREÇO.
            </S.BannerTitle>

            <Link to="/commics">
              <Button type="submit">
                Solicitar Heroi
                <HiArrowSmRight
                  size={25}
                  style={{ background: 'transparent' }}
                />
              </Button>
            </Link>
          </S.BannerInfoContent>
        </S.BannerGroupTitle>
        <S.BannerArea>
          <S.Figure src="hulk.svg" width={340} />
        </S.BannerArea>
      </Content>
    </S.Banner>
  )
}

export default Banner
