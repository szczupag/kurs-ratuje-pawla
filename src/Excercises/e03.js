import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/">
    <h2>Lista</h2>
    <p>Do grupowania treści używa się listy. Przypomina ona listę na zakupy lub spis treści. Dane w niej mogą być luźno wymienione lub uporządkowane.</p>
    <h2>Lista nieuporządkowana</h2>
    <p>Elementy w liście nieuporządkowanej są wypunktowane - domyślnie za pomocą kropki.</p>
    <ul>
      <li>Chleb</li>
      <li>Masło</li>
    </ul>
    <ul style={{ listStyleType: "square" }}>
      <li>Chleb</li>
      <li>Masło</li>
    </ul>
    <ul style={{ listStyleType: "circle" }}>
      <li>Chleb</li>
      <li>Masło</li>
    </ul>
    <p>Listę uporządkowaną tworzymy przy pomocy znacznika <code class="prettyprint">&lt;ol&gt;</code> (ordered list), a elementy listy umieszczamy w środku za pomocą znacznika <code class="prettyprint">&lt;li&gt;</code> (list item). Inny rodzaj numerowania niż domyślny możemy uzyskać poprzez reguły CSS. Wrócimy do tego później.</p>
    <h2>Lista uporządkowana</h2>
    <p>W liście uporządkowanej wymienione elementy są numerowane przez liczby bądź litery:</p>
    <ol>
      <li>Posmarować chleb masłem</li>
      <li>Położyć plaster sera</li>
    </ol>
    <ol style={{ listStyleType: "upper-roman" }}>
      <li>Posmarować chleb masłem</li>
      <li>Położyć plaster sera</li>
    </ol>
    <ol style={{ listStyleType: "lower-latin" }}>
      <li>Posmarować chleb masłem</li>
      <li>Położyć plaster sera</li>
    </ol>
    <p>Listę uporządkowaną tworzymy przy pomocy znacznika <code class="prettyprint">&lt;ol&gt;</code> (ordered list). Inny rodzaj numerowania lub wypunktowania niż domyślny możemy uzyskać poprzez reguły CSS. Wrócimy do tego później!</p>
    <h2>Zagnieżdżanie list</h2>
    <p>A gdybyśmy tak chcieli rozwinąć nasze elementy listy o kolejne podpunkty? Rozwiązanie jest bardzo proste - wystarczy zawrzeć jedną listę w drugiej. Bez problemu możemy łączyć ze sobą różne rodzaje list.</p>
    <ol>
      <li>Posmarować chleb masłem</li>
      <li>Położyć na chlebie:
        <ul>
          <li>Sałatę</li>
          <li>Plaster sera</li>
        </ul>
      </li>
    </ol>
  </Template>
)

export default Excercise
