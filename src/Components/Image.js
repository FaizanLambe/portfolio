import React from 'react'
import styled from 'styled-components'
import resume from '../Image/resume.jpg'
import Button from './Button'
import Resume from '../Files/Resume.pdf'

function Image() {
    return (
        <ImageMain>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Faizan Lambe</span></h4>
                </div>
                <p className="para">
                    I want to work in an organization which will enhance my skills and enable me to become successful and scale new heights in life in conjunction with the growth of the organization.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name:</p>
                        <p>D.O.B:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Location:</p>
                        <p>Service:</p>
                    </div>
                    <div className="info">
                        <p>Mohd Faizan A Lambe</p>
                        <p>03 / 03 / 1998</p>
                        <p>Indian</p>
                        <p>English, Hindi, Urdu</p>
                        <p>Malad(East), Mumbai</p>
                        <p>Information Technology</p>
                    </div>
                </div>

                <a href={Resume} download="Faizan's Resume">
                    <Button title={'Download CV'} />
                </a>

            </div>
        </ImageMain>
    )
}

const ImageMain = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column ;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 90%;
            object-fit: cover;
            @media screen and (max-width: 640px){
                    width: 80%;
        }
    }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color: var(--primary-color);
            }
        }
        .para{
            padding: 1rem 0;
        }
        .about-info{
            padding-bottom: 1.4rem;
            display: flex;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`

export default Image
