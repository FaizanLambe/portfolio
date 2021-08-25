import React from 'react'
import styled from 'styled-components';

function ContactItem({icon, title, contact}) {
    return (
        <ContactItemMain>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact}</p>
            </div>
        </ContactItemMain>
    )
}

const ContactItemMain = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-gray);
    width: 100%;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1.8rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
            @media screen and (max-width:640px){
                font-size: 1.5rem;
            }
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }
    @media screen and (max-width:640px){
        width: 80%;
    }
`

export default ContactItem
