import React from 'react'
import styled from 'styled-components'

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

`
const Logo = styled.div`
    height: 10vh;
    width: 10%;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Mid = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`
const Links = styled.a`
    font-size: 1.2vw;
    font-weight: 500;
    /* color: #3f3d56; */
`
const Right = styled.div`
    width: 20%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
`

function Nav({switchTheme}) {
  return (
    <Navigation>
        <Logo>
            <img src="/ePaygoo_Logo.png" alt="" />
        </Logo>

        <Mid>
            <Links>Mobile App</Links>
            <Links>Features</Links>
            <Links>About Us</Links>
            <Links>Payment</Links>
            <Links>Faq</Links>
        </Mid>


        <Right>
            <Btn>Sign in</Btn>
        </Right>

        <button onClick={switchTheme}>switch</button>
        
    </Navigation>
  )
}

export default Nav