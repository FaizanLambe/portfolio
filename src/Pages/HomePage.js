import { Facebook, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import ParticlesConfig from '../Components/Particle'
import Particles from 'react-particles-js'
import styled from 'styled-components'

function HomePage() {
    return (
        <HomePageMain>
            <Particles params={ParticlesConfig} />
            <Typography>
                <h1>Hi, I'm <span>Faizan Lambe</span></h1>
                <p>My aim is to work in an organization which will enhance my skills and enable me to become successful and scale new heights in life in conjunction with the growth of the organization.</p>
                <SocialIcons>
                    <FacebookIcon href="https://www.facebook.com/">
                        <Facebook />
                    </FacebookIcon>
                    <GitHubIcon href="https://github.com/FaizanLambe">
                        <GitHub />
                    </GitHubIcon>
                    <LinkedInIcon href="https://www.linkedin.com/in/faizan-lambe/">
                        <LinkedIn />
                    </LinkedInIcon>
                </SocialIcons>
            </Typography>
        </HomePageMain>
    )
}

const HomePageMain = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Typography = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    h1{
        font-size: 2.2rem;
        color: var(--white-color);
        span{
            font-size: 2.2rem;
            color: var(--primary-color);
            @media screen and (max-width:640px){
            font-size: 1.3rem;
        }
        }
        @media screen and (max-width:640px){
            font-size: 1.3rem;
        }
    }
    p{
        @media screen and (max-width:640px){
            font-size: 1rem;
        }
    }
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

const FacebookIcon = styled.a`
    border: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover{
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
    svg{
        font-size: 1.2rem;
        margin: .5rem;
    }
`

const LinkedInIcon = styled.a`
    border: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover{
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
    svg{font-size: 1.2rem;
        margin: .5rem;
    }
                
`

const GitHubIcon = styled.a`
    border: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover{
        border: 2px solid #5F4687;
        color: #5F4687;
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
    svg{font-size: 1.2rem;
        margin: .5rem;
    }
`

export default HomePage
