import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 15px 20px 15px;

  @media only screen and (max-width: 380px) {
    & .man-head {
      display: none;
    }
  }
`
export const HeaderFigure = styled.img``

export const Content = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderMenu = styled.nav`
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
  }

  & a.active {
    border-bottom: 2px solid;
    border-color: #fff;
  }

  & a:hover {
    border-bottom: 2px solid;
    border-width: 30%;
    border-color: #fff;
  }

  @media only screen and (max-width: 380px) {
    & {
      display: none;
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

  @media only screen and (max-width: 380px) {
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
