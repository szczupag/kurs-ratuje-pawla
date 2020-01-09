import React from 'react'
import Template from './Template'

import block from '../assets/e05_block.png'
import inline from '../assets/e05_inline.png'

const Excercise = () => (
  <Template nextStep="/formularz">
    <h2>Block & Inline</h2>
    <p>Każdy element HTML ma domyślny sposób wyświetlania ze względu na swój rodzaj. Jest to <i>block</i> lub <i>inline</i></p>
    <h2>Block</h2>
    <p>Elementy blokowe zawsze wyświetlane są w nowej linii i zajmują całą dostępną szerokość. Wymuszają przeniesienie kolejnego elementu pod spód.</p>
    <img src={block} />
    <h2>Inline</h2>
    <p>Elementy liniowe nie zaczynają się od nowej linii i zajmują tylko tyle szerokości ile potrzebują.</p>
    <img src={inline} />
    <h2>Elementy grupujące</h2>
    <dl>
      <dt><b>div</b></dt>
      <dd>Definiuje sekcje na stronie, najczęściej używany jako konetener na inne elementy html na przykład w celu ostylowania ich za pomocą CSS.</dd>
      <dd>Jest elementem blokowym.</dd>
      <dt><b>span</b></dt>
      <dd>Używany jako kontener dla tekstu, pozwala na ostylowanie jego poszczególnych fragmentów.</dd>
      <dd>Jest elementem liniowym.</dd>
    </dl>
    <h2>🔥 Zadanie 🔥</h2>
    <ol>
      <li>Zastanów się które z dotyczas poznanych elementów HTML są blokowe, a które liniowe.</li>
      <li>Umieść nagłówek swojej strony w środku elementu <i>div</i> i nadaj mu atrybut <i>id="banner"</i>.</li>
      <li>Opakuj sekcje na swojej stronie elementem <i>div</i> o klasie <i>content</i>.</li>
    </ol>
  </Template>
)

export default Excercise
