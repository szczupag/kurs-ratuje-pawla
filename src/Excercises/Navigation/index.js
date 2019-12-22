import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './style.css'

const Navigation = () => (
    <div className="navigation">
        <ul>
            <li><NavLink to="/wprowadzenie">Wprowadzenie</NavLink></li>
            <li><NavLink to="/zadanie-01">Zadanie 1</NavLink></li>
        </ul>
    </div>
)

export default Navigation