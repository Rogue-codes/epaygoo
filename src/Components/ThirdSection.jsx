import React from 'react'
import styled from 'styled-components'
import Ityped from './Ityped'

const Third = styled.div`
    width: 100%;
    height: 80vh;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrap = styled.div`
    width: 100%;
    height: 80%;
    background: #d7286b;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    width: 50%;
    height: 80%;
    /* border: 1px solid #000; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw;
    color: white;
    font-family: 'Concert One', cursive;
`
const Right = styled.div`
    width: 50%;
    height: 80%;
    /* border: 1px solid #fff; */
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

function ThirdSection() {
  return (
    <Third>

        <Wrap>
            <Left>
                <Ityped/>
            </Left>

            <Right>
                <img src="https://www.pikpng.com/pngl/b/209-2093911_final-product-with-all-countries-clipped-to-the.png" alt="" />
            </Right>

        </Wrap>
        
    </Third>
  )
}

export default ThirdSection