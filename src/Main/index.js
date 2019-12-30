import React from 'react'
import Button from '../Button'
import close from '../assets/close.svg'
import min from '../assets/minimize.svg'
import max from '../assets/maximize.svg'
import pointer from '../assets/pointer.svg'

import './style.css'

const Main = () => (
    <div className="main-container fb">
        <div className="fb-banner">
            <div className="fb-header">
                <p className="fb-title">Ratujemy Pawła</p>
                <p><img src={min} /></p>
                <p><img src={max} /></p>
                <p><img src={close} /></p>
            </div>
            <div className="fb-content">
                <p>Kurs</p>
                <p class="main">Podstawy HTML i CSS</p>
            </div>
            <div className="fb-footer">
                <Button
                    to="/wprowadzenie"
                >
                    Zaczynamy
                </Button>
            </div>
        </div>
        <div className="fb-link">
            <a target="_blank" href="https://www.siepomaga.pl/ratujemy-pawla">siepomaga.pl/ratujemy-pawla</a>
        </div>
    </div>
)

export default Main
