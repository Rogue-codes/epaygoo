import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    @media (max-width:480px) {
        flex-direction: column;
        gap: 5%;
        height: auto;
        align-items: flex-start;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
`
const Cards = styled.div`
    @media (max-width:480px) {
      width: 90%;
      margin: auto;
      margin-top: 14%;
    }
    width: 30%;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, grey 0px 12px 13px, grey 0px -3px 5px;
`
const Top = styled.div`
  width: 100%;
  height: 50%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Bottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  gap: 4%;
`
const Heading = styled.h2`
  @media (max-width:480px) {
      font-size: 1.2rem;
  }
  font-family: 'Concert One', cursive;
  font-size: 2vw;
  text-transform: uppercase;
`

const Desc = styled.p`
  @media (max-width:480px) {
      font-size: 1rem;
  }
  text-align: center;
  font-size: 1.6vw;
  font-family: 'PT Sans', sans-serif;
`

const Btn = styled.button`
    @media (max-width:480px) {
        font-size: 1rem;
    }
    margin-top: 2%;
    background: #d7286b;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 2% 5%;
    font-size: 1.2vw;
    transition: all .3s linear;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    &:hover{
        margin-top:5px;
    }
`

function SecondSection({dark}) {
  return (
    <Section>
        <Cards bg={dark ? '#3f3d56' : '#fff'}> 
          <Top>
            <img src="group_84 (2).png" alt="" />
          </Top>
          <Bottom>
            <Heading>No Queueing</Heading>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quasi accusantium maiores quas voluptas debitis?</Desc>
            <Btn>Learn more</Btn>
          </Bottom>
        </Cards>
        <Cards bg={dark ? '#3f3d56' : '#fff'}>
        <Top>
            <img src="group_85 (2).png" alt="" />
          </Top>
          <Bottom>
            <Heading>Cashless System</Heading>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quasi accusantium maiores quas voluptas debitis?</Desc>
            <Btn>Learn more</Btn>
          </Bottom>
        </Cards>

        <Cards bg={dark ? '#3f3d56' : '#fff'}>
        <Top>
            <img src="group_86 (2).png" alt="" />
          </Top>
          <Bottom>
            <Heading>Services</Heading>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quasi accusantium maiores quas voluptas debitis?</Desc>
            <Btn>Learn more</Btn>
          </Bottom>
        </Cards>
    </Section>
  )
}

export default SecondSection