import React from 'react'
import styled from 'styled-components'
import { theme } from '../../lib/theme'
import Button from '../Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 480px;
  background: ${theme.background.main};
  width: 100%;
`

const Tribe = styled.p`
  font-size: 4rem;
  color: #fff;
  font-weight: 100;
  letter-spacing: 15px;
  margin: 85px 0 65px 0;
`

const Subline = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 100;
  letter-spacing: 5px;
  margin: 0;
`

const Bracket = styled.span`
  font-size: 2.2rem;
`

Button.Container = styled.div`
  width: 200px;
  margin: 50px 0 0 0;
`

export default () => (
  <Wrapper>
    <Tribe>TRIBE</Tribe>
    <Subline><Bracket>[</Bracket> COMMUNITY BUILT PRIVACY CRYPTOR FOR MASS ADOPTION <Bracket>]</Bracket></Subline>
    <Button.Container>
      <Button>GET TRIBE WALLET</Button>
    </Button.Container>
  </Wrapper>
)