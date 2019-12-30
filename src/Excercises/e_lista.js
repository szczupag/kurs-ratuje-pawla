import React from 'react'
import Template from './Template'

import listy from '../assets/e03_example-lists.png'

const Excercise = () => (
  <Template nextStep="/link">
    <h2>Lista</h2>
    <p>Do grupowania treści używa się listy. Dane w niej mogą być luźno wymienione lub uporządkowane.</p>
    <img src={listy} />
    <a target="_blank" className="img-source" href="http://www.bizstreamacademy.com/ACADEMY/2019_BZSA_Slides/slides.html#/33">Źródło: bizstreamacademy.com</a>
    <h2>Lista nieuporządkowana</h2>
    <p>Elementy w liście nieuporządkowanej są wypunktowane - domyślnie za pomocą kropki.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;ul&gt;<br />
        &nbsp;&nbsp;&lt;li&gt;Chleb&lt;/li&gt;<br />
        &nbsp;&nbsp;&lt;li&gt;Masło&lt;/li&gt;<br />
        &lt;/ul&gt;<br />
      </code>
    </pre>
    <ul>
      <li>Chleb</li>
      <li>Masło</li>
    </ul>
    <p>Listę uporządkowaną tworzymy przy pomocy znacznika <code class="prettyprint">&lt;ul&gt;</code> (unordered list), a elementy listy umieszczamy w środku za pomocą znacznika <code class="prettyprint">&lt;li&gt;</code> (list item).</p>
    <h2>Lista uporządkowana</h2>
    <p>W liście uporządkowanej wymienione elementy są numerowane przez liczby bądź litery:</p>
    <ol>
      <li>Posmarować chleb masłem</li>
      <li>Położyć plaster sera</li>
    </ol>
    <p>Listę uporządkowaną tworzymy przy pomocy znacznika <code class="prettyprint">&lt;ol&gt;</code> (ordered list). Inny rodzaj numerowania lub wypunktowania niż domyślny możemy uzyskać poprzez reguły CSS. Wrócimy do tego później!</p>
    <h2>Lista definicji</h2>
    <p>W liście definicyjnej przypisujemy do pojęcia jego definicję, tak jakbyśmy pisali słownik.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;dl&gt;<br />
        &nbsp;&nbsp;&lt;dt&gt;Kurs ratuje Pawła&lt;/dt&gt;<br />
        &nbsp;&nbsp;&lt;dd&gt;Charytatywny kurs z podstaw HTML i CSS&lt;/dd&gt;<br />
        &lt;/dl&gt;<br />
      </code>
    </pre>
    <dl>
      <dt>Kurs ratuje Pawła</dt>
      <dd>Charytatywny kurs z podstaw HTML i CSS</dd>
    </dl>
    <p>Listy definicyjne są przydatne do wyświetlania metadanych. Możliwe jest przypisanie jednej definicji wielu pojęć, jak i jednemu pojęciu wiele definicji.</p>
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
    <h2>🔥 Zadanie 🔥</h2>
    <p>Stwórz spis treści Twojej strony za pomocą listy uporządkowanej lub nieuporządkowanej.</p>
  </Template>
)

export default Excercise
