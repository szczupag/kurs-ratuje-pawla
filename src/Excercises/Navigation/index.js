import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

const Navigation = () => (
  <div className="navigation">
    <ul>
      <li><NavLink to="/wprowadzenie">Wprowadzenie</NavLink></li>
      <li><NavLink to="/struktura-html">Struktura dokumentu</NavLink></li>
      <li><NavLink to="/tagowanie-tekstu">Tagowanie tekstu</NavLink></li>
      <li><NavLink to="/lista">Lista</NavLink></li>
      <li><NavLink to="/klasy-id">Klasy i id</NavLink></li>
      <li><NavLink to="/link">Link</NavLink></li>
      <li><NavLink to="/obraz">Obraz</NavLink></li>
      <li><NavLink to="/inline-vs-block">Elementy blokowe i liniowe</NavLink></li>
      <li><NavLink to="/formularz">Formularz</NavLink></li>
      <li><NavLink to="/css">CSS</NavLink></li>
      <li><NavLink to="/kolory">Kolory</NavLink></li>
      <li><NavLink to="/font">Font</NavLink></li>
      <li><NavLink to="/tlo">Tło</NavLink></li>
      <li><NavLink to="/box-model">Box model</NavLink></li>
      <li><NavLink to="/flex-box">Flex box</NavLink></li>
      <li><NavLink to="/responsywnosc">Responsywność</NavLink></li>
      <li><NavLink to="/podsumowanie">Podsumowanie</NavLink></li>
    </ul>
  </div>
)

export default Navigation