import React from 'react'
import {Data} from './ExecutivesData'
import styled from 'styled-components'

const Container = styled.div`
  @media (max-width:450px) {
    flex-direction: column;
    height: auto;
  }
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 2%;
`
const Flex = styled.div`
    @media (max-width:450px) {
        flex-direction: column;
        height: auto;
    }
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
    padding: 2%;
`
const Card = styled.div`
    @media (max-width:450px) {
        margin-bottom: 5%;
        height: 50vh;
        width: 100%;
    }
    position: relative;
    border-radius: 5px;
    width: 50%;
    height: 80vh;
    transition: all .5s linear;
    img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        .Text{
            opacity: 1;
        }
    }
    .Text{
        border-radius: 5px;
        position: absolute;
        background: #d7286bd1;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 5%;
        justify-content: center;
        align-items: center;
        height: 100%;
        transition: all .5s linear;
        h1{
            @media (max-width:450px) {
                font-size: 1.2rem;
            }
            font-family: 'Concert One', cursive;
            letter-spacing: 5px;
            font-size: 1.8vw;
            text-align: center;
        }
        h2{
            @media (max-width:450px) {
                font-size: 1rem;
            }
            font-family: 'Concert One', cursive;
            letter-spacing: 5px;
            font-size: 1.3vw;
            text-align: center;
        }
        p{
            @media (max-width:450px) {
                font-size: 1rem;
            }
            font-family: 'PT Sans', sans-serif;
            font-size: 1.4vw;
        }
    }
`

const Abt = styled.div`
    @media (max-width:450px) {
        font-size: .8rem;
        width: 100%;
        height: auto;
    }
    width: 50%;
    height: 80vh;
    font-size: 1.6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
    line-height: 40px;
`


function Executives() {

  return (
    <Container>
        {
            Data.map((d)=>(
                
            <Flex>
                    <Card key={d.id}>
                        <img src={d.img} alt={d.name}/>
                        <div className='Text'>
                            <h1>{d.name}</h1>
                            <p>{d.title}</p>
                            <h2>{d.rank}</h2>
                        </div>
                    </Card>
                    <Abt>
                        {d.about}
                    </Abt>

            </Flex>
        ))}
    </Container>
  )
}


export default Executives