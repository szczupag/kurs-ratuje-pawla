import React from 'react'
import Template from './Template'

import boxmodel from '../assets/box-model.png'

const Excercise = () => (
  <Template nextStep="/flex-box">
    <h2>Box model</h2>
    <p>W HTML wszystkie elementy są <i>pudełkami</i> składającymi się z kilku warstw.</p>
    <ul>
      <li>Content - Zawartość elementu, czyli miejsce gdzie znajduje się np. tekst lub obraz</li>
      <li>Padding - Pusta i przeźroczysta przestrzeń naokoło zawartości</li>
      <li>Border - Obramowanie wokół elementu, czyli zawartości i paddingu</li>
      <li>Margin - Pusta i przeźroczysta przestrzeń naokoło obramowania.</li>
    </ul>
    <img src={boxmodel} />
    <a target="_blank" className="img-source" href="https://the-awwwesomes.gitbooks.io/html-css-step-by-step/content/pl/css-basics/css-box-model/index.html">Źródło: the-awwwesomes.gitbooks.io</a>
    <h2>Padding</h2>
    <p>Pusta przestrzeń naokoło zawartości. Może przyjmować różne wartości z każdej strony elementu</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        div &#123;<br />
        &nbsp;padding-top: 5px;<br />
        &nbsp;padding-right: 15px;<br />
        &nbsp;padding-bottom: 10px;<br />
        &nbsp;padding-left: 15px;<br />
        &#125;<br /><br />
        div &#123;<br />
        &nbsp;padding: 5px 15px 10px 15px; /* ten sam zapis skrótowo */ <br />
        &#125;
      </code>
    </pre>
    <h2>Border</h2>
    <p>Obramowanie wokół elementu - obejmuje zawartość i padding. Możemy nadać mu kolor, styl i grubość.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        div &#123;<br />
        &nbsp;border-width: 2px;<br />
        &nbsp;border-style: dashed;<br />
        &nbsp;border-color: blue;<br />
        &#125;<br /><br />
        div &#123;<br />
        &nbsp;border: 2px dashed blue; /* ten sam zapis skrótowo */ <br />
        &#125;
      </code>
    </pre>
    <h2>Margin</h2>
    <p>Pusta i przeźroczysta przestrzeń naokoło obramowania, definiuje odstęp od innego, sąsiedniego elementu. Mogą przyjmować wartości ujemne.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        div &#123;<br />
        &nbsp;margin-top: 5px;<br />
        &nbsp;margin-right: 15px;<br />
        &nbsp;margin-bottom: 10px;<br />
        &nbsp;margin-left: 15px;<br />
        &#125;<br /><br />
        div &#123;<br />
        &nbsp;margin: 5px 15px 10px 15px; /* ten sam zapis skrótowo */ <br />
        &#125;
      </code>
    </pre>
    <h2>Display</h2>
    <p>Elementy HTML wyświetlane są jako <i>inline</i> lub <i>block</i>. Teraz poznamy jeszcze jedną ich różnicę.</p>
    <ul>
      <li>block
        <ul>
          <li>Dodanie paddingu, marginesu lub obramowania sprawia, że inne elementy zostają wypchnięte.</li>
        </ul>
      </li>
      <li>inline
        <ul>
          <li>Dodanie paddingu, marginesu lub obramowania nie wpływa na inne elementy.</li>
        </ul>
      </li>
    </ul>
    <h2>Wymiary elementu</h2>
    <p>Jeśli ustawiasz szerokość lub wysokość elementu za pomocą stylów CSS to ustalasz tylko szerokość zawartości! Pełny wymiar elementu składa się z rozmiaru kontentu oraz dodatkowo wymiarów marginesów, paddingu i obramowania.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        div &#123;<br />
        &nbsp;width: 120px;<br />
        &nbsp;height: 50px;<br />
        &nbsp;padding: 5px 10px;<br />
        &nbsp;border: 5px dashed blue;<br />
        &nbsp;margin: 15px;<br />
        &#125;
      </code>
    </pre>
    <p>Jakie będą pełne wymiary powyższego elementu?</p>
    <p><b>Całkowita szerokość</b> = lewy margines + lewe obramowanie + lewy padding + szerokość kontentu + prawy padding + prawe obramowanie + prawy margines<br/><b>Całkowita wysokość</b> = górny margines + górne obramowanie + górny padding + wysokość kontentu + dolny padding + dolne obramowanie + dolny margines</p>
    <p>Jeśli chcemy ustalać wielkości naszych elementów bez dodatkowych kalkulacji, możemy zmienić interpretację modelu pudełkowego poprzez zastosowanie właściwości <code class="prettyprint lang-css">box-sizing: border-box;</code></p>
    <p><b>Całkowita szerokość</b> = szerokość nadana elementowi<br /><b>Całkowita wysokość</b> = wysokość nadana elementowi</p>
    <h2>🔥 Zadanie 🔥</h2>
    <ul>
      <li>Nadaj banerowi padding, tak aby nagłówek w nim zawarty prezentował się bardziej atrakcyjnie.</li>
      <li>Dodaj do banera właściwość <i>margin-bottom</i> aby uzyskać odstęp od treści.</li>
      <li>Zastosuj padding w elementach z klasą <i>content</i> i <i>sidebar.</i></li>
    </ul>
  </Template>
)

export default Excercise
