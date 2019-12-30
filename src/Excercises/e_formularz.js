import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/css">
    <h2>Formularz</h2>
    <p>Element <code class="prettyprint">&lt;form&gt;</code> definiuje formularz, który służy do wporwadzania danych przez użytkownika. Może zawierać różne typy elementów. Pełną listę możesz sprawdzić <a target="_blank" href="https://www.w3schools.com/html/html_form_input_types.asp">tutaj.</a> Do obsługi danych wysłanych przez formularz wykorzystuje się skrypty.</p>
    <h2>Pole tekstowe</h2>
    <input type="text" /><br /><br />
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="text" /&gt;<br />
      </code>
    </pre>
    <h2>Pole wielokrotnego wyboru</h2>
    <input type="checkbox" /><br /><br />
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="checkbox" /&gt;<br />
      </code>
    </pre>
    <h2>Przycisk</h2>
    <input type="submit" /><br /><br />
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="submit" /&gt;<br />
      </code>
    </pre>
    <h2>Atrybuty</h2>
    <p>W zależności od typu, <i>input</i> może przyjmować różne atrybuty. Na przykład w polu numerycznym możemy wymusić podanie wartości z danego zakresu:</p>
    <span>Liczba pomiędzy 1 a 5</span><br />
    <input style={{width: "100px"}} type="number" min="1" max="5" /><br /><br />
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;span&gt;Liczba pomiędzy 1 a 5&lt;/span&gt;&lt;br /&gt;<br />
        &lt;input type="number" min="1" max="5" /&gt;<br />
      </code>
    </pre>
    <p>Często używanym atrybutem w formularzach jest <i>required</i>, który wymusza wypełnienie danego pola przed wysłaniem formularza.</p>
    <h2>Przykład</h2>
    <form>
      <span>Login: </span>
      <input type="text" name="login" required /><br />
      <span>Hasło: </span>
      <input type="password" name="haslo" required /><br />
      <input type="checkbox" name="zapamietaj" /><small>zapamiętaj moje dane logowania</small><br />
      <input type="submit" />
    </form>
    <br />
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;span&gt;Login:&lt;/span&gt;<br />
        &lt;input type="text" name="login" required /&gt;&lt;br /&gt;<br />
        &lt;span&gt;Hasło:&lt;/span&gt;<br />
        &lt;input type="password" name="haslo" required /&gt;&lt;br /&gt;<br />
        &lt;input type="checkbox" name="zapamietaj" /&gt;&lt;small&gt;zapamiętaj moje dane logowania&lt;/small&gt;&lt;br /&gt;<br />
        &lt;input type="submit" /&gt;<br />
      </code>
    </pre>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Stwórz formularz do newslettera o poniższej strukturze, dobierając odpowiednie rodzaje pól i ich atrybuty</p>
    <ul>
      <li>Imię</li>
      <li>Adres email*</li>
      <li>Jak często chcesz otrzymywać nasz newsletter?
        <ul>
          <li>codziennie</li>
          <li>raz w tygodniu</li>
          <li>raz w miesiącu</li>
        </ul>
      </li>
      <li>Zgadzam się na przetwarzanie moich danych osobowych*</li>
      <li>Wyślij</li>
      <li>* pola wymagane</li>
    </ul>
  </Template>
)

export default Excercise
