import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import styled from 'styled-components';

const BT = styled.button`
  @media (max-width:480px) {
    left: 80%;
  }
  cursor: pointer;
  position: fixed;
  left: 95%;
  top: 90%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all .5s linear;
  opacity: ${props => props.opa};
  border: 1px solid #333;
  background: #d7286b;
`
function Home({dark}) {
  const [scroll, setScroll] = useState(false)
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 700){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })
  return (
    <div>
    <FirstSection/>
      <a href="#top">
        <BT opa={scroll ? '1' : '0'}><FontAwesomeIcon className='ico' icon={faArrowUp}></FontAwesomeIcon></BT>
      </a>
      <SecondSection dark={dark} />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection dark={dark}/>
      <SixthSection dark={dark}/>
    </div>
  )
}

export default Home