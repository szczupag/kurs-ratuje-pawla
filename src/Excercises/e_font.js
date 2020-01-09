import React from 'react'
import Template from './Template'

import fonts from '../assets/fonts.png'

const Excercise = () => (
  <Template nextStep="/tlo">
    <h2>Font</h2>
    <p>Kolory i czcionki dobrane z zamysłem korzystnie wpływają na efekt końcowy naszej strony. Do wyboru mamy niezliczoną ilość krojów pisma. Jednakże nie na każdym komputerze zainstalowane są te same czcionki co u nas. Musimy więc zapewnić, aby mimo to użytkownikowi wyświetlił się bez problemu wybrany przez nas krój. W tym celu należy do dokumentu HTML załączyć plik z <i>wyrenderowaną</i> czcionką. Możemy to zrobić w bardzo prosty sposób!</p>
    <img src={fonts} />
    <a target="_blank" className="img-source" href="https://internetingishard.com/">Źródło: internetingishard.com</a>
    <h2>Google Fonts</h2>
    <p>W internecie możemy znaleźć wiele stron z darmowymi fontami. Jedną z najbardziej popularnych jest <a target="_blank" href="https://www.google.com/fonts">Google Fonts</a>. Zawarte tu fonty można <i>podlinkować</i> do strony ale także pobrać i zainstalować lokalnie na komputerze. Podczas wybierania należy zwrócić uwagę, czy dany krój zawiera polskie znaki i wybrać odpowiednie opcje, a by zostały one dołączone do paczki.</p>
    <h2>Podłączanie fontów do strony</h2>
    <p>Po wybraniu kroju na stronie Google Fonts wygenerowany zostanie kod, podobny do tego którego używaliśmy przy dołączaniu zewnętrznych stylów. Należy go również umieścić w sekcji <i>head</i>.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;!DOCTYPE HTML&gt;<br />
        &lt;html&gt;<br />
        &nbsp;&nbsp;&lt;head&gt;<br />
        &nbsp;&nbsp;&lt;link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&amp;display=swap&amp;subset=latin-ext"&gt;<br />
        &nbsp;&nbsp;&lt;/head&gt;<br />
        &nbsp;&nbsp;&lt;body&gt;<br />
        &nbsp;&nbsp;&lt;/body&gt;<br />
        &lt;/html&gt;<br />
      </code>
    </pre>
    <p>Ale to nie wszystko... Musimy wskazać przeglądarce w stylach CSS które elementy mają mieć zastosowaną daną czcionkę. Google Fonts wskazuje jakiej reguły należy użyć do wybranego kroju.</p>
    <pre class="prettyprint lang-css">
      <code language="lang-css">
        body &#123;<br />
        &nbsp;font-family: 'Roboto', sans-serif;<br />
        &#125;<br />
      </code>
    </pre>
    <p>Nadając font elementowi body, wszystkie elementy w środku będą dziedziczyć tą regułę. W ten sposób możemy ustawić domyślną czcionkę na naszej stronie.</p>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Wybierz na stronie <a target="_blank" href="https://www.google.com/fonts">Google Fonts</a> 2 kroje pisma i zastosuj je do nagłówków oraz treści.</p> 
  </Template>
)

export default Excercise
