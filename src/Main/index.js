import React from 'react'
import Button from '../Button'

import './style.css'

const Main = () => (
    <div className="main-container">
        <h1>Witaj na kursie z podstaw HTML i CSS!</h1>
        <div className="btn-wrapper-center">
            <Button
                to="/wprowadzenie"
            >
                Zaczynamy
            </Button>
        </div>
    </div>
)

export default Main
