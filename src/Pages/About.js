import React from 'react'
import styled from 'styled-components'
import Image from '../Components/Image'
import Services from '../Components/Services'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layout'

function About() {
    return (
        <MainLayout>
            <AboutMain>
                <Title title={'About Me'} span={'About me'}/>
            </AboutMain>
            <Image />
            <Services />
        </MainLayout>
    )
}

const AboutMain = styled.section`
    
`

export default About
