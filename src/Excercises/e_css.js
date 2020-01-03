import React from 'react'
import Template from './Template'

import syntax from '../assets/e_css-syntax.gif'

const Excercise = () => (
  <Template nextStep="/kolory">
    <h2>CSS</h2>
    <p>Style CSS opisują jak elementy HTML mają zostać wyświetlone przez przeglądarkę. Możemy je dodać do strony na kilka sposobów.</p>
    <h2>Inline style</h2>
    <p>Styl możemy dodać do konkretnego elementu poprzez atrybut <i>style</i>.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;p style="color: red"&gt;John Doe&lt;/p&gt;<br />
      </code>
    </pre>
    <p>Możemy dodać jednocześnie więcej niż jedną regułę, oddzielając je średnikiem.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;p style="color: red; background-color: yellow; font-size: 20px"&gt;John Doe&lt;/p&gt;<br />
      </code>
    </pre>
    <p>A gdybyśmy chcieli użyć tego samego stylu do wielu elementów?</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;p style="color: red; background-color: yellow; font-size: 20px"&gt;John Doe&lt;/p&gt;<br />
        &lt;p style="color: red; background-color: yellow; font-size: 20px"&gt;Jane Doe&lt;/p&gt;<br />
        &lt;p style="color: red; background-color: yellow; font-size: 20px"&gt;James Doe&lt;/p&gt;<br />
        &lt;p style="color: red; background-color: yellow; font-size: 20px"&gt;Jessica Doe&lt;/p&gt;<br />
        ...
      </code>
    </pre>
    <h2>Selektory</h2>
    <p>Jeśli chcemy odnieść się do elementów html należy użyć odpowiedniego selektora. Może to być:</p>
    <ul>
      <li>tag</li>
      <li>klasa</li>
      <li>id</li>
    </ul>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        p &#123;<br />
        &nbsp;&nbsp;color: red;<br />
        &#125;<br />
      </code>
    </pre>
    <p>Selektory możemy ze sobą łączyć:</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        p.autor &#123;<br />
        &nbsp;&nbsp;color: red;<br />
        &#125;<br />
      </code>
    </pre>
    <p>Oraz zagnieżdżać:</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        .autorzy p &#123;<br />
        &nbsp;&nbsp;color: red;<br />
        &#125;<br />
      </code>
    </pre>
    <h2>Reguła CSS</h2>
    <p>Reguła składa się z <i>selektora</i> i <i>bloku deklaracji</i>. Selektor wskazuje element, którego mają dotyczyć style. W bloku zdefiniowane są deklaracje składające się z par <i>właściwość-wartość</i> </p>
    <img src={syntax} />
    <a className="img-source" target="_blank" src="https://www.w3schools.com/css/css_syntax.asp">Źródło: w3schools.com</a>
    <h2>Internal style</h2>
    <p>Aby nie powielać niepotrzebnie tych samych reguł możemy zastosować specjalny tag <code class="prettyprint">&lt;style&gt;</code> w którym zawieramy reguły CSS. Element należy umieścić na końcu sekcji <i>head</i></p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;...<br />
        &nbsp;&lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;p &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;color: red;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;background-color: yellow;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;font-size: 20px;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&lt;/style&gt;<br />
        &lt;/head&gt;<br />
      </code>
    </pre>
    <h2>External style</h2>
    <p>Zazwyczaj przy tworzeniu stron używa się bardzo wielu reguł CSS, w związku z czym mogą one zacząć zajmować dużo miejsca w naszym dokumencie. Aby odseparować warstwę zawartości od prezentacji przenosi się style do osobnego pliku i odpowiednio łączy z plikiem HTML za pomocą tagu <i>link.</i></p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;link rel="stylesheet" type="text/css" href="style.css" /&gt;<br />
        &lt;/head&gt;<br />
      </code>
    </pre>
    <h2>Kaskadowość</h2>
    <p>Kolejność dodawanych przez nas reguł ma znaczenie. Jeśli zdefiniowaliśmy więcej niż jedną regułę dla konkretnego elementu, to pod uwagę będzie brana ta ostatnia.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        p &#123;<br />
        &nbsp;color: red;<br />
        &#125;<br /><br />
        p &#123;<br />
        &nbsp;color: blue;<br />
        &#125;<br />
      </code>
    </pre>
    <p>Pomyślmy teraz o takiej sytuacji - zdefiniowaliśmy kilka reguł dla danego elementu na różne sposoby. Który zostanie użyty?</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;<br />
        &nbsp;&nbsp;&lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;p &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;color: blue;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&lt;/style&gt;<br />
        &lt;/head&gt;<br />
        &lt;body&gt;<br />
        &nbsp;&nbsp;&lt;p style="color: red"&gt;John Doe&lt;p&gt;<br />
        &lt;/body&gt;<br />
      </code>
    </pre>
    <p>Najwyższy priorytet ma styl nadany w atrybucie elementu. Następnie pod uwagę brane są style zawarte w sekcji <i>head</i>. Kolejne style tam załączone nadpisują te poprzedzające. Dopiero na końcu brane są pod uwagę domyślne style przeglądarki.</p>
    <h2>Specificity</h2>
    <p>Który styl zostanie zastosowany dla elementu, jeśli zdefiniowaliśmy je z innymi selektorami? Określa to reguła <i>specificity</i>, oznaczająca że większy priorytet ma styl z bardziej szczegółowym selektorem.<br />Zobrazujmy to na przykładzie! Poniżej mamy dwie reguły. Jedna odnosi się do elementu z klasą autor, druga zaś do tagu span. Drugi selektor jest bardziej ogólny niż pierwszy, dlatego ma niższy priorytet i w związku z tym to właśnie pierwszy styl zostanie naniesiony na element.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;.autor &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;color: red;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&nbsp;span &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;color: blue;<br />
        &nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&lt;/style&gt;<br />
        &lt;/head&gt;<br />
        &lt;body&gt;<br />
        &nbsp;&nbsp;&lt;span class="autor"&gt;John Doe&lt;span&gt;<br />
        &lt;/body&gt;<br />
      </code>
    </pre>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Utwórz plik <i>style.css</i> i załącz go do strony <i>index.html</i> oraz <i>newsletter.html</i>. Stwórz w pliku następujące reguły:</p>
    <ul>
      <li>Dopasuj kolor i wielkość nagłówków wedle uznania.</li>
      <li>Nadaj elementom <code class="prettyprint">&lt;a&gt;</code> w spisie treści regułę <code class="prettyprint lang-css">text-decoration: none;</code> oraz <code class="prettyprint lang-css">color: inherit;</code> </li>
    </ul>
  </Template>
)

export default Excercise
