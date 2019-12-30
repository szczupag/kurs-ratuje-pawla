import React from 'react'
import Template from './Template'
import diagram from '../assets/e00_diagram.png'

const Excercise = () => (
  <Template nextStep="/struktura-html">
    <h2>Witaj na kursie!</h2>
    <p>Dziękujemy za zapisanie się na charytatywny kurs - Podstawy HTML i CSS! Podczas warsztatów nauczysz się tworzyć proste strony internetowe, a także obsługiwać narzędzia z nimi związane.</p>
    <p>Kurs podzielony jest na zadania. Każdy kolejny krok zbliży Cię do ukończenia Twojej pierwszej strony internetowej! W każdym rozdziale znajduje się krótki wstęp teoretyczny, który jest szerzej omawiany podczas trwania warsztatów, ale pozwoli Ci wrócić po ukończeniu kursu do interesujących Cię zagadnień.</p>
    <h2>Planowanie</h2>
    <p>Pomyśl o czym chcesz utworzyć stronę. Jakie informacje ma zawierać? Jakiego użyjesz tła, obrazów, kolorów, czcionek?</p>
    <h2>Jakich narzędzi potrzebujemy? 🛠</h2>
    <p>Minimum potrzebne do stworzenia strony www, to:</p>
    <ul>
      <li>edytor tekstu - notatnik lub IDE: Visual Studio Code, Atom, Brackets, Sublime Text</li>
      <li>nowoczesna przeglądarka internetowa - Chorme, Firefox, Opera, Safari</li>
    </ul>
    <p>Podczas kursu zalecanym edytorem jest <a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a> oraz przeglądarka Chrome.</p>
    <h2>Jak w ogóle działa internet? 🤔</h2>
    <p>Pomyśl o tym jak otwierasz swoją ulubioną stronę internetową. Czy wiesz co się dzieje po wpisaniu adresu URL w oknie przeglądarki? Co sprawia że strona się nam wyświetla?</p>
    <h2>Adres URL</h2>
    <p>Zacznijmy od przeanalizowania wpisywanych przez nas w przeglądarkach adresów URL. Składa się on z:</p>
    <ul>
      <li>protokołu http
        <ul>
          <li>http</li>
          <li>https</li>
          <li>ftp</li>
        </ul>
      </li>
      <li>nazwy hosta (adresu serwera)</li>
      <li>ścieżki dostępu do zasobu</li>
    </ul>
    <p>Wpisując adres w nowoczesnej przeglądarce nie musimy podawać protokołu. Jest on automatycznie dodawany przez przeglądarkę.</p>
    <h2>DNS</h2>
    <p>Prawdziwe adresy nie wyglądają zbyt ładnie. Są to unikalne adresy IP, składające się z ciągu liczb. Ciężko byłoby je zapamiętać w takiej formie. Dlatego z pomocą przychodzą serwery DNS, które tłumaczą znane nam adresy stron na ich prawdziwe adresy IP.</p>
    <h2>🔥 Zadanie 🔥</h2>
    <p>Wejdź na stronę <a target="_blank" href="https://ipinfo.info/html/ip_checker.php">IP Checker</a> i wpisz adres dowolnej strony internetowej (np. wp.pl) żeby sprawdzić jej adres IP. Następnie wpisz adres IP w oknie przeglądarki i przekonaj się czy strona zostanie wyświetlona.</p>
    <h2>Jak to się dzieje...</h2>
    <p>Co dokładnie dzieje się gdy wpisujemy w przeglądarce adres URL i wciskamy enter?</p>
    <p>Role komputerów podłączonych do sieci internetowej dzielimy na klientów i serwery. Adres URL może prowadzić do różnych rodzajów plików zapisanych na serwerze. My będziemy rozpatrywać pliki o rozszerzeniu .html, które zawierają kontent stron internetowych. </p>
    <img src={diagram} />
    <a target="_blank" className="img-source" href="https://www.makeschool.com/academy/track/web-dev-summer-academy-2018/how-the-internet-works/how-the-internet-works">Źródło: makeschool.com</a>
    <ol>
      <li>Przeglądarka pyta serwer DNS o prawdziwy adres serwera</li>
      <li>Przeglądarka wysyła request HTTP do serwera (za pomocą protokołu TCP/IP) z prośbą o odesłanie pliku zawierającego stronę internetową</li>
      <li>Jeśli serwer zaakceptuje żądanie klienta, odesyła wiadomość ze statusem 200 oraz pliki żądanej strony</li>
      <li>Przeglądarka gromadzi nadesłane pliki i wyświetla stronę</li>
    </ol>
    <h2>HTML to nie język programowania</h2>
    <p>HTML jest językiem znaczników wykorzystywanym do tworzenia stron internetowych, pozwalający opisać ich strukturę i podstawowy wygląd. Do zaawansowanego dostosowywania wyglądu elementów strony wykorzystywane są kaskadowe arkusze stylów (CSS). CSS to lista dyrektyw ustalających sposób w jaki ma zostać wyświetlona zawartość wybranych elementów HTML.</p>
    {/* Kaskadowość oznacza, że zdefiniowane w stylach reguły dominują nad definicjami wcześniejszymi. */}
    {/* <p>W wyborze kolorów może pomóc ci narzędzie <a target="_blank" href="https://www.google.com/search?q=color+picker">Color Picker</a>.</p>  */}
    {/* <p>W <a target="_blank" href="https://www.google.com/imghp?gws_rd=ssl">Google Images</a> możesz znaleźć odpoiednie obrazy.</p>
        <ul>
            <li>Wyszukaj interesujący Cię obraz i kliknij w niego.</li>
            <li>Kliknij prawym przyciskiem myszy na podgląd i wybierz <i>Zapisz obraz jako</i> i zapisz w folderze projektu.</li>
        </ul> */}
  </Template>
)

export default Excercise
