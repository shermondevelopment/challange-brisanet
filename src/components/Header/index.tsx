import React, { useState } from 'react'

/* icons */
import { CgClose } from 'react-icons/cg'

/* styled */
import * as S from './style'

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <S.Header>
      <S.Content>
        <S.HeaderFigure src="marvel.svg" width={100} />
        <S.HeaderMenu className={`${menuMobile && 'mobile'}`}>
          <S.HeaderMenuClosed onClick={() => setMenuMobile(false)}>
            <CgClose size={30} />
          </S.HeaderMenuClosed>
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
        <S.HeaderFigure src="man.svg" width={40} className="man-head" />
        <S.HeaderMenuBurguer
          onClick={() => setMenuMobile(!menuMobile)}
          className={``}
        >
          <S.BurguerLine />
        </S.HeaderMenuBurguer>
      </S.Content>
    </S.Header>
  )
}

export default Header
