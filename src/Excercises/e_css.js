import React from 'react'
import Template from './Template'

import syntax from '../assets/e_css-syntax.gif'

const Excercise = () => (
  <Template nextStep="/">
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
    <p>Selektory możemy ze sobą łączyć:</p>
    <pre class="prettyprint">
      <code language="lang-css">
        p.autor &#123;<br />
        &nbsp;&nbsp;color: red;<br />
        &#125;<br />
      </code>
    </pre>
    <p>Oraz zagnieżdżać:</p>
    <pre class="prettyprint">
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
    <p>Zazwyczaj przy tworzeniu stron używa się bardzo wielu reguł CSS, w związku z czym mogą one zacząć zajmować dużo miejsca w naszym dokumencie. Aby odseparować kod HTML od CSS przenosi się je do osobnego pliku i odpowiednio łączy za pomocą tagu <i>link.</i></p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;<br />
        &lt;/head&gt;<br />
      </code>
    </pre>
    <h2>Kaskadowość</h2>
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
    <h2>🔥 Zadanie 🔥</h2>
    <p>Utwórz plik <i>style.css</i> i załącz go do strony. Stwórz w pliku następujące reguły:</p>
    <ul>
      <li>Zmień kolor i wielkość nagłówka za pomocą selektora - id</li>
      <li>Zmień kolor i wielkość nagłówków drugiego rzędu za pomocą selektora - tagu</li>
      <li>Nadaj elementom <code class="prettyprint">&lt;a&gt;</code> w spisie treści regułę <code class="prettyprint">text-decoration: none;</code> oraz <code class="prettyprint">color: inherit;</code> </li>
    </ul>
  </Template>
)

export default Excercise
