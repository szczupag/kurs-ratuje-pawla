import React from 'react'
import Template from './Template'

import empressia from '../assets/empressia.png'

const Excercise = () => (
  <Template nextStep="/">
    <h2>Coś się kończy, coś się zaczyna 🐺</h2>
    <p>Gratulacje! Znasz już podstawy HTML i CSS. Potrafisz tworzyć proste strony internetowe. Ale to nie koniec! Przed Tobą stoi wiele kolejnych wyzwań.</p>
    <p>Kolejnym krokiem na ścieżce frontendowej jest zapoznanie się z językiem Java Script, który umożliwia tworzenie interaktywnych elementów, a także wymianę danych z backendem. Warto też zagłębić się bardziej w poruszane podczas tego kursu tematy.</p>
    <p>Bardzo ważna jest też praktyka! Twórz nowe projekty o dowolnej tematyce - możesz na przykład spróbować odtworzyć stronę na podstawie gotowego designu. Publikuj swoje strony i dziel się nimi ze społecznością! Na facebooku znajdziesz wiele grup frontendowcyh gdzie użytkownicy pokazują swoje prace, doradzają i wzajemnie pomagają.</p>
    <h2>Podziękowania</h2>
    <p>Na koniec chciałabym podziękować Agencji Interaktywnej Empressia, która bez wahania zgodziła się pomóc w przygotowaniu wydarzenia i zasponsorowała pizzę dla uczestników kursu!</p>
    <img src={empressia} />
    <h2>🔥 Zadanie 🔥</h2>
    <p>Kilka rzeczy od których warto zacząć dalszą naukę</p>
    <ul>
      <li><a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank">Zaawansowane selektory CSS, pseudoklasy, pseudoelementy</a></li>
      <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flexbox</a></li>
      <li><a href="https://www.w3schools.com/css/css3_animations.asp" target="_blank">Animacje w CSS</a></li>
      <li><a href="https://www.w3schools.com/css/css_rwd_grid.asp" target="_blank">Grid view</a></li>
      <li><a href="https://sass-lang.com/" target="_blank">Preprocesor CSS - Sass</a></li>
      <li><a href="https://www.w3schools.com/js/default.asp" target="_blank">Java Script</a></li>
      <li><a href="https://guides.github.com/activities/hello-world/" target="_blank">Github</a></li>
    </ul>
    <h2>Najlepsze z najlepszych!</h2>
    <p><a href="https://doodle.com/poll/bgrhpgvqvf2mxyip" target="_blank" >ankieta</a></p>
  </Template>
)

export default Excercise
