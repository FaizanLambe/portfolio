import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import profile from '../Image/profile.jpg'

function Navigation() {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <NavigationMain className="navigationMain">
            <ProfileImage>
                <img src={profile} alt="" />
            </ProfileImage>
            <NavItems>
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact onClick={closeMenu}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" activeClassName="active-class" exact>Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </NavItems>
            <footer>
                <p>@2021 Faizan's Porfolio Website</p>
            </footer>
        </NavigationMain>
    );
}

const NavigationMain = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color); 
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 0.5rem 0;
            font-size: 0.5rem;
            display: block;
            text-align: center;
        }
    }
`

const ProfileImage = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img{
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
`

const NavItems = styled.ul`
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var(--primary-color);
        color: white;
    }
    li{
        display: block;
        a{
            display: block;
            padding: .45rem 0;
            position: relative;
            z-index: 10;
            text-transform: uppercase;
            transition: all .4s ease-in-out;
            font-weight: 600;
            letter-spacing: 1px;
            &:hover{
                cursor: pointer;
                color: var(--white-color);               
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0; 
                left: 0;
                width: 0;
                height: 50%;
                background-color: var(--primary-color);
                transition: all 0.4s cubic-bezier(1,-0.2,.25,.95);
                opacity: 0.3;
                z-index: -1;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
`

export default Navigation
