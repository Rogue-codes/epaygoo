import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 86Vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
`
const Lefty = styled.div`
    width: 70%;
    height: 100%;
`

const Text = styled.h1`
    margin-top: 10%;
    margin-bottom: 2%;
    font-size: 4.3vw;
    text-align: left;
    width: 95%;
    font-family: 'Concert One', cursive;
`

const Passage = styled.p`
    font-family: 'PT Sans', sans-serif;
    font-size:2vw;
    font-weight: 500;
    padding-left: 1%;
    text-align: left;
    width: 100%;
    margin-bottom: 2%;
`

const Right = styled.div`
    width: 50%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Btn = styled.button`
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