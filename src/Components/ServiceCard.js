import React from 'react'
import styled from 'styled-components'

function ServiceCard({image, title, para}) {
    return (
        <ServiceCardMain>
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{para}</p>
            </div>
        </ServiceCardMain>
    )
}

const ServiceCardMain = styled.div`
    background-color: var(--background-dark-gray);
    margin: 0 1rem;
    margin-top: 4rem;
    border: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        width: 450px;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: .8rem 0;
        }
        img{
            width: 100px;
            @media screen and (max-width: 640px){
                width: 80px;
            }
        }
        @media screen and (max-width: 640px){
            width: 340px;
        }
    }
`

export default ServiceCard
