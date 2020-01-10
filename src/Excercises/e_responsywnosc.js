import React from 'react'
import Template from './Template'

import mediaQueries from '../assets/responsive-websites.png'
import mobileFirst from '../assets/mobile-first-design.png'

const Excercise = () => (
  <Template nextStep="/podsumowanie">
    <h2>Mobile first</h2>
    <p>Duża ilość stron internetowych przeglądana jest częściej na urządzeniach mobilnych niż na komputerze czy laptopie. Dlatego ważne jest aby już podczas projektowania strony zapewnić jej responsywność.</p>
    <img src={mobileFirst} />
    <a target="_blank" className="img-source" href="https://internetingishard.com/">Źródło: internetingishard.com</a>
    <h2>Media Queries</h2>
    <p>Responsywność osiągnąć możemy za pomocą <i>media queries</i>. Definiuje się nimi odmienny wygląd elementów dostosowany do poszczególnych wymiarów urządzenia. Możemy nawet nadać odrębne style dla wydruku strony!</p>
    <img src={mediaQueries} />
    <a target="_blank" className="img-source" href="https://internetingishard.com/">Źródło: internetingishard.com</a>
    <p>Wewnątrz <i>media queries</i> należy zawrzeć całe reguły, łącznie z selektorami. Mają one wyższy priorytet niż te standardowe deklaracje.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        /* Standardowe style */ <br/>
        &nbsp;.container &#123; ... &#125;<br /><br />
        /* Style działające dla szerokości ekranu mniejszej lub równej 768px */ <br/>
        &nbsp;@media screen and (max-width: 768px) &#123;<br />
        &nbsp;&nbsp;.container &#123; ... &#125;<br />
        &nbsp;&#125;<br /><br />
        /* Style działające dla orientacji poziomej urządzenia */ <br/>
        &nbsp;@media screen and (orientation: landscape) &#123;<br />
        &nbsp;&nbsp;.container &#123; ... &#125;<br />
        &nbsp;&#125;<br /><br />
        /* Style dla wydruku strony */ <br/>
        &nbsp;@media print &#123;<br />
        &nbsp;&nbsp;.container &#123; ... &#125;<br />
        &nbsp;&#125;<br /><br />
      </code>
    </pre>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Pomniejsz wielkość nagłówków przy szerokości ekranu mniejszej lub równej 425px.</p>
  </Template>
)

export default Excercise
