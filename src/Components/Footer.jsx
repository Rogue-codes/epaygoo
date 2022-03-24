import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faBuilding, faCreditCard, faShop, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faLinkedinIn, faTwitter }  from '@fortawesome/free-brands-svg-icons'

const FooterCont = styled.footer`
    margin-top: 5%;
    width: 100%;
    height: 100vh;
    background:${props => props.bg};
    padding: 2%;
`
const Top = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-between;
    ul{
        list-style-type: none;
        li{
            &:nth-child(1){
                font-weight: 800;
                margin-bottom: 5%;
            }
            margin-top: 24%;
            font-family: 'PT Sans', sans-serif;
        }
    }
`
const Bottom = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-between;
    ul{
        list-style-type: none;
        li{
            &:nth-child(1){
                font-weight: 800;
                margin-bottom: 5%;
            }
            margin-top: 2%;
            font-family: 'PT Sans', sans-serif;
        }
        span{
            width: 30%;
            height: 10vh;
            background: #000;
        }
    }
`

function Footer({dark}) {
  return (
    <FooterCont bg={dark ? 'rgb(0, 0, 14)' : ' #fffff3'}>
        <Top>
            <ul>
                <li>Company</li>
                <li>Aboout</li>
                <li>Feature</li>
                <li>Mobile App</li>
                <li>Faq</li>
            </ul>

            <ul>
                <li>Features</li>
                <li>Aboout</li>
                <li>Feature</li>
                <li>Mobile App</li>
                <li>Faq</li>
            </ul>

            <ul>
                <li>Transparency</li>
                <li>Aboout</li>
                <li>Feature</li>
                <li>Mobile App</li>
                <li>Faq</li>
            </ul>

            <ul>
                <li>Help</li>
                <li>Aboout</li>
                <li>Feature</li>
                <li>Mobile App</li>
                <li>Faq</li>
            </ul>
        </Top>

        <Bottom>
        <ul>
                <li>Contact</li>
                <li>help@epaygoo.com</li>
                <span>
                    <FontAwesomeIcon Icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon Icon={faLinkedinIn}></FontAwesomeIcon>
                    <FontAwesomeIcon Icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon Icon={faDiscord}></FontAwesomeIcon>
                </span>
            </ul>

            <ul>
                <li>ICELAND</li>
                <li>Borgartún 37</li>
                <li>105 Reykjavík</li>
            </ul>

            <ul>
                <li>USA</li>
                <li>67 South Bedford st.</li>
                <li>Suite 400 West</li>
                <li>Burlington, MA 01803</li>
            </ul>

            <ul>
                <li>CANADA</li>
                <li>1260 Rue Crescent</li>
                <li>Suite 200</li>
                <li>Montreal, Quebec, Canada</li>
            </ul>
        </Bottom>
        
    </FooterCont>
  )
}

export default Footer