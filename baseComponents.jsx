import React from 'react'
import styled from 'styled-components'

export const Link = styled.a`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`

export const Typography = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.bold? 'bold' :'normal'};
`

export const Image = styled.img`
  position: relative;
  height: auto;
  width: auto;
  src: url(https://image.tmdb.org/t/p/original${props => props.src});
`


  // height: ${props => props.height};
  // width: ${props => props.width};