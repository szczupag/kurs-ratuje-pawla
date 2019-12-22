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
            <a href="https://www.facebook.com/RatujemyPawla/">Ratujemy Pawła</a>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <Navigation />
            </div>
            <div className="col-lg-9">
                <div className="content-wrapper">
                    {children}
                    <div className="btn-wrapper-right">
                        <Button
                            to="/zadanie-01"
                        >
                            Dalej
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Template
