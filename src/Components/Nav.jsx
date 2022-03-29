import React, { useState } from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'

const Navigation = styled.nav`
    width: 100%;
    padding: 2%;
    height: 14vh;
    background: transparent;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    .dark{
        border: none;
        border-radius: 50%;
        padding: 1%; 
        cursor:pointer;
    }
    a{
        font-size: 1.2vw;
        color: ${props => props.cl};
        font-weight: 500;
        text-decoration: none;
        transition: all .5s linear;
        &:hover{
            color:#d7286b;
        }

    }
    button{
        @media (max-width:480px) {
            margin-left: 65%;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
        }
        .ico{
            @media (max-width:480px) {
            font-size: 1.2rem;
        }
            font-size: 1.5vw;
        }
    }
    .bars{
        display: none;
        @media (max-width:480px) {
            display: block;
            font-size: 2rem;
            padding-right: 5%;
        }
    }
    .firstAnimate{
        @media (max-width:480px) {
        display: block;
        }
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        background-color: #010214a6;
    }
    .animate{
        @media (max-width:480px) {
            display: block;
        }
        display: none;
        width: 80%;
        box-shadow: 2px 2px 4px rgb(0, 0, 14);
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 70;
        background-color: #d7286b;
        .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        height: 10vh;
        }
        a{
        display: block;
        height: 15vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 2% 5%;
        font-size: 1rem;
        color: white;
        border-bottom: 1px solid rgb(0, 0, 14);
        text-decoration: none;
        }
    }
`
const Logo = styled.div`
    @media (max-width:480px) {
        height: 15vh;
        width: 15%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    height: 10vh;
    width: 10%;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Mid = styled.div`
    a{
        color: ${ props => props.cl};
    }
    @media (max-width:480px) {
        display: none;
    }
    width: 40%;
    display: flex;
    justify-content: space-between;
`
const Right = styled.div`
    @media (max-width:480px) {
        display: none;
    }
    width: 20%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        color: white;
    }
`
const Btn = styled.button`
    width: 80%;
    height: 100%;
    background: #d7286b;
    color: white;
    font-size: 1.3vw;
    border: none;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
    &:hover{
        background: transparent;
        color: #d7286b;
        border: 2px solid #d7286b;
        a{
            color: #d7286b ;
        }
    }

`

function Nav({switchTheme, dark}) {   
    
    const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)"},
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        reverse: showMenu,
        delay: 200,
         // config: config.molasses,
        // onRest: () => set(!show),
      })
  return (
    <Navigation>
        <Logo>
           <Link to='/'><img src="/ePaygoo_Logo.png" alt="" /></Link> 
        </Logo>

        <Mid cl={dark ? '#ffff' : '#3f3d56'}>
            <Link to='/mobile'>Mobile App</Link>
            <Link to='/features'>Features</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/payment'>Payment</Link>
            <Link to='/faq'>Faq</Link>
        </Mid>


        <Right>
            <Btn><Link to='/form'>Sign in</Link></Btn>
        </Right>

        <button onClick={switchTheme} className='dark'><FontAwesomeIcon className='ico' icon={faMoon}></FontAwesomeIcon></button>

        <span onClick ={ () => setShowMenu(!showMenu) }><FontAwesomeIcon className='bars' icon={faBars}></FontAwesomeIcon></span>

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
                <Link to='/' onClick={()=>setShowMenu(false)}>ePayGoo</Link>
                <Link to='/mobile' onClick={()=>setShowMenu(false)}>Mobile App</Link>
                <Link to='/features' onClick={()=>setShowMenu(false)}>Features</Link>
                <Link to='/about' onClick={()=>setShowMenu(false)}>About Us</Link>
                <Link to='/payment' onClick={()=>setShowMenu(false)}>Payment</Link>
                <Link to='/faq' onClick={()=>setShowMenu(false)}>Faq</Link>
            </animated.div>
            )
        }
        
    </Navigation>
  )
}

export default Nav