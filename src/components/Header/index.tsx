import React from 'react'

/* styled */
import * as S from './style'

const Header = () => {
  return (
    <S.Header>
      <S.Content>
        <S.HeaderLogo src="marvel.svg" width={100} />
        <S.HeaderMenu>
          <ul>
            <li>
              <a href="#">COMMICS</a>
            </li>
            <li>
              <a href="#">MAPS</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
          </ul>
        </S.HeaderMenu>
      </S.Content>
    </S.Header>
  )
}

export default Header
