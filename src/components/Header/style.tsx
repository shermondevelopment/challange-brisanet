import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px 15px 25px 15px;

  @media only screen and (max-width: 415px) {
    & .man-head {
      display: none;
    }
  }
`
export const HeaderFigure = styled.img``

export const Content = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderMenu = styled.nav`
  background: var(--first-color);

  & ul {
    display: flex;
  }
  & ul > li {
    margin-right: 30px;
    list-style: none;
  }
  & a {
    text-decoration: none;
    transition: border 0.3s ease-in-out;
    border-bottom: 2px solid;
    border-color: transparent;
    font-size: 18px;
  }

  &.mobile {
    display: flex;
  }

  & a.active {
    border-bottom: 2px solid;
    border-color: #fff;
  }

  & a:hover {
    border-bottom: 2px solid;
    border-color: #fff;
  }

  @media only screen and (max-width: 415px) {
    & {
      display: none;
      position: absolute;
      inset: 0;
      z-index: 10;
    }
    & ul {
      flex-direction: column;
      width: 100%;
      padding: 30px;
      margin-top: 40px;
    }
    & ul > li {
      margin-bottom: 20px;
    }
    & a {
      font-size: 32px;
    }
  }
`
export const HeaderMenuBurguer = styled.div`
  width: 100%;
  max-width: 25px;
  height: 25px;
  display: none;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    background: #fff;
    border-radius: 8px;
  }
  &:before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    background: #fff;
    border-radius: 8px;
  }

  @media only screen and (max-width: 415px) {
    & {
      display: flex;
    }
  }
`
export const BurguerLine = styled.div`
  width: 100%;
  height: 3px;
  background: #fff;
  border-radius: 8px;
`
export const HeaderMenuClosed = styled.div`
  display: none;
  position: absolute;

  @media only screen and (max-width: 415px) {
    & {
      display: block;
      top: 40px;
      right: 40px;
    }
  }
`
