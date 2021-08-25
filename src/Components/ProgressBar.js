import React from 'react'
import styled from 'styled-components';

function ProgressBar({title, width, text}) {

    const [style, setStyle] = React.useState({});

    setTimeout(() =>{
        const newStyle = {
            opacity : 1,
            width: width
        }

        setStyle(newStyle);
    }, 200);

    return (
        <ProgressBarMain>
            <h6>{title}</h6>
            <div className="progress-bar">
                <div className="progress">
                    <span style={style}></span>
                </div>
                <p>{text}</p>
            </div>
        </ProgressBarMain>
    )
}

const ProgressBarMain = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-left: 1.1rem;
        }
        .progress{
            position: relative;
            width: 60%;
            height: .4rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                width: 0;
                opacity: 0;
                background-color: var(--primary-color);
                transition: 1s ease 0.3s;
            }
        }
    }
    h6{
        color: var(--white-color);
        font: 1.2rem;
        padding-bottom: .6rem;
    }
`

export default ProgressBar
