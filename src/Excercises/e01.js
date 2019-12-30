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
    <p>Dodatkowo tagi mogą posiadać atrybuty. Zawierają one dodatkowe informacje o elemencie, które nie są widoczne dla użytkowników odwiedzających stronę. W poniższym przykładzie <i>class</i> jest nazwą atrybutu, a <i>powitanie</i> jest jego wartością. Atrybut class pozwala nadać elementowi identyfikator, który potem może być użyty na przykład do nadania stylu.</p>
    <pre class="prettyprint">
      <code language="lang-html">
          &lt;p class="powitanie"&gt;Witaj świecie!&lt;/p&gt;
      </code>
    </pre>
    <h2>Deklaracja HTML</h2>
    <p>Jak było wcześniej wspomniane, adres URL może prowadzić do różnego rodzaju plików, nie tylko stron internetowych. Aby przeglądarka rozpoznała nasz plik jako stronę www i poprawnie ją wyświetliła, należy umieścić na początku pliku deklarację:</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;!DOCTYPE HTML&gt;
            </code>
    </pre>
    <p>Cały kod html naszej strony należy następnie umieścić w znaczniku <code class="prettyprint" language="lang-html">&lt;html&gt;</code></p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;!DOCTYPE HTML&gt;<br />
        &lt;html&gt;<br /><br />
        &lt;/html&gt;<br />
      </code>
    </pre>
    <p>Ustawienia naszej strony umieszcza się w głowie <i>(head)</i> dokumentu. Zawiera się tam informacje m.in. o języku naszej strony, tytule, faviconie, a także innych metadanych wykorzystywanych przez przeglądarki internetowe.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;!DOCTYPE HTML&gt;<br />
        &lt;html&gt;<br />
        &nbsp;&nbsp;&lt;head&gt;<br />
        &nbsp;&nbsp;&lt;/head&gt;<br />
        &lt;/html&gt;<br />
      </code>
    </pre>
    <p>Treść strony, czyli wszystko to co ma zostać wyświetlone umieszcza się w ciele dokumentu <i>(body)</i></p>
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
    <h2>Hello World! 👋🏼</h2>
    <p>Stwórzmy naszą pierwszą stronę internetową!</p>
    <p>Otwórz edytor tekstowy, utwórz nowy folder dla naszego projektu, a następnie swtórz plik o nazwie <i>index.html</i>. Przepisz lub skopiuj poniższy kod, zapisz zmiany i otwórz plik w przeglądarce - sprawdź rezultat!</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;!DOCTYPE HTML&gt;<br />
        &lt;html lang="pl"&gt;<br /><br />
        &lt;head&gt;<br />
        &nbsp;&nbsp;&lt;meta charset="utf-8" /&gt;<br />
        {/* &nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;<br /> */}
        &lt;/head&gt;<br /><br />
        &lt;body&gt;<br />
        &nbsp;&nbsp;Witaj świecie!<br />
        &lt;/body&gt;<br /><br />
        &lt;/html&gt;
            </code>
    </pre>
    <h2>Samozamykający się tag</h2>
    <p>W powyższym kodzie pojawił się element <code class="prettyprint">&lt;meta charset="utf-8" /&gt;</code>, który wygląda trochę inaczej... Nie składa się bowiem ze znacznika otwierającego i zamykającego. Tego typu znaczniki nie zawierają treści, którą mogłyby wyświetlić. Nadal jednak mogą posiadać atrybuty. Oprócz tagu <i>meta</i> innym popularnym przykładem jest tag <i>img</i>, za pomocą którego umieszcza sie na stronie obraz. Ten tag również nie przyjmuje w środku treści, bo ścieżkę do docelowego pliku podaje się za pomocą atrybutu <i>src</i>.</p>
    {/* <h2>Znaczniki struktury dokumentu HTML</h2>
        <img src={struktura} />
        <a target="_blank" className="img-source" href="http://www.kurshtmlcss.pl/kurs-html/lekcja1-struktura-dokumentu-html.php">Źródło: kurshtmlcss.pl</a> */}
    <h2>🔥 Zadanie 🔥</h2>
    <p>Wymyśl tytuł dla swojej strony. Znajdź w dokumentacji odpowiedni tag do definiowania tytułu strony i umieść go w elemencie <i>head</i>.</p>
  </Template>
)

export default Excercise
