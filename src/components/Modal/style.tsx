import styled from 'styled-components'

export const Modal = styled.div<{ opened: boolean }>`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  inset: 0;
  display: ${(props) => (props.opened ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const ShowCardSelect = styled.div`
  width: 100%;
  max-width: 600px;
  height: 360px;
  background: #fff;
  border-radius: 10px;
  display: flex;

  @media only screen and (max-width: 415px) {
    & {
      flex-direction: column;
      height: 450px;
    }
  }
`

export const ShowCardAreaFigure = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 10px;

  @media only screen and (max-width: 415px) {
    height: 120px;
    border-top-right-radius: 10px;
  }
`

export const ShowCardAreaDesc = styled.div`
  flex: 2;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ShowCardFigure = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media only screen and (max-width: 415px) {
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }
  user-select: none;
`

export const ShowCardTitle = styled.h3`
  color: #000;
`
export const ShowCardDescription = styled.p`
  color: #000;
`
export const ShowCardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ShowCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #000;

  & span {
    color: #000;
  }
`
export const ShowCardButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid var(--first-color);
  background: #fff;
  color: #d61511;
  transition: background 0.3s linear;
  font-size: 18px;

  &:hover {
    background: var(--first-color);
    color: #fff;
  }
`
export const CloseAreaAction = styled.div`
  position: absolute;
  top: 40px;
  right: 80px;
  cursor: pointer;
`
