import React from 'react'
import Template from './Template'

const Excercise = () => (
  <Template nextStep="/tlo">
    <h2>Font</h2>
    <p>Kolory i czcionki dobrane z zamysłem korzystnie wpływają na efekt końcowy naszej strony. Do wyboru mamy niezliczoną ilość krojów pisma. Jednakże nie na każdym komputerze zainstalowane są te same czcionki co u nas. Musimy więc zapewnić, aby mimo to użytkownikowi wyświetlił się bez problemu wybrany przez nas krój. W tym celu należy do dokumentu HTML załączyć plik z <i>wyrenderowaną</i> czcionką. Możemy to zrobić w bardzo prosty sposób!</p>
    <h2>Google Fonts</h2>
    <p>W internecie możemy znaleźć wiele stron z darmowymi fontami. Jedną z najbardziej popularnych jest <a target="_blank" href="https://www.google.com/fonts">Google Fonts</a>. Zawarte tu fonty można <i>podlinkować</i> do naszej strony ale także pobrać i zainstalować lokalnie na komputerze. Podczas wybierania należy zwrócić uwagę, czy dany krój zawiera polskie znaki i wybrać odpowiednie opcje, a by zostały one dołączone do paczki.</p>
    <p>Po wybraniu kroju wygenerowany zostanie kod, podobny do tego którego używaliśmy przy dołączaniu zewnętrznych stylów. Należy go również umieścić w sekcji <i>head</i>.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;!DOCTYPE HTML&gt;<br />
        &lt;html&gt;<br />
        &nbsp;&nbsp;&lt;head&gt;<br />
        &nbsp;&nbsp;&lt;/head&gt;<br />
        &nbsp;&nbsp;&lt;body&gt;<br />
        &nbsp;&nbsp;&lt;/body&gt;<br />
        &lt;/html&gt;<br />
      </code>
    </pre>
    <h2>🔥 Zadanie 🔥</h2>
    <p></p> 
  </Template>
)

export default Excercise
