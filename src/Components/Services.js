import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import ServiceCard from './ServiceCard'
import Title from './Title'
import web from '../Image/web.svg'
import appl from '../Image/appl.svg'

function Services() {
    return (
        <InnerLayout>
            <ServicesMain>
                <Title title={'Services'} span={'Services'} />
                <div className="services">
                    <ServiceCard
                        image={web}
                        title={'Web Design'}
                        para={'Fully responsive static and dynamic websites'}
                    />
                    <ServiceCard
                        image={appl}
                        title={'Desktop application'}
                        para={'Desktop based applications'}
                    />
                </div>
            </ServicesMain>
        </InnerLayout>
    )
}

const ServicesMain = styled.section`

    .services{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-direction: row;
        grid-gap: 1.5rem;
        width: 50%;
        @media screen and (max-width: 1300px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 0;
            margin-top: 10px;
        }
    }
    
    
`

export default Services
