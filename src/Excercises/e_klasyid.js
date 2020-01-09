import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/link">
    <h2>Class</h2>
    <p>Atrybut <i>class</i> służy do oznaczenia elementów, które mają mieć nadany ten sam styl lub ma na nie zadziałać odpowiedni skrypt. Tą samą klasę może mieć wiele elementów, nawet różnego rodzaju.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;p class="autor"&gt;John Doe&lt;/p&gt;<br />
        &lt;p class="autor"&gt;Jane Doe&lt;/p&gt;<br />
      </code>
    </pre>
    <h2>Id</h2>
    <p>Atrybut <i>id</i> ma podobne zastosowanie co <i>class</i>. Nadawane jest żeby przypisać elementowi styl, żeby można było odnieść się do elementu w <i>JavaScript</i> lub stworzyć link prowadzący do tego elementu. Id musi być unikalne.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;p id="dyrektor"&gt;John Doe&lt;/p&gt;<br />
        &lt;p id="wicedyrektor"&gt;Jane Doe&lt;/p&gt;<br />
      </code>
    </pre>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Nadaj liście klasę <i>menu</i>.</p>
  </Template>
)

export default Excercise
