import React from 'react'
import styled from 'styled-components'

import svgs from './svgs/svgs'
import colors from './utils/colors'

const WrapRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const WrapCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Svg = styled.svg`
  position: relative;
  viewbox: 0 0 24 24;
  height: 24px;
  width: 24px;
  fill: ${colors.yellow}
`

const Rate = styled.p`
  font-size: 1.3em;
  color: ${colors.yellow};
`

const Small = styled.p`
  font-size: 0.7em;
  color: white;
`

const Rating = ({ rating, vote_count }) => {
  const getRate = (rating) => {
    switch (true){
      case (rating >= 7.5):{
        return {
          color: 'green',
          icon: svgs.satisfied()
        }
          break
      }
      case (rating >= 5):{
        return {
          color: 'lightgreen',
          icon: svgs.good()
        }
          break
      }
      case (rating >= 2.5):{
        return {
          color: 'orange',
          icon: svgs.dissatis()
        }
          break
      }
      default: 
        return {
          color: 'red',
          icon: svgs.bad()
        }
    }
  }
  return(
    <WrapRow>
      <Svg color={getRate(rating).color}>{getRate(rating).icon}</Svg>
      <WrapCol>
        <WrapRow>
          <Rate>{rating}</Rate>
          <Small>/10</Small>
        </WrapRow>
        <Small>based on {vote_count} reviews</Small>
      </WrapCol>
    </WrapRow>
  )
}

export default Rating