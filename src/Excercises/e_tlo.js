import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/box-model">
    <h2>Tło</h2>
    <p>W CSS możemy zdefiniować m.in. następujące właściwości tła:</p>
    <ul>
      <li>background-color</li>
      <li>background-image</li>
      <li>background-repeat</li>
      <li>background-attachment</li>
      <li>background-position</li>
      <li>background-size</li>
    </ul>
    <h2>Obraz tła</h2>
    <p>Aby ustawić obraz jako tło elementu, należy podać jego ścieżkę w następujący sposób:</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        #kontener &#123;<br />
        &nbsp;&nbsp;background-image: url('space.jpeg');<br />
        &#125;<br /><br />
      </code>
    </pre>
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')",
      width: '100%',
      height: '500px',
      marginTop: '16px',
      border: '1px solid black'
    }}></div>
    <p>Obraz nie jest wyświetlony tak jak byśmy chcieli. Możemy go dopasować za pomocą pozostałych właściwości. Wartość <i>contain</i> właściwości <i>background-size</i> skaluje obraz tak aby zmieścił się w wymiarach, bez przycinania i rozciągania.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        #kontener &#123;<br />
        &nbsp;&nbsp;background-image: url('space.jpeg');<br />
        &nbsp;&nbsp;background-size: contain;<br />
        &#125;<br /><br />
      </code>
    </pre>
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')",
      width: '100%',
      height: '500px',
      marginTop: '16px',
      backgroundSize: 'contain',
      border: '1px solid black'
    }}></div>
    <p>Obraz tła wyświetla się teraz wielokrotnie. Zapobiec temu możemy ustawiając odpowiednio właściwość <i>background-repeat</i></p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        #kontener &#123;<br />
        &nbsp;&nbsp;background-image: url('space.jpeg');<br />
        &nbsp;&nbsp;background-size: contain;<br />
        &nbsp;&nbsp;background-repeat: no-repeat;<br />
        &#125;<br /><br />
      </code>
    </pre>
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')",
      width: '100%',
      height: '500px',
      marginTop: '16px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      border: '1px solid black'
    }}></div>
    <p>Inną przydatną wartością <i>background-size</i> jest <i>cover</i> która sprawi, że obraz zostanie zeskalowany w taki sposób aby wypełnił element. Obraz nie będzie rozciągnięty, ale może zostać przycięty w pionie lub poziomie tak aby nie zostawić pustego pola jak w poprzednim przykładzie.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        #kontener &#123;<br />
        &nbsp;&nbsp;background-image: url('space.jpeg');<br />
        &nbsp;&nbsp;background-size: cover;<br />
        &#125;<br /><br />
      </code>
    </pre>
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')",
      width: '100%',
      height: '500px',
      marginTop: '16px',
      backgroundSize: 'cover',
      border: '1px solid black'
    }}></div>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Dodaj do swojej strony następujące style:</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        #banner &#123;<br />
        &nbsp;&nbsp;height: flex;<br />
        &nbsp;&nbsp;display: flex;<br />
        &nbsp;&nbsp;justify-content: center;<br />
        &nbsp;&nbsp;align-items: center;<br />
        &#125;<br /><br />
      </code>
    </pre>
    <p>Następnie znajdź w <a target="_blank" href="https://images.google.com/">Google Images</a> lub <a target="_blank" href="https://unsplash.com/">tutaj</a> drugi obraz i ustaw jako tło powyższego elementu. Zdefiniuj odpowiednie właściwości aby wyświetlał się zgodnie z Twoimi oczekiwaniami.</p>
  </Template>
)

export default Excercise
