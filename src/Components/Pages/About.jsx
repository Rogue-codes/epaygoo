import React from 'react'
import styled from 'styled-components'
import Executives from './Executives'


const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FirstSection = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .circle{
      height: 30px;
      width: 30px;
      border-radius: 50%;
      position: absolute;
      animation: linear infinite;
      animation-name: run;
      animation-duration: 10s;
    }
    @keyframes run {
      0%{
        left: 0;
        top: 0;
        background: #d7286b;
      }
      25%{
        left: 100%;
        top: 90%;
        background: rgb(0, 0, 14);
      }
      50%{
        top: 90%;
        left: 0;
        background: #d7286b;
      }
      75%{
        bottom: 0;
        left: 100%;
        background: rgb(0, 0, 14);
      }
      100%{
        top: 0;
        left: 0;
        background: #d7286b;
      }
    }
`

const Text = styled.h1`
  @media (max-width:450px) {
    font-size: 3rem;
    width: 100%;
    margin-top: -13%;
    line-height: 60px;
    margin-bottom: 9%;
  }
  font-size: 5vw;
  width: 60%;
  text-align: center;
  font-family: 'Concert One', cursive;
`
const SmallText = styled.h1`
  @media (max-width:450px) {
    font-size: 1.2rem;
    width: 100%;
    line-height: 40px;
  }
  font-size: 2vw;
  width: 60%;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  margin-top: 2%;
`
const Section = styled.div`
  @media (max-width:450px) {
    flex-direction: column;
    height: auto;
  }
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 2%;
    gap: 4%;
    justify-content: center;
    align-items: center;
`
const Left = styled.div`
  @media (max-width:450px) {
    width: 100%;
    height: 50vh;
    background-size: cover;
    margin-bottom: 5%;
  }
  width: 50%;
  background: url('https://static.toiimg.com/thumb/74632167.cms?resizemode=75&width=1200&height=900');
  border-radius: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 80%;
`
const Right = styled.div`
  @media (max-width:450px) {
    width: 100%;
  }
  width: 50%;
  height: 100%;
`
const StoryHead = styled.h1`
  @media (max-width:450px) {
    font-size: 1.5rem;
    line-height: 45px;
    padding-left: 2%;
  }
  font-size: 2vw;
  font-family: 'Concert One', cursive;
  margin-top: 2%;
`
const Story = styled.p`
  @media (max-width:450px) {
    font-size: 1.2rem;
  }
  font-size: 1.5vw;
  line-height: 35px;
  padding-left: 2%;
  text-align: left;
  font-family: 'PT Sans', sans-serif;
  margin-top: 2%;
`
const MissionVision = styled.div`
  @media (max-width:450px) {
    flex-direction: column;
    height: auto;
  }
  padding: 5%;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Mission = styled.div`
  @media (max-width:450px) {
    width: 100%;
    margin-bottom: 5%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3%;
  text-align: center;
  width: 50%;
  height: 100%;
  h1{
    font-family: 'Concert One', cursive;
    margin-bottom: 5%;
  }
  p{
    font-family: 'PT Sans', sans-serif;
  }
`
const Vision = styled.div`
  @media (max-width:450px) {
    width: 100%;
    margin-bottom: 5%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3%;
  width: 50%;
  height: 100%;
  h1{
    font-family: 'Concert One', cursive;
    margin-bottom: 5%;
  }
  p{
    font-family: 'PT Sans', sans-serif;
  }
`
const Meet = styled.h1`
  @media (max-width:450px) {
    font-size: 2rem;
    text-align: center;
    line-height: 40px;
  }
  font-size: 4vw;
  font-family: 'Concert One', cursive;
  margin-top: 5%;
  margin-bottom: 5%;
`

function About() {
  return (
    <Container>
      <FirstSection>
        <Text>Transforming The Face of Transportation</Text>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <SmallText>ePaygoo is aimed at revolutionizing and providing faster transactions in the transportation industry.</SmallText>
      </FirstSection>
      <Section>
        <Left></Left>
        <Right>
          <StoryHead>
            A growth engine for modern Transportation
          </StoryHead>
          <Story>
            ePaygoo was founded in 2019 aimed at revolutionizing and providing faster transactions in the
            transportation industry. <br /><br /> ePaygoo presents the cashless payment system for Transportation 4.0
            assessing the new technologies in the fourth industrial revolution (4IR). We came together as a team
            to create a more flexible, sustainable and smarter system for the transportation of people. <br /><br /> It
            provides solutions to the over-bearing and polarised mobility issues with the use of sleek and
            affordable technologies. ePaygoo employs unique business strategies and technologies to provide
            cost-effective solutions, gain insights through data analytics and durable services to its partners and
            customers.
          </Story>
        </Right>
      </Section>
      <MissionVision>
        <Mission>
          <h1>MISSION</h1>
          <p>To revolutionize and provide sustainable and quicker transactions in the transportation industry.</p>
        </Mission>
        <Vision>
          <h1>VISION</h1>
          <p>Fare made easy and SMART</p>
        </Vision>
      </MissionVision>
      <Meet>Meet the Mind behind ePayGoo</Meet>
      <Executives/>
    </Container>
  )
}

export default About