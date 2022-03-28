import React from 'react'
import {Data} from './ExecutivesData'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    .firstAnimate{
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        background-color: #010214a6;
    }
    .none{
        display: block;
    }
`
const Card = styled.div`
    position: relative;
    border-radius: 5px;
    max-width: 100%;
    height: 80vh;
    transition: all .5s linear;
    img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
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
            font-family: 'Concert One', cursive;
            letter-spacing: 5px;
            font-size: 1.8vw;
            text-align: center;
        }
        h2{
            font-family: 'Concert One', cursive;
            letter-spacing: 5px;
            font-size: 1.3vw;
            text-align: center;
        }
        p{
            font-family: 'PT Sans', sans-serif;
            font-size: 1.4vw;
        }
    }
`


function Executives() {

  return (
    <Container>
        {
            Data.map((d)=>(
                
            <>
                    <Card key={d.id}>
                        <img src={d.img} alt={d.name}/>
                        <div className='Text'>
                            <h1>{d.name}</h1>
                            <p>{d.title}</p>
                            <h2>{d.rank}</h2>
                        </div>
                    </Card>

            </>
        ))}
    </Container>
  )
}


export default Executives