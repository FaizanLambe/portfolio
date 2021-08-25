import React from 'react'
import styled from 'styled-components'

function Title({ title, span }) {
    return (
        <TitleMain>
            <h2>{title}<span>{span}</span></h2>
        </TitleMain>
    )
}

const TitleMain = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 2.3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 11rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 6rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        @media screen and (max-width:620px){
                font-size: 2rem;
        }
        span{
            font-weight: 500;
            color: rgb(25 29 43 / 8%);
            font-size: 4rem;
            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
            @media screen and (max-width:620px){
                font-size: 4rem;
            }
            @media screen and (max-width:500px){
                font-size: 3rem;
            }
            @media screen and (max-width:370px){
                font-size: 2rem;
            }
        }
    }
`

export default Title
