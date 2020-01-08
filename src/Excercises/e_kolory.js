import React from 'react'
import Template from './Template'

const box = {
  color: "white",
  fontSize: "0.7em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "25%",
  height: "100px",
  borderRadius: "4px"
}

const Excercise = () => (
  <Template nextStep="/font">
    <h2>Kolory</h2>
    <p>Kolory określa się używając predefiniowanych nazw lub wartości RGB, HEX i innych palet. Dla przykładu poniżej znajduje się opis tego samego koloru na różne sposoby:</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        .box &#123;<br />
          &nbsp;&nbsp;background-color: tomato;<br />
        &#125;<br /><br />
        .box &#123;<br />
          &nbsp;&nbsp;background-color: rgb(255, 99, 71);<br />
        &#125;<br /><br />
        .box &#123;<br />
          &nbsp;&nbsp;background-color: #ff6347;<br />
        &#125;
      </code>
    </pre>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div style={{ backgroundColor: "tomato", ...box }}>tomato</div>
      <div style={{ backgroundColor: "rgb(255, 99, 71)", ...box }}>rgb(255, 99, 71)</div>
      <div style={{ backgroundColor: "#ff6347", ...box }}>#ff6347</div>
    </div>
    <h2>RGB</h2>
    <p>Składa się z 3 składowych przyjmujących wartości z zakresu od 0 do 255</p>
    <ul>
      <li>R - red</li>
      <li>G - green</li>
      <li>B - blue</li>
    </ul>
    <p>rgb(0, 0, 0) dopowiada kolorowi białemu, a rgb(255, 255, 255) czarnemu.</p>
    <h2>HEX</h2>
    <p>Kolor składa się ze składowych #rrggbb, gdzie wartości</p>
    <ul>
      <li>rr - red</li>
      <li>gg - green</li>
      <li>bb - blue</li>
    </ul>
    <p>są liczbami w systemie szesnastkowym z zakresu 00 do ff (równowartość wartości dziesiętnych z zakresu 0 - 255). Na przykład #ff0000 będzie odpowiadać kolorowi czerwonemu.</p>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Nadaj tło elementowi <i>body</i> oraz elementom z klasą <i>content</i> i <i>sidebar</i> za pomocą palety kolorów RGB lub HEX. W wyborze kolorów może pomóc Ci narzędzie <a target="_blank" href="https://www.google.com/search?q=color+picker">Color Picker</a>.</p> 
  </Template>
)

export default Excercise
