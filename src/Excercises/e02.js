import React from 'react'
import Template from './Template'

const Excercise = () => (
    <Template nextStep="/lista">
        <h2>Nagłówki</h2>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;h1&gt;Główny nagłówek&lt;/h1&gt;<br />
                &lt;h2&gt;Nagłówek sekcji&lt;/h2&gt;<br />
                ...<br />
                &lt;h6&gt;Pod-pod-...-podtytuł sekcji&lt;/h6&gt;<br />
            </code>
        </pre>
        <p>Te elementy dzielą treść na nagłówki, podtytuły itp. Możemy nadać strukturę strony jak na przykład w książce - podzielić na tytuł główny, rozdziały, podrozdziały. Występuje sześć poziomów nagłówków.</p>
        <h2>Paragrafy</h2>
        <p>Tekst który właśnie czytasz jest owrapowany tagiem <code class="prettyprint">&lt;p&gt;</code>, który służy do oznaczania zwykłej treści.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;To jest paragraf&lt;/p&gt;
            </code>
        </pre>
        <h2>Linki</h2>
        <p>Odnośniki <code class="prettyprint">&lt;a&gt;Kliknij mnie&lt;/a&gt;</code> pozwalają utworzyć z tekstu "klikalny" link. Adres do którego ma on kierować umieszcza się w atrybucie <i>href</i>.</p>
        <h2>Zagnieżdżanie elementów</h2>
        <p>Znaczniki możemy umieszczać wewnątrz innych znaczników, co nazywa się zagnieżdżaniem. Wewnątrz paragrafu możemy umieścić odnośniki, lub możemy chcieć nadać pewnym elementom wyróżniający styl.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;Ta treść zawiera efekt &lt;b&gt;pogrubienia&lt;/b&gt; i &lt;i&gt;kursywy&lt;/i&gt;&lt;/p&gt;<br />
            </code>
        </pre>
        <p>Rezultat:</p>
        <p>Ta treść zawiera efekt <b>pogrubienia</b> i <i>kursywy</i></p>
        <h2>Błędny znacznik!? 😱</h2>
        <p>Co jeśli zrobimy literówkę i użyjemy znacznika który nie istnieje? Czy nasza strona przestanie działać? Na szczęście nic z tych rzeczy! Tagi nierozpoznane przez przeglądarkę zostaną zignorowane.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;mytag&gt;Czy ja zostanę wyświetlony?&lt;/mytag&gt;<br />
            </code>
        </pre>
        <h2>Inne błędy z którymi nie jest już tak przyjemnie...</h2>
        <p><i><b>Syntaktyka</b> określa nam składnię danego języka, reguły poprawnego stosowania znaczników, atrybutów, encji.</i></p>
        <p>Warto przyjąć bezpieczną zasadę, że przeglądarka nie jest dobrym weryfikatorem poprawności naszej strony. Bywają one czasem miłosierne i wyświetlają strony z błędami. O jakich błędach mowa? Chociażby niedomknięte znaczniki, albo niedozwolone ich przemieszczanie, jak poniżej:</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;b&gt;&lt;i&gt;Nie jestem poprawnie zagnieżdżony&lt;/b&gt;&lt;/i&gt;<br />
            </code>
        </pre>
        <p>Czasem może się wydawać, że błąd jest niewidoczny, ale w pratyce może on wpływać w nieoczekiwany sposób na wygląd całej strony! Dlatego warto używać zaawansowanych edytorów tekstowych, które automatycznie zamykają znaczniki i alarmują o potencjalnych błędach.</p>
        <h2>🔥 Zadanie 🔥</h2>
        <p>Zastąp paragraf <code class="prettyprint">&lt;p&gt;Witaj świecie!&lt;/p&gt;</code> głównym tytułem strony. Poniżej utwórz dwie sekcje z nagłówkami i treścią. Zastosuj znaczniki pogrubienia i kursywy. Umieść w jedym z paragrafów link do strony, która nawiązuje do jego treści. W międzyczasie spróbuj zapisać stronę z błędem. Sprawdź jak wpływa to na wygląd strony oraz czy twój edytor wykrył ten błąd. Przed przejściem do kolejnego etapu napraw błąd i zapisz plik.</p>
    </Template>
)

export default Excercise
