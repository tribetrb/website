import styled from 'styled-components'
import { theme } from '../lib/theme'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, ${theme.gradient.start}, ${theme.gradient.end});
  color: #fff;
  width: 100%;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to right, ${theme.gradient.start}, ${theme.gradient.end}) 1;
  border: 0;
  border-radius: 3px;
  padding: 15px;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  &:focus,
  &:hover {
    background: linear-gradient(to right, ${theme.gradient.end}, ${theme.gradient.end});
    border-image: linear-gradient(to right, ${theme.gradient.end}, ${theme.gradient.end}) 1;
    cursor: pointer;
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    background: transparent;
  }
`

export default Button