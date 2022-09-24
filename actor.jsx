import React from 'react'
import styled from 'styled-components'

import colors from './utils/colors'
import { Image, Typography } from './baseComponents'

const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  padding: 1px;
`
const Actor = (props) => {
  const { name, character, profile_path } = props
  return(
    <Wrapper>
      <Image src={profile_path}/>
      <Typography bold size={'1em'}>{name}</Typography>
      <Typography bold size={'0.7em'}>{character}</Typography>
    </Wrapper>
  )
}

export default Actor