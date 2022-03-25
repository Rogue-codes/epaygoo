import { useState } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import MobileApp from './Components/Pages/MobileApp';
import Features from './Components/Pages/Features';
import About from './Components/Pages/About';
import Payment from './Components/Pages/Payment';
import Faq from './Components/Pages/Faq';

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


function App() {
  const [dark, setdark] = useState(false)


  const switchTheme = () => {
    setdark(!dark)
    if(dark){
      console.log('first')
    }
  }



  return (
    <Container className="App" bg={dark ? 'rgb(0, 0, 14)' : '#fff'} cl={dark ? '#ffff' : '#3f3d56'}>
      <Router>
      <Nav id='top' switchTheme ={switchTheme} dark={dark}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mobile' element={<MobileApp/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/faq' element={<Faq/>}/>
      </Routes>
      <Footer dark={dark}/> 
      </Router>
    </Container>
  );
}

export default App;
