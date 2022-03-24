import React from 'react'
import styled from 'styled-components'

const Sixth = styled.div`
    @media (max-width:450px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    width: 100%;
    height: 70vh;
    background: ${props => props.bg};
    margin-top: 5%;
    display: flex;
    padding: 4%;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    @media (max-width:450px) {
        width: 100%;
    }
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    gap: 2%;
    flex-direction: column;
`
const Right = styled.div`
    @media (max-width:450px) {
        width: 100%;
        justify-content: flex-start;
    }
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const SmallText = styled.p`
    @media (max-width:450px) {
        font-size: 1.2rem;
    }
    font-size: 2vw;
    font-weight: 500;
    font-family: 'PT Sans', sans-serif;
`

const Text = styled.h2`
    @media (max-width:450px) {
        font-size: 2rem;
    }
    font-size: 5vw;
    font-family: 'Concert One', cursive;
    width: 90%;
`
const Btn = styled.button`
    @media (max-width:450px) {
        font-size: 1.2rem;
        margin-top: -40%;
    }
    margin-top: 2%;
    background: #d7286b;
    cursor: pointer;
    color: white;
    font-family: 'PT Sans', sans-serif;
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

function SixthSection({dark}) {
  return (
    <Sixth bg={dark ? 'rgb(0, 0, 14)' : '#f8f8ff'}>
        <Left>
            <SmallText>Try ePAYGOO Now</SmallText>
            <Text>Start Commuting with our Cards </Text>
        </Left>
        <Right>
            <Btn>Register Now</Btn>
        </Right>
    </Sixth>
  )
}

export default SixthSection