import React from 'react'
import Skills from '../Components/Skills'
import ResumeSection from '../Components/ResumeSection'
import { MainLayout } from '../Styles/Layout'
import Hobbies from '../Components/Hobbies'
import Language from '../Components/Language'

function Resume() {
    return (
        <div>
            <MainLayout>
                <Skills />
                <ResumeSection />
                <Language />
                <Hobbies />
            </MainLayout>
        </div>
    )
}

export default Resume
