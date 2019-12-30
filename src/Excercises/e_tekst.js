import React from 'react'
import Template from './Template'

const Excercise = () => (
    <Template nextStep="/lista">
        <h2>Tagowanie tekstu</h2>
        <p>Tekst umieszczony przez nas w <i>body</i> został wyświetlony poprawnie w przeglądarce. Gdybyśmy dodali kolejne akapity tekstu, będą one wyświetlone ciągiem - nasz dokument nie jest uporządkowany i nie wygląda atrakcyjnie! Do porządkowania treści służą odpowiednie znaczniki.</p>
        <h2>Nagłówki</h2>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;h1&gt;Główny nagłówek&lt;/h1&gt;<br />
                &lt;h2&gt;Nagłówek drugiego rzędu&lt;/h2&gt;<br />
                ...<br />
                &lt;h6&gt;Nagłówek szóstego rzędu&lt;/h6&gt;<br />
            </code>
        </pre>
        <p>Te elementy dzielą treść na nagłówki, podtytuły itp. Możemy nadać strukturę strony jak na przykład w książce - podzielić na tytuł główny, rozdziały, podrozdziały. Występuje sześć poziomów nagłówków. Nagłówki powinne być używane z zachowaniem kolejności ich rzędów.</p>
        <h2>Paragrafy</h2>
        <p>Tekst który właśnie czytasz jest owrapowany tagiem <code class="prettyprint">&lt;p&gt;</code>, który służy do oznaczania zwykłej treści.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;To jest paragraf&lt;/p&gt;
            </code>
        </pre>
        <p>Jeśli chcemy umieścić część tekstu paragrafu<br />w nowej linii,<br />to użycie <i>enter</i> w edytorze niestety nie zadziała, ponieważ przeglądarka interpretując kod html pomija tzw. <i>białe znaki</i>. Zamiast tego należy użyć znacznika <code class="prettyprint">&lt;br /&gt;</code><i> (break line).</i></p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;To jest paragraf&lt;br /&gt;z tekstem w nowej linii.&lt;/p&gt;
            </code>
        </pre>
        <h2>Linia horyzontalna</h2>
        <p>Do odgradzania treści używa się elementu <code class="prettyprint">&lt;hr /&gt;</code> <i>(horizontal rule)</i></p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;h1&gt;To jest tytuł&lt;/h1&gt;<br />
                &lt;p&gt;To jest paragraf&lt;/p&gt;<br />
                &lt;hr /&gt;<br />
                &lt;p&gt;To jest odgrodzony paragraf&lt;/p&gt;<br />
            </code>
        </pre>
        <h2>Zagnieżdżanie elementów</h2>
        <p>Znaczniki możemy umieszczać wewnątrz innych znaczników, co nazywa się zagnieżdżaniem. Wewnątrz paragrafu możemy umieścić odnośniki lub możemy nadać pewnym elementom wyróżniający styl.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;Ta treść zawiera efekt &lt;b&gt;pogrubienia&lt;/b&gt; i &lt;i&gt;kursywy&lt;/i&gt;&lt;/p&gt;<br />
            </code>
        </pre>
        <p>Ta treść zawiera efekt <b>pogrubienia</b> i <i>kursywy</i></p>
        <p>Inne przykłday elementów formatujących tekst to m.in.:</p>
        <ul>
          <li><code class="prettyprint">&lt;mark&gt;</code> - wyróżnienie</li>
          <li><code class="prettyprint">&lt;s&gt;</code> - przekreślenie</li>
          <li><code class="prettyprint">&lt;sup&gt;</code> - indeks górny</li>
          <li><code class="prettyprint">&lt;sub&gt;</code> - indeks dolny</li>
          <li><code class="prettyprint">&lt;small&gt;</code> - pomniejszenie</li>
        </ul>
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
        <h2>Komentarze</h2>
        <p>W kodzie możemy umieszczać tekst, który będzie niewidoczny na naszej stronie. Możemy w ten sposób robić sobie notatki lub ukrywać niepotrzebne chwilowo fragmenty kodu.</p>
        <pre class="prettyprint">
            <code language="lang-html">
                &lt;p&gt;To jest paragraf&lt;/p&gt;<br />
                &lt;!-- Pamiętaj żeby dodać więcej tekstu w powyższym paragrafie --&gt;<br />
                <br />
                &lt;p&gt;Ten paragraf będzie wyświetlony&lt;/p&gt;<br />
                &lt;!-- &lt;p&gt;Ten paragraf będzie ukryty&lt;/p&gt; --&gt;<br />
            </code>
        </pre>
        <h2>🔥 Zadanie 🔥</h2>
        <ol>
          <li>Zastąp tekst <i>Witaj świecie!</i> głównym tytułem strony.</li>
          <li>Utwórz dwie sekcje z nagłówkami i treścią. Odseparuj je linią horyzontalną.</li>
          <li>Zastosuj w tekście dowolny znacznik formatujący treść.</li>
          <li>Spróbuj zapisać stronę z błędem, na przykład niedomkniętym znacznikiem. Sprawdź jak wpływa to na wygląd strony oraz czy twój edytor wykrył ten błąd.</li>
          <li>Przed przejściem do kolejnego etapu napraw błąd i zapisz plik.</li>
        </ol>
    </Template>
)

export default Excercise
