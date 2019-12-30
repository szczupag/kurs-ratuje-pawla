import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/obraz">
    <h2>Linki</h2>
    <p>Odnośniki <code class="prettyprint">&lt;a&gt;Kliknij mnie&lt;/a&gt;</code> pozwalają utworzyć z tekstu "klikalny" link. Adres do którego ma on kierować umieszcza się w atrybucie <i>href</i>. Kliknięty link otwiera się domyślnie w tym samym oknie lub karcie przeglądarki. Możemy to zmienić przez określenie atrybutu <i>target</i>. Atrybut <i>target="_blank"</i> sprawi, że link będzie otwierał się w nowej karcie.</p>
    <h2>Linki wewnętrzne</h2>
    <p>Linki nie muszą kierować do zewnętrznych stron. Mogą też prowadzić do sekcji na tej samej stronie. Należy zdefiniować atrybut <i>id</i> docelowego elementu i odnieść się do niego za pomocą znaku <i>#</i> w adresie linku.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;a href="#paragraf"&gt;Kliknij mnie żeby przejść do paragrafu!&lt;/a&gt;<br />
        &lt;p id="paragraf"&gt;To jest paragraf&lt;/p&gt;<br />
      </code>
    </pre>
    <h2>🔥 Zadanie 🔥</h2>
    <ol>
      <li>Nadaj nagłówkom sekcji unikalne atrybuty id.</li>
      <li>Przekształć elementy spisu treści tak, aby zawierały linki kierujące do odpowiadających im nagłówków. Element <i>a</i> powinien być zagnieżdżony w elemencie <i>li</i>: <br /> <code class="prettyprint">&lt;li&gt;&lt;a href="..."&gt;...&lt;/a&gt;&lt;/li&gt;</code></li>
    </ol>
  </Template>
)

export default Excercise
