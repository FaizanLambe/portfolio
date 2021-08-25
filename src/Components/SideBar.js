import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

function SideBar({navToggle}) {
    return (
        <SideBarMain className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SideBarMain>
    )
}

const SideBarMain = styled.div`
    width: 12rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translate(-100%);
        z-index: 20;
    }
`;  

export default SideBar