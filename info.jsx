import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background-blend-mode: multiply;
  background-image: url(${props => props.url});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(155,120,111, 1);
  height: 250px;
  width: auto;
`

const Hero = ( props ) => {
  const { backDrop, children } = props
  return(
    <Wrapper url={`https://image.tmdb.org/t/p/original/${backDrop}`}>
        { children }
    </Wrapper>
  )
}///xlvoOZr4s1PygosrwZyolIFe5xs.png

export default Hero