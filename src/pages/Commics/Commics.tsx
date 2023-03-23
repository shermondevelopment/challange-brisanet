import React from 'react'

import * as S from './style'

/* style */
import { Content } from '../../components/Header/style'

/* components */
import Header from '../../components/Header'
import Main from '../../components/Main'
import InputSearch from '../../components/InputSearch'

const Commics: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <Content>
          <S.InputArea>
            <InputSearch />
          </S.InputArea>
        </Content>
      </Main>
    </>
  )
}

export default Commics
