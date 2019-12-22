import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './style.css'

const Navigation = () => (
    <div className="navigation">
        <ul>
            <li><NavLink to="/wprowadzenie">Wprowadzenie</NavLink></li>
            <li><NavLink to="/struktura-html">Struktura dokumentu</NavLink></li>
            <li><NavLink to="/tagowanie-tekstu">Tagowanie tekstu</NavLink></li>
            <li><NavLink to="/lista">Lista</NavLink></li>
            <li><NavLink to="/obraz">Obrazy</NavLink></li>
        </ul>
    </div>
)

export default Navigation