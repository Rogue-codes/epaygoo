import React from 'react'
import styled from 'styled-components'

const Tittle = styled.h1`
    @media (max-width:480px) {
        display: none;
    }
    font-size: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Concert One', cursive;
`
const Fourth = styled.div`
    @media (max-width:480px) {
        display: none;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    padding: 5%;
    transition: all .3s linear;
    &:hover{
        .card{
            transition: all .3s linear;
            &:nth-child(1){
                @media (max-width:480px) {
                    transform: translatey(-125%);
                }
                transform: translateX(-125%);
            }
            &:nth-child(2){
                @media (max-width:480px) {
                    transform: translatey(-5%);
                }
                transition: all .3s linear;
                transform: translateX(-5%);
            }
            &:nth-child(3){
                @media (max-width:480px) {
                    transform: translatey(125%);
                }
                transition: all .3s linear;
                transform: translateX(125%);
            }
        }
    }
    .card{
        @media (max-width:480px) {
            width: 95%;
        }
        width: 25%;
        height: 80%;
        position: absolute;
        background: #d7286b;
        transition: all .5s linear;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 2%;
        cursor: pointer;
    }  
`
const Top = styled.h2`
    font-size: 4vw;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    color: white;
`
const Btn = styled.button`
    margin-top: 25%;
    background: #3f3d56;
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
        color: #d7286b;
    }
`

function FourthSection() {
  return (
    <>
        <Tittle>GETTING STARTED</Tittle>
        <Fourth>
            <div className="card">
                <Top>REGISTER</Top>
                <Btn>Register Now</Btn>
            </div>

            <div className="card">
                <Top>GET YOUR CARD</Top>
                <Btn>Order for Your card</Btn>
            </div>

            <div className="card">
                <Top>TRAVEL</Top>
                <Btn>Explore</Btn>
            </div>
        </Fourth>
    </>
  )
}

export default FourthSection