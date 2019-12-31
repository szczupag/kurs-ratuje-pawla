import React from 'react'
import Template from './Template'
import struktura from '../assets/e01_struktura.png'

const Excercise = () => (
  <Template nextStep="/tagowanie-tekstu">
    <h2>HTML to nie język programowania</h2>
    <p>HTML jest językiem znaczników wykorzystywanym do tworzenia stron internetowych, pozwalający opisać ich strukturę i podstawowy wygląd. Do zaawansowanego dostosowywania wyglądu elementów strony wykorzystywane są kaskadowe arkusze stylów (CSS). CSS to lista dyrektyw ustalających sposób w jaki ma zostać wyświetlona zawartość wybranych elementów HTML.</p>
    <h2>HTML to język znaczników</h2>
    <p>Podstawową jednostką języka HTML są zanczniki, zwane też tagami. Listę obsługiwanych tagów oraz ich przeznaczenie możesz sprawdzić <a target="_blank" href="https://developer.mozilla.org/pl/docs/Web/HTML/Element">tutaj</a>. Element HTML składa się z kontentu otoczonego tagiem otwierającym i zamykającym.</p>
    <pre class="prettyprint">
      <code language="lang-html">
        &lt;nazwatagu&gt;Witaj świecie!&lt;/nazwatagu&gt;
            </code>
    </pre>
    <p>Dodatkowo tagi mogą posiadać atrybuty. Zawierają one dodatkowe informacje o elemencie, które nie są widoczne dla użytkowników odwiedzających stronę.</p>
    <pre class="prettyprint">
      <code language="lang-html">
          &lt;nazwatagu atrybut-z-wartoscia="wartość atrybutu" atrybut-bez-wartosci&gt;Witaj świecie!&lt;/nazwatagu&gt;
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
        &nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;<br />
        &lt;/head&gt;<br /><br />
        &lt;body&gt;<br />
        &nbsp;&nbsp;Witaj świecie!<br />
        &lt;/body&gt;<br /><br />
        &lt;/html&gt;
            </code>
    </pre>
    <h2>Meta tag</h2>
    <p>Użyty w kodzie element <i>meta</i> z atrybutem <i>charset</i> ustawia kodowanie dokumentu na UTF-8. Jest to istotne jeśli chcemy na stronie używać znaków diakrytycznych, np. znaki polskie. Drugi element pozwala na zoptymalizowane wyświetlanie strony na urządzeniach mobilnych - będzie ona dopasowana do rozmiarów okna.</p>
    <h2>Samozamykający się tag</h2>
    <p>Element <code class="prettyprint">&lt;meta&gt;</code> wygląda trochę inaczej niż poznane na początku tagi HTML... Nie składa się bowiem ze znacznika otwierającego i zamykającego. Tego typu znaczniki nie zawierają treści, którą mogłyby wyświetlić. Nadal jednak mogą posiadać atrybuty.</p>
    {/* <h2>Znaczniki struktury dokumentu HTML</h2>
        <img src={struktura} />
        <a target="_blank" className="img-source" href="http://www.kurshtmlcss.pl/kurs-html/lekcja1-struktura-dokumentu-html.php">Źródło: kurshtmlcss.pl</a> */}
    <h2>🔥 Zadanie 🔥</h2>
    <p>Wymyśl tytuł dla swojej strony. Znajdź w dokumentacji odpowiedni tag do definiowania tytułu strony i umieść go w elemencie <i>head</i>.</p>
  </Template>
)

export default Excercise
