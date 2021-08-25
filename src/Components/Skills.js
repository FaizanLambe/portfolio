import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Styles/Layout'
import ProgressBar from './ProgressBar'
import Title from './Title'

function Skills() {
    return (
        <SkillsMain>
                <Title title={'Skills'} span={'Skills'} />
                <InnerLayout>
                    <div className="skills">
                    <ProgressBar 
                        title={'HTML'}
                        width= {'80%'}
                        text= {'80%'}
                    />
                    <ProgressBar 
                        title={'CSS'}
                        width= {'90%'}
                        text= {'90%'}
                    />
                    <ProgressBar 
                        title={'Javascript'}
                        width= {'85%'}
                        text= {'85%'}
                    />
                    <ProgressBar 
                        title={'JAVA'}
                        width= {'60%'}
                        text= {'60%'}
                    />
                    <ProgressBar 
                        title={'React JS'}
                        width= {'70%'}
                        text= {'70%'}
                    />
                    <ProgressBar 
                        title={'.NET'}
                        width= {'70%'}
                        text= {'70%'}
                    />
                    <ProgressBar 
                        title={'SQL'}
                        width= {'70%'}
                        text= {'70%'}
                    />
                    <ProgressBar 
                        title={'Bootstrap'}
                        width= {'80%'}
                        text= {'80%'}
                    />
                    </div>
                </InnerLayout>
        </SkillsMain>
    )
}

const SkillsMain = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 1.5rem;
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
            flex-direction: column;
        }
    }
`

export default Skills
