import React from 'react'
import Template from './Template'

import floats from '../assets/flexbox-vs-floats.png'
import justify from '../assets/flex-justify-content-alignment.png'
import align from '../assets/flex-align-items.png'

const Excercise = () => (
  <Template nextStep="/responsywnosc">
    <h2>Elastyczny model pudełkowy</h2>
    <p>Flex box to moduł CSS ułatwiający układanie elementów wzdłuż osi. Można kontrolować ułożenie elementów w kontenerze zarówno wertykalnie jak i horyzontalnie. Jest to alternatywa dla modułu floats.</p>
    <img src={floats} />
    <a target="_blank" className="img-source" href="https://internetingishard.com/">Źródło: internetingishard.com</a>
    <h2>Wyrównanie w poziomie</h2>
    <p>Po dodaniu właściwości <code class="prettyprint">&nbsp;display: flex;&nbsp;</code> elementy w kontenerze zostaną ułożone obok siebie w linii horyzontalnej. Możemy zmieniać ich położenie w poziomie za pomocą dodatkowej reguły.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        .item &#123;<br />
          &nbsp;&nbsp;display: flex;<br />
          &nbsp;&nbsp;justify-content: center;<br />
        &#125;
      </code>
    </pre>
    <img src={justify} />
    <a target="_blank" className="img-source" href="https://internetingishard.com/">Źródło: internetingishard.com</a>
    <h2>Wyrównanie w pionie</h2>
    <p>Elementy możemy wyrównać pionowo za pomocą właściwości <code class="prettyprint">&nbsp;align-items&nbsp;</code></p>
    <img src={align} />
    <a target="_blank" className="img-source" href="https://internetingishard.com/">Źródło: internetingishard.com</a>
    <h2>Kierunek</h2>
    <p>Gdybyśmy chcieli aby elementy nie znajdowały się w rzędzie (tak jak to jest domyślnie) lecz w kolumnie, to możemy to zmienić regułą <code class="prettyprint">&nbsp;flex-direction: column;&nbsp;</code>. Wraz z odwróceniem orientacji zmienia się też orientacja wyrównania <i>justify</i> i <i>alignment</i>.</p>
    <h2>Więcej</h2>
    <p>Flexbox ma wiele opcji i zastosowań, o których dowiedzieć się możesz między innymi <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">z tej stronki.</a></p>
    <h2>🔥 Zadanie 🔥</h2>
    <ol>
      <li>Float - dodaj obrazowi umieszczonemu w tekście właściwość <code class="prettyprint">&nbsp;float: right;&nbsp;</code> i zobacz jak wpłynęło to na ułożenie tekstu.</li>
      <li>Flexbox - dodaj poniższy kod do pliku ze stylami:</li>
    </ol>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        .menu &#123;<br />
          &nbsp;&nbsp;padding: 0;<br />
          &nbsp;&nbsp;list-style: none;<br />
          &nbsp;&nbsp;display: flex;<br />
          &nbsp;&nbsp;justify-content: center;<br />
        &#125;<br /><br />
        .menu li &#123;<br />
          &nbsp;&nbsp;margin: 0 20px;<br />
        &#125;
      </code>
    </pre>
    <p>W prosty sposób przekształciliśmy listę w nawigację strony! Dodaj tło i inne style aby dopasować jej wygląd. Umieść menu również w pliku <i>newsletter.html</i> i zapewnij aby po kliknięciu w pierwszy element można było wrócić na stronę główną.</p>
  </Template>
)

export default Excercise
