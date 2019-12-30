import React from 'react'
import CustomLink from '../../CustomLink'

import s from './style.css'

const Navigation = () => (
    <div className="navigation">
        <ul>
            <li><CustomLink to="/wprowadzenie">Wprowadzenie</CustomLink></li>
            <li><CustomLink to="/struktura-html">Struktura dokumentu</CustomLink></li>
            <li><CustomLink to="/tagowanie-tekstu">Tagowanie tekstu</CustomLink></li>
            <li><CustomLink to="/lista">Lista</CustomLink></li>
            <li><CustomLink to="/obrazy">Obrazy</CustomLink></li>
        </ul>
    </div>
)

export default Navigation