import React from 'react'
import Template from './Template'

import boxmodel from '../assets/box-model.png'

const Excercise = () => (
  <Template nextStep="/obramowanie">
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
    <h2>Przykład</h2>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        div &#123;<br />
        &nbsp;padding: 5px 10px;<br />
        &nbsp;border: 2px dashed blue;<br />
        &nbsp;margin: 15px;<br />
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
    <p>Całkowita szerokość = lewy margines + lewe obramowanie + lewy padding + szerokość kontentu + prawy padding + prawe obramowanie + prawy margines<br/>Całkowita wysokość = górny margines + górne obramowanie + górny padding + wysokość kontentu + dolny padding + dolne obramowanie + dolny margines</p>
  </Template>
)

export default Excercise
