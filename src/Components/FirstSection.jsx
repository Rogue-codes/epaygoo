import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @media (max-width:480px) {
        flex-direction: column;
        gap: 5%;
        height: auto;
        align-items: flex-start;
    }
    width: 100%;
    height: 86Vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
`
const Lefty = styled.div`
    @media (max-width:480px) {
        width: 100%;
    }
    width: 70%;
    height: 100%;
`

const Text = styled.h1`
    @media (max-width:480px) {
        font-size: 2rem;
        width: 100%;
        padding-left: 2%;
        margin-bottom: 9%;
        line-height: 50px;
    }
    margin-top: 10%;
    margin-bottom: 2%;
    font-size: 4.3vw;
    text-align: left;
    width: 95%;
    font-family: 'Concert One', cursive;
`

const Passage = styled.p`
    @media (max-width:480px) {
        font-size: 1.3rem;
        width: 100%;
        padding-left: 2%;
    }
    font-family: 'PT Sans', sans-serif;
    font-size:2vw;
    font-weight: 500;
    padding-left: 1%;
    text-align: left;
    width: 100%;
    margin-bottom: 2%;
`

const Right = styled.div`
    @media (max-width:480px) {
        width: 100%;
        margin-top: 10%;
    }
    width: 50%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Btn = styled.button`
    @media (max-width:480px) {
        font-size: 1.4rem;
        margin-top: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5%;
        margin-left: 2%;
        padding: 4% 8%;
    }
    margin-top: 2%;
    background: #d7286b;
    cursor: pointer;
    color: white;
    font-family: 'Concert One', cursive;
    border-radius: 5px;
    border: none;
    padding: 2% 5%;
    font-size: 1.5vw;
    transition: all .3s linear;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    &:hover{
        margin-top: 10px;
    }
`

function FirstSection() {
  return (
    <Container>
        <Lefty>
            <Text>ONLINE CARD PAYMENT SYSTEM FOR TRANSPORTATION</Text>
            <Passage>We are geared towards creating a <b>smart</b> society</Passage>
            <Btn>Get started</Btn>
        </Lefty>
        <Right>
            <img src="/group_80r.png" alt="" />
        </Right>
        
    </Container>
  )
}

export default FirstSection