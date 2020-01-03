import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/responsywnosc">
    <h2>Elastyczny model pudełkowy</h2>
    <p>Flex box to moduł CSS ułatwiający układanie elementów wzdłuż osi. Można kontrolować ułożenie elementów w kontenerze zarówno wertykalnie jak i horyzontalnie.</p>
    <h2>Zastosowanie</h2>
    <p>Spójrzmy jak to działa na przykładzie! Zacznijmy od prostego przykładu 2 elementów zamkniętych w elemenecie <i>div.</i> Chcielibyśmy aby oba elementy pojawiły się w jednej linii.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;.wrapper &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;border: 2px solid #031233;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&nbsp;.item &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;border: 2px dotted orange;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: 50%;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&lt;/style&gt;<br />
        &lt;/head&gt;<br />
        &lt;body&gt;<br />
        &nbsp;&nbsp;&lt;div class="wrapper"&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="item"&gt;...&lt;/div&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="item"&gt;...&lt;/div&gt;<br />
        &nbsp;&nbsp;&lt;div&gt;<br />
        &lt;/body&gt;<br />
      </code>
    </pre>
    <div style={{ border: "2px solid #031233", marginTop: "20px" }}>
      <div style={{ border: "2px dotted orange", width: "50%", boxSizing: "border-box" }}>Fusce eu nisi consequat, lacinia urna a, ultricies libero. Nullam fringilla elementum arcu, ac lacinia justo pretium quis. Vestibulum dapibus gravida vulputate. Maecenas a leo et dolor auctor condimentum ut et purus.</div>
      <div style={{ border: "2px dotted orange", width: "50%", boxSizing: "border-box" }}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tristique consectetur porttitor. Pellentesque rutrum ex iaculis odio molestie, ut pretium urna rutrum. Quisque ultrices tincidunt dolor ut efficitur.</div>
    </div>
    <p>Najprostszym rozwiązaniem będzie zastosownie właściwości <i>display: flex</i>. Po jej dodaniu do wrappera elementy znajdą się w jednej linii. Poza tym będą miały również tę samą wysokość.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;.wrapper &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;border: 2px solid #031233;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&nbsp;.item &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;border: 2px dotted orange;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: 50%;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&lt;/style&gt;<br />
        &lt;/head&gt;<br />
        &lt;body&gt;<br />
        &nbsp;&nbsp;&lt;div class="wrapper"&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="item"&gt;item1&lt;/div&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="item"&gt;item2&lt;/div&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="item"&gt;item3&lt;/div&gt;<br />
        &nbsp;&nbsp;&lt;div&gt;<br />
        &lt;/body&gt;<br />
      </code>
    </pre>
    <div style={{ border: "2px solid #031233", marginTop: "20px", display: "flex" }}>
      <div style={{ border: "2px dotted orange", width: "50%", boxSizing: "border-box" }}>Fusce eu nisi consequat, lacinia urna a, ultricies libero. Nullam fringilla elementum arcu, ac lacinia justo pretium quis. Vestibulum dapibus gravida vulputate. Maecenas a leo et dolor auctor condimentum ut et purus.</div>
      <div style={{ border: "2px dotted orange", width: "50%", boxSizing: "border-box" }}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tristique consectetur porttitor. Pellentesque rutrum ex iaculis odio molestie, ut pretium urna rutrum. Quisque ultrices tincidunt dolor ut efficitur.</div>
    </div>
    <p>Flexbox ma wiele opcji i zastosowań, o których dowiedzieć się możesz między innymi <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">z tej stronki.</a></p>
    <h2>🔥 Zadanie 🔥</h2>
    <ol>
      <li>Nadaj elementowi o klasie <i>content</i> szerokość 70%.</li>
      <li>Nadaj elementowi o klasie <i>sidebar</i> szerokość 30%.</li>
      <li>Oba elementy zapakuj w element div o klasie <i>main-wrapper</i> i spraw aby jego wewnętrzne elementy znalazły się w jednej linii.</li>
    </ol>
  </Template>
)

export default Excercise
