import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/inline-vs-block">
    <h2>Zróbmy naszą stronę bardziej atrakcyjną</h2>
    <p>Aby przyciągnąć czytelników najlepiej umieścić ciekawe grafiki lub obrazy.</p>
    <p>W celu umieszczenia obrazu na stronie używa się elementu <i>img</i>, podając w jego atrybucie <i>src</i> ścieżkę do pliku. Ścieżka może prowadzić do pliku w folderze zawierającym nasz projekt lub umieszczonego na zewnętrznym serwerze.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;img src="malinka.png" /&gt;<br />
        &lt;img src="https://occupied-client.herokuapp.com/assets/img/malinka.png" /&gt;<br />
      </code>
    </pre>
    <h2>Tekst alternatywny</h2>
    <p>Bardzo ważne jest, aby w każdym elemencie <i>img</i> definiować atrybut <i>alt</i> (tekst alternatywny) opisujący obraz. Tekst alternatywny pojawia się na stronie gdy plik źródłowy nie może zostać wczytany przez przeglądarkę, a także podczas interpretacji przez czytnik ekranowy, np. dla osoby niewidomej. Jest on też analizowany przez <i>roboty</i> wpływające na pozycjonowanie naszej strony.</p>
    <p>Prawidłowy opis pozwala nam wyobrazić sobie co dokładnie przedstawia zdjęcie.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;img src="malinka.png" alt="Logo"/&gt; &lt;!-- średnie --&gt;<br />
        &lt;img src="malinka.png" alt="Malinka"/&gt; &lt;!-- nie najgorsze --&gt;<br />
        &lt;img src="malinka.png" alt="Uśmiechnięta malinka siedząca na sedesie."/&gt; &lt;!--bardzo dobre --&gt;<br />
      </code>
    </pre>
    <p>Do naszego obrazu możemy też dodać tytuł - będzie on wyświetlany po najechaniu kursorem na obraz</p>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Znajdź w <a target="_blank" href="https://www.google.com/imghp?gws_rd=ssl">Google Images</a> dwa obrazy pasujące do Twojej strony i dodaj je do projektu:</p>
    <ul>
      <li>Wyszukaj interesujący Cię obraz i kliknij w niego.</li>
      <li>Kliknij prawym przyciskiem myszy na podgląd i wybierz <i>Zapisz obraz jako</i>, następnie zapisz plik w folderze projektu.</li>
    </ul>
    <p>Następnie umieść jeden obraz pod głównym nagłówkiem i nadaj mu tekst alternatywny. Drugi obraz użyjemy później!</p>
  </Template>
)

export default Excercise
