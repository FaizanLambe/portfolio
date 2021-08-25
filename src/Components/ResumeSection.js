import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import SubTitle from './SubTitle'
import Title from './Title'
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem'

function ResumeSection() {
    return (
        <ResumeMain>
            <Title title={'Education'} span={'Education'} />
            <InnerLayout>
                <div className="sub-title">
                    <SubTitle icon={<SchoolIcon />} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2016-2019'}
                        title={'Bachelor of Science in Information Technology'}
                        subTitle={'Nirmala College, Kandivali (E).'}
                    />
                    <ResumeItem
                        year={'2014-2016'}
                        title={'Higher Secondary Certificate (HSC)'}
                        subTitle={'D. R. Vyas Junior College, Kandivali (W)'}
                    />
                    <ResumeItem
                        year={'2013-2014'}
                        title={'Secondary School Certificate (SSC)'}
                        subTitle={'St. Xaviers High School, Goregaon (E)'}
                    />
                </div>

            </InnerLayout>
        </ResumeMain>
    )
}

const ResumeMain = styled.section`
    .sub-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`

export default ResumeSection
