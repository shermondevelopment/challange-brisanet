import React, { useState } from 'react'

/* link */
import { Link, useLocation } from 'react-router-dom'

/* icons */
import { CgClose } from 'react-icons/cg'

/* styled */
import * as S from './style'

const Header = () => {
  const path = useLocation()

  console.log(path)

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
              <Link to="/" className={`${path.pathname === '/' && 'active'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/commics"
                className={`${path.pathname == '/commics' && 'active'}`}
              >
                COMMICS
              </Link>
            </li>
            <li>
              <Link
                to="/maps"
                className={`${path.pathname == '/maps' && 'active'}`}
              >
                MAPA
              </Link>
            </li>
            <li>
              <Link to="/about">SOBRE</Link>
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
