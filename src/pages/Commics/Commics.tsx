import React from 'react'

import * as S from './style'

/* components */
import Header from '../../components/Header'
import Main from '../../components/Main'
import InputSearch from '../../components/InputSearch'
import CardCommics from '../../components/CardCommics'

const Commics: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <S.ContentMain>
          <S.InputArea>
            <InputSearch />
          </S.InputArea>
          <S.CardsCommicsArea>
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_uncanny.jpg" />
            <CardCommics img="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75/portrait_uncanny.jpg" />
          </S.CardsCommicsArea>
        </S.ContentMain>
      </Main>
    </>
  )
}

export default Commics
