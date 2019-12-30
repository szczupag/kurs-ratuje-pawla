import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

const Navigation = () => (
  <div className="navigation">
    <ul>
      <li><NavLink to="/wprowadzenie">Wprowadzenie</NavLink></li>
      <li><NavLink to="/struktura-html">Struktura dokumentu</NavLink></li>
      <li><NavLink to="/klasy-id">Klasy i id</NavLink></li>
      <li><NavLink to="/tagowanie-tekstu">Tagowanie tekstu</NavLink></li>
      <li><NavLink to="/lista">Lista</NavLink></li>
      <li><NavLink to="/link">Link</NavLink></li>
      <li><NavLink to="/obraz">Obraz</NavLink></li>
      <li><NavLink to="/inline-vs-block">Elementy blokowe i liniowe</NavLink></li>
      <li><NavLink to="/formularz">Formularz</NavLink></li>
      <li><NavLink to="/css">CSS</NavLink></li>
    </ul>
  </div>
)

export default Navigation