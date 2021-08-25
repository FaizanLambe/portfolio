import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import ProgressBar from './ProgressBar'
import Title from './Title'

function Language() {
    return (
        <LanguageMain>
            <Title title={'Language'} span={'Language'} />
            <InnerLayout>
                    <div className="language">
                    <ProgressBar
                        title={'English'}
                        width= {'100%'}
                        text= {'100%'}
                    />
                    <ProgressBar 
                        title={'Hindi'}
                        width= {'100%'}
                        text= {'100%'}
                    />
                    <ProgressBar 
                        title={'Urdu'}
                        width= {'70%'}
                        text= {'70%'}
                    />
                    <ProgressBar 
                        title={'Marathi'}
                        width= {'30%'}
                        text= {'30%'}
                    />
                    </div>
                </InnerLayout>
        </LanguageMain>
    )
}

const LanguageMain = styled.div`
    .language{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 1.5rem;
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
            flex-direction: column;
        }
    }
`

export default Language
