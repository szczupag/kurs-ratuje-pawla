import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/css">
    <h2>Formularz</h2>
    <p>Element <code class="prettyprint">&lt;form&gt;</code> definiuje formularz, który służy do wporwadzania danych przez użytkownika. Może zawierać różne typy elementów. Pełną listę możesz sprawdzić <a target="_blank" href="https://www.w3schools.com/html/html_form_input_types.asp">tutaj.</a> Do obsługi danych wysłanych przez formularz wykorzystuje się skrypty.</p>
    <h2>Pole tekstowe</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="text" /&gt;<br />
      </code>
    </pre><br />
    <input type="text" />
    <h2>Pole tekstowe z wieloma liniami</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;textarea rows="10" cols="30" /&gt;<br />
      </code>
    </pre><br />
    <textarea rows="10" cols="30" />
    <h2>Dane o określonym formacie</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;label for="emailData"&gt;email: &lt;/label&gt;<br />
        &lt;input type="email" id="emailData" /&gt;&lt;br /&gt;<br /><br />
        &lt;label for="urlData"&gt;adres url: &lt;/label&gt;<br />
        &lt;input type="url" id="urlData" /&gt;&lt;br /&gt;<br /><br />
        &lt;label for="dateData"&gt;data: &lt;/label&gt;<br />
        &lt;input type="date" id="dateData" /&gt;&lt;br /&gt;<br /><br />
        &lt;label for="numberData"&gt;liczba: &lt;/label&gt;<br />
        &lt;input type="number" id="numberData" /&gt;&lt;br /&gt;<br />
      </code>
    </pre><br />
    <label for="emailData">e-mail: </label>
    <input type="email" id="emailData" /><br />
    <label for="urlData">adres url: </label>
    <input type="url" id="urlData" /><br />
    <label for="dateData">data: </label>
    <input type="date" id="dateData" /><br />
    <label for="numberData">liczba: </label>
    <input type="number" id="numberData"></input><br />
    <h2>Pole wielokrotnego wyboru</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="checkbox" name="checkboxGroup" /&gt;<br />
      </code>
    </pre><br />
    <form>
      <input type="checkbox" name="checkboxGroup" /> Wybierz mnie<br />
      <input type="checkbox" name="checkboxGroup" /> Wybierz mnie<br />
      <input type="checkbox" name="checkboxGroup" /> Wybierz mnie
    </form>
    <h2>Pole jednokrotnego wyboru</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="checkbox" name="radioGroup" /&gt;<br />
      </code>
    </pre><br />
    <from>
      <input type="radio" name="radioGroup" /> Wybierz mnie<br />
      <input type="radio" name="radioGroup" /> Wybierz mnie<br />
      <input type="radio" name="radioGroup" /> Wybierz mnie
    </from>
    <h2>Przesyłanie pliku</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="file" /&gt;<br />
      </code>
    </pre><br />
    <input type="file" />
    <h2>Lista rozwijalna</h2>
    <select id="favFruit">
      <option value="snickers">Snickers</option>
      <option value="mars">Mars</option>
      <option value="bounty">Bounty</option>
      <option value="knopers">Knoppers</option>
    </select>
    <h2>Przycisk</h2>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;input type="submit" /&gt;<br />
      </code>
    </pre><br />
    <input type="submit" />
    <h2>Atrybuty</h2>
    <p>W zależności od typu, <i>input</i> może przyjmować różne atrybuty. Na przykład w polu numerycznym możemy wymusić podanie wartości z danego zakresu:</p>
    <span>Liczba pomiędzy 1 a 5</span><br />
    <input style={{ width: "100px" }} type="number" min="1" max="5" /><br /><br />
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
