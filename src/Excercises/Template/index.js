import React from 'react'
import Button from '../../Button'
import Navigation from '../Navigation'

import s from './style.css'

const Template = ({
    children,
    nextStep
}) => (
    <div className="container template-container">
        <div className="header">
            <h1>Podstawy HTML i CSS</h1>
            <a target="_blank" href="https://www.facebook.com/RatujemyPawla/">💫 Ratujemy Pawła!</a>
        </div>
        <div className="row content">
            <div className="nav-column">
                <Navigation />
            </div>
            <div className="content-column">
                <div className="content-wrapper">
                    {children}
                    <div className="btn-wrapper-right">
                        <Button
                            to={nextStep}
                        >
                            Dalej
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyrights">
            <span>2019, Created by <a target="_blank" href="https://www.linkedin.com/in/agata-szczuka/">szczupag</a></span>
        </div>
    </div>
)

export default Template
