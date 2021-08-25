import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import HobbiesItem from './HobbiesItem'
import Title from './Title'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function Hobbies() {
    return (
        <HobbiesMain>
            <Title title={'Hobbies & Interests'} span={'Hobbies & Interests'} />
                <InnerLayout>
                    <div className="hobbies">
                        <HobbiesItem
                            icon={<PhotoCameraIcon />} 
                            text={'Photography'}
                        />
                        <HobbiesItem
                            icon={<FlightTakeoffIcon />} 
                            text={'Travelling'}
                        />
                        <HobbiesItem
                            icon={<SportsEsportsIcon />} 
                            text={'Gaming'}
                        />
                    </div>
                </InnerLayout>
        </HobbiesMain>
    )
}

const HobbiesMain = styled.div`
    
`

export default Hobbies
