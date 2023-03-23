import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 15px 0px 15px;
`
export const MainTitle = styled.h1`
  font-size: 50px;
  width: 440px;
  align-self: flex-start;

  @media only screen and (max-width: 380px) {
    & {
      width: 100%;
    }
  }
`
export const MainBanner = styled.div`
  @media only screen and (max-width: 380px) {
    & {
      display: none;
    }
  }
`

export const MainInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const MainInfoContent = styled.div`
  margin-top: 50px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 380px) {
    & {
      height: 300px;
    }
  }
`

export const Figure = styled.img`
  margin-top: 30px;
`
