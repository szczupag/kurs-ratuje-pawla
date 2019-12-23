import React from 'react'
import Template from './Template'
import struktura from '../assets/e01_struktura.png'

const Excercise = () => (
    <Template nextStep="/tagowanie-tekstu">
        <h2>HTML to język znaczników</h2>
        <p>Podstawową jednostką języka HTML są zanczniki, zwane też tagami. Listę obsługiwanych tagów oraz ich przeznaczenie możesz sprawdzić <a target="_blank" href="https://developer.mozilla.org/pl/docs/Web/HTML/Element">tutaj</a>. Element HTML składa się z kontentu otoczonego tagiem otwierającym i zamykającym.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;Witaj świecie!&lt;/p&gt;
            </code>
        </pre>
        <p>Dodatkowo tagi mogą posiadać atrybuty. Zawierają one dodatkowe informacje o elemencie, które nie są widoczne dla użytkowników odwiedzających stronę. W poniższym przykładzie <i>class</i> jest nazwą atrybutu, a <i>powitanie</i> jest jego wartością. Atrybut class pozwala nadać elementowi indentyfikator, który potem może być użyty na przykład do nadania stylu.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p class="powitanie"&gt;Witaj świecie!&lt;/p&gt;
            </code>
        </pre>
        <h2>Znaczniki struktury dokumentu HTML</h2>
        <img src={struktura} />
        <a target="_blank" className="img-source" href="http://www.kurshtmlcss.pl/kurs-html/lekcja1-struktura-dokumentu-html.php">Źródło: kurshtmlcss.pl</a>
        <h2>Hello World! 👋🏼</h2>
        <p>Stwórzmy naszą pierwszą stronę internetową!</p>
        <p>Otwórz edytor tekstowy, utwórz nowy folder dla naszego projektu, a następnie swtórz plik o nazwie index.html. Przepisz lub skopiuj poniższy kod, zapisz zmiany i otwórz plik w przeglądarce - sprawdź rezultat!</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;!DOCTYPE HTML&gt;<br />
                &lt;html lang="pl"&gt;<br /><br />
                &lt;head&gt;<br />
                &nbsp;&nbsp;&lt;meta charset="utf-8" /&gt;<br />
                &nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;<br />
                &lt;/head&gt;<br /><br />
                &lt;body&gt;<br />
                &nbsp;&nbsp;&lt;p&gt;Witaj świecie!&lt;/p&gt;<br />
                &lt;/body&gt;<br /><br />
                &lt;/html&gt;
            </code>
        </pre>
        <h2>🔥 Zadanie 🔥</h2>
        <p>Wymyśl tytuł dla swojej strony i umieść go w elemencie <i>head</i> za pomocą odpowiedniego taga.</p>
    </Template>
)

export default Excercise
