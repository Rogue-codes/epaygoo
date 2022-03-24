import { useState } from 'react';
import styled from 'styled-components';
import FifthSection from './Components/FifthSection';
import FirstSection from './Components/FirstSection';
import Footer from './Components/Footer';
import FourthSection from './Components/FourthSection';
import Nav from './Components/Nav';
import SecondSection from './Components/SecondSection';
import SixthSection from './Components/SixthSection';
import ThirdSection from './Components/ThirdSection';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Container = styled.body`
  background: ${props => props.bg};
  color: ${props => props.cl};
  transition: all .5s linear;
  position: relative;
  .ico{
      @media (max-width:480px) {
        font-size: 1.2rem;
      }
    font-weight: 2vw;
  }
`
const BT = styled.button`
  @media (max-width:480px) {
    left: 80%;
  }
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

function App() {
  const [dark, setdark] = useState(false)

  const [scroll, setScroll] = useState(false)

  const switchTheme = () => {
    setdark(!dark)
    if(dark){
      console.log('first')
    }
  }

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 700){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })


  return (
    <Container className="App" bg={dark ? 'rgb(0, 0, 14)' : '#fff'} cl={dark ? '#ffff' : '#3f3d56'}>
      <Nav id='top' switchTheme ={switchTheme}/>
      <FirstSection/>
      <a href="#top">
        <BT opa={scroll ? '1' : '0'}><FontAwesomeIcon className='ico' icon={faArrowUp}></FontAwesomeIcon></BT>
      </a>
      <SecondSection dark={dark} />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection dark={dark}/>
      <SixthSection dark={dark}/>
      <Footer dark={dark}/> 
    </Container>
  );
}

export default App;
