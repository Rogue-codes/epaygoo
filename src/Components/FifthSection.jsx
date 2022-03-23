import React from 'react'
import styled from 'styled-components'

const Fifth = styled.div`
    width: 100%;
    height: auto;
    background: url(${props => props.bg});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2%;
`
const Top = styled.div`
    width: 100%;
    height: auto;
    padding: 2%;
    gap: 2%;
`
const Bottom = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
`
const Cards = styled.div`
    width: 30%;
    height: 50vh;
    padding: 1%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #d7286b;
    color: ${props => props.cl};
`
const Text = styled.h2`
    margin-top: 2%;
    font-size: 4vw;
    width: 50%;
    font-family: 'Concert One', cursive;
`
const Desc = styled.p`
    font-size: 2vw;
    width: 70%;
    margin-top: 2%;
    font-family: 'PT Sans', sans-serif;
`
const TopCard = styled.div`
    height: 20%;
    img{
        height: 100%;
        width: 20%;
        object-fit: contain;
    }
`
const MidCard = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BottomCard = styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    gap: 4%;
`
const Comment = styled.p`
    font-size: 1.7vw;
    line-height: 30px;
    font-family: 'PT Sans', sans-serif;
`
const Left = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;   
        object-fit: cover;
    }
`
const Right = styled.h3`
    font-size: 1vw;
    font-family: 'PT Sans', sans-serif;
`

function FifthSection({dark}) {
  return (
    <Fifth bg={dark ? 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' : 'https://img.freepik.com/free-vector/background-elegant-white-texture_23-2148438405.jpg?w=900'}>
        <Top>
            <Text>Backed by strong global partners</Text>
            <Desc>ePaygoo is backed by notable investors as well as some of the best payments companies on the planet.</Desc>
        </Top>
        <Bottom>
            <Cards cl={dark ? '#fff' : '#fff'}>
                <TopCard>
                    <img src="https://gigm.com/newmenu/img/gigm-logo.jpg" alt="" />
                </TopCard>
                <MidCard>
                    <Comment>ePaygoo is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.</Comment>
                </MidCard>
                <BottomCard>
                    <Left><img src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></Left>
                    <Right>Patrick Collison <br /> <b>CEO GIGM</b></Right>
                </BottomCard>
            </Cards>

            <Cards cl={dark ? '#fff' : '#fff'}>
            <TopCard>
                    <img src="https://nigeriannewsdirect.com/wp-content/uploads/2020/10/logobrand.jpg" alt="" />
                </TopCard>
                <MidCard>
                    <Comment>ePaygoo is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.</Comment>
                </MidCard>
                <BottomCard>
                    <Left><img src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></Left>
                    <Right>Patrick Collison <br /> <b>CEO GIGM</b></Right>
                </BottomCard>
            </Cards>

            <Cards cl={dark ? '#fff' : '#fff'}>
                <TopCard>
                    <img src="data:image/jpeg;base64,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" alt="" />
                </TopCard>
                <MidCard>
                    <Comment>ePaygoo is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.</Comment>
                </MidCard>
                <BottomCard>
                    <Left><img src="https://images.pexels.com/photos/2719416/pexels-photo-2719416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /></Left>
                    <Right>Patrick Collison <br /> <b>CEO GIGM</b></Right>
                </BottomCard>
            </Cards>
        </Bottom>
    </Fifth>
  )
}

export default FifthSection