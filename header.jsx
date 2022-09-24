import React from 'react'
import styled from 'styled-components'

import very from './svgs/very'
import unsatis from './svgs/unsatis'
import Rating from './rating'
import colors from './utils/colors'
import { Link } from './baseComponents'

const Wrapper = styled.div`
  position: realtive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.grey};
  margin: 3px;
  padding: 2px 15px 2px 15px;
`

const Title = styled.p`
  font-size: 1.6em;
  color: ${colors.yellow};
`

const YearLink = styled(Link)`
  font-size: 1.6em;
  color: ${colors.yellow};
`

const Header = (props) => {
  const { title, year } = props
  return(
    <Wrapper>
      <Title>{title}</Title>
      {year && <YearLink>({year})</YearLink>}
      <Rating {...props}/>
    </Wrapper>
  )
}

export default Header