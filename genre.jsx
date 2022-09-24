import React from 'react'
import styled from 'styled-components'

import colors from './utils/colors'

const Wrapper = styled.span`
  position: relative;
  margin: 3px;
  height: 20px;
  width: auto;
  padding: 4px;
  background-color: ${colors.brown};
  color: white;
  font-size: 0.8em;
  border-radius: 5px;
`

const Genre = ({genre}) => {
  return(
    <Wrapper>
      {genre} 
    </Wrapper>
  )
}

export default Genre