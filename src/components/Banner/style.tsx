import styled from 'styled-components'

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 15px 0px 15px;
  margin-top: 30px;
`

export const BannerGroupTitle = styled.div`
  display: flex;
  justify-content: center;
  align-self: baseline;
`

export const BannerTitle = styled.h1`
  font-size: 50px;
  width: 440px;
  align-self: flex-start;

  @media only screen and (max-width: 415px) {
    & {
      width: 100%;
    }
  }
`
export const BannerArea = styled.div`
  @media only screen and (max-width: 415px) {
    & {
      display: none;
    }
  }
`

export const BannerInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const BannerInfoContent = styled.div`
  margin-top: 50px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 415px) {
    & {
      height: 300px;
    }
  }
`

export const Figure = styled.img`
  margin-top: 30px;
`
