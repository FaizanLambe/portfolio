import React from 'react'
import styled from 'styled-components'

function HobbiesItem({icon, text}) {
    return (
        <HobbiesItemMain>
            <div className="hobbies">
                <div className="image">{icon}</div>
                <p>{text}</p>
            </div>
        </HobbiesItemMain>
    )
}

const HobbiesItemMain = styled.div`
    .hobbies{
        display: grid;
        grid-template-columns: 100px auto auto auto;
        grid-gap: 1.5rem;
        align-items: center;
        font-weight: 700;
        padding: 10px;
    }
    .image{
        background-color: var(--primary-color);
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        border-radius: 50%;
        svg{
            font-size: 3rem;
            margin-left: 20px;
            @media screen and (max-width:640px){
                font-size: 2rem;
            }
        }
        @media screen and (max-width:640px){
            width: 4rem;
            height: 4rem;
        }
    }
    
`

export default HobbiesItem
