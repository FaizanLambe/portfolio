import React from 'react'
import styled from 'styled-components'

function SubTitle({icon, title}) {
    return (
        <SubTitleMain>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SubTitleMain>
    )
}

const SubTitleMain = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
    }
`

export default SubTitle
