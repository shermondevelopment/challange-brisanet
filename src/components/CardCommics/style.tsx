import styled from 'styled-components'

export const CardSection = styled.section`
  width: 100%;
  max-width: 160px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 25px;

  @media only screen and (max-width: 415px) {
    & {
      max-width: none;
      margin-right: 0px;
    }
  }
`
export const CardFigure = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media only screen and (max-width: 415px) {
    & {
      object-fit: cover;
    }
  }
`
export const AreaFigure = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`

export const FigureMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(214, 21, 17, 0.5);
  padding: 20px 10px;
  font-size: 22px;
`
export const CardButton = styled.button`
  width: 100px;
  padding: 10px 0;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid var(--first-color);
  background: #fff;
  color: #d61511;
  transition: background 0.3s linear;

  &:hover {
    background: var(--first-color);
    color: #fff;
  }
`
