import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 15px 30px;
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: transparent;
  transition: background 0.3s linear;

  &:hover,
  &:hover svg {
    background: #fff;
    color: var(--first-color);
    fill: var(--first-color);
  }
`
