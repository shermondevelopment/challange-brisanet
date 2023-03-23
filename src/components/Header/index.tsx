import React from 'react'

/* styled */
import * as S from './style'

const Header = () => {
  return (
    <S.Header>
      <S.Content>
        <S.HeaderFigure src="marvel.svg" width={100} />
        <S.HeaderMenu>
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">COMMICS</a>
            </li>
            <li>
              <a href="#">MAPS</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </S.HeaderMenu>
        <S.HeaderFigure src="man.svg" width={40} />
      </S.Content>
    </S.Header>
  )
}

export default Header
