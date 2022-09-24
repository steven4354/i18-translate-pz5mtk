import React, { useState, useRef } from 'react'
import './style.css';

const Selector = () => {
  const arr = ['English', 'Русский']
  const [sel, setSel] = useState('')
  const ref= useRef(null)

  const select = ({target}) => {
    setSel(target.innerText)
    if(ref.current){
      ref.current.classList.remove('active')
    }
  }

  const langClick = () => {
    if(ref.current){
      ref.current.classList.add('active')
    }
  }
  return(
    <>
      <button onClick={langClick}>{sel}</button>
    <div ref={ref} className={'usual'}>
      {arr.map(i => (
        <li onClick={select}>{i}</li>
      ))}
    </div>
    </>
  )
}

export default Selector