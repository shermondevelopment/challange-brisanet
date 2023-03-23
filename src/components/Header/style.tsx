import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 10px 20px 10px;
`
export const HeaderLogo = styled.img``

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
  }
  & a:hover {
    color: #c30414;
  }
`
