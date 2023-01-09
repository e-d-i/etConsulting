import React from "react";
import Link from "next/link";
import styles from "../styles/Impressum.module.css";

function Impressum() {
  return (
    <div className={styles.container}>
      <section className={styles.sectionContainerImpressum}>
        <h1 className={styles.h1}>Impressum</h1>
        <h2 className={styles.h2}>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <h3 className={styles.h3}>Betreiber der Website</h3>
        <div className={styles.para}>
          <p className={styles.p}>
            <span className={styles.pSubtitle}>E.T. Consulting</span>
            <br />
            Eduard Theiss, M.A.
            <br />
            Kitzb&uuml;heler Weg, 70469 Stuttgart
            <br />
            <span>E-Mail: </span>
            <Link href="mailto:info@e-t-consulting.com">
              info&#x40;e-t-consulting.com
            </Link>
            <br />
            <span>Web: </span>
            <Link href="http://www.e-t-consulting.com">
              http://www.e-t-consulting.com
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.sectionContainerCredits}>
        <h2 className={styles.h2}>Credits</h2>
        <div className={styles.para}>
          <p className={styles.p}>
            <span className={styles.pSubtitle}>Video &amp; Fotografie</span>
            <br />
            Hintergrundvideo von Ekaterina Bolovtsova
            <br />
            <span>Link: </span>
            <Link href="https://www.pexels.com/video/flatlay-modern-gadgets-6185684/">
              https://www.pexels.com/video/flatlay-modern-gadgets-6185684/
            </Link>
            <br />
            Illustration von pch.vector auf Freepik
            <br />
            <span>Link: </span>
            <Link href="https://www.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_10606192.htm#query=success&position=6&from_view=search&track=sph">
              https://www.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_10606192.htm#query=success&position=6&from_view=search&track=sph
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.sectionContainerDisclaimer}>
        <h2 className={styles.h2}>Haftungsausschluss &#x28;Disclaimer&#x29;</h2>
        <div className={styles.para}>
          <p>
            Trotz sorgf&auml;ltiger inhaltlicher Kontrolle &uuml;bernehmen wir
            keine Haftung f&uuml;r die Inhalte externer Links. F&uuml;r den
            Inhalt der verlinkten Seiten sind ausschlie&szlig;lich deren
            Betreiber verantwortlich.
          </p>
          <p className={styles.p}>
            <br />
            <span className={styles.pSubtitle}>
              1. Inhalt des Onlineangebotes
            </span>
            <br />
            Der Autor &uuml;bernimmt keinerlei Gew&auml;hr f&uuml;r die
            Aktualit&auml;t, Korrektheit, Vollst&auml;ndigkeit oder
            Qualit&auml;t der bereitgestellten Informationen.
            Haftungsanspr&uuml;che gegen den Autor, welche sich auf Sch&auml;den
            materieller oder ideeller Art beziehen, die durch die Nutzung oder
            Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
            fehlerhafter und unvollst&auml;ndiger Informationen verursacht
            wurden, sind grunds&auml;tzlich ausgeschlossen, sofern seitens des
            Autors kein nachweislich vors&auml;tzliches oder grob
            fahrl&auml;ssiges Verschulden vorliegt. Alle Angebote sind
            freibleibend und unverbindlich. Der Autor beh&auml;lt es sich
            ausdr&uuml;cklich vor, Teile der Seiten oder das gesamte Angebot
            ohne gesonderte Ank&uuml;ndigung zu ver&auml;ndern, zu
            erg&auml;nzen, zu l&ouml;schen oder die Ver&ouml;ffentlichung
            zeitweise oder endg&uuml;ltig einzustellen.
          </p>
          <p className={styles.p}>
            <span className={styles.pSubtitle}>2. Verweise und Links</span>
            <br />
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            &#x28;“Hyperlinks”&#x29;, die au&szlig;erhalb des
            Verantwortungsbereiches des Autors liegen, w&uuml;rde eine
            Haftungsverpflichtung ausschlie&szlig;lich in dem Fall in Kraft
            treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm
            technisch m&ouml;glich und zumutbar w&auml;re, die Nutzung im Falle
            rechtswidriger Inhalte zu verhindern. Der Autor erkl&auml;rt hiermit
            ausdr&uuml;cklich, dass zum Zeitpunkt der Linksetzung keine
            illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren.
            Auf die aktuelle und zuk&uuml;nftige Gestaltung, die Inhalte oder
            die Urheberschaft der verlinkten/verkn&uuml;pften Seiten hat der
            Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit
            ausdr&uuml;cklich von allen Inhalten aller verlinkten
            /verkn&uuml;pften Seiten, die nach der Linksetzung ver&auml;ndert
            wurden. Diese Feststellung gilt f&uuml;r alle innerhalb des eigenen
            Internetangebotes gesetzten Links und Verweise sowie f&uuml;r
            Fremdeintr&auml;ge in vom Autor eingerichteten
            G&auml;steb&uuml;chern, Diskussionsforen, Linkverzeichnissen,
            Mailinglisten und in allen anderen Formen von Datenbanken, auf deren
            Inhalt externe Schreibzugriffe m&ouml;glich sind. F&uuml;r illegale,
            fehlerhafte oder unvollst&auml;ndige Inhalte und insbesondere
            f&uuml;r Sch&auml;den, die aus der Nutzung oder Nichtnutzung
            solcherart dargebotener Informationen entstehen, haftet allein der
            Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der
            &uuml;ber Links auf die jeweilige Ver&ouml;ffentlichung lediglich
            verweist.
          </p>
          <p className={styles.p}>
            <span className={styles.pSubtitle}>
              3. Urheber- und Kennzeichenrecht
            </span>
            <br />
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte
            zu beachten, von ihm selbst erstellte Bilder, Grafiken,
            Tondokumente, Videosequenzen und Texte zu nutzen oder auf
            lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte
            zur&uuml;ckzugreifen. Alle innerhalb des Internetangebotes genannten
            und ggf. durch Dritte gesch&uuml;tzten Marken- und Warenzeichen
            unterliegen uneingeschr&auml;nkt den Bestimmungen des jeweils
            g&uuml;ltigen Kennzeichenrechts und den Besitzrechten der jeweiligen
            eingetragenen Eigent&uuml;mer. Allein aufgrund der blo&szlig;en
            Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht
            durch Rechte Dritter gesch&uuml;tzt sind! Das Copyright f&uuml;r
            ver&ouml;ffentlichte, vom Autor selbst erstellte Objekte bleibt
            allein beim Autor der Seiten. Eine Vervielf&auml;ltigung oder
            Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte
            in anderen elektronischen oder gedruckten Publikationen ist ohne
            ausdr&uuml;ckliche Zustimmung des Autors nicht gestattet.
          </p>
          <p className={styles.p}>
            <span className={styles.pSubtitle}>4. Datenschutz</span>
            <br />
            Sofern innerhalb des Internetangebotes die M&ouml;glichkeit zur
            Eingabe pers&ouml;nlicher oder gesch&auml;ftlicher Daten
            &#x28;Emailadressen, Namen, Anschriften&#x29; besteht, so erfolgt
            die Preisgabe dieser Daten seitens des Nutzers auf ausdr&uuml;cklich
            freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller
            angebotenen Dienste ist - soweit technisch m&ouml;glich und zumutbar
            - auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter
            Daten oder eines Pseudonyms gestattet.
          </p>
          <p className={styles.p}>
            <span className={styles.pSubtitle}>
              5. Rechtswirksamkeit dieses Haftungsausschlusses
            </span>
            <br />
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
            betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern
            Teile oder einzelne Formulierungen dieses Textes der geltenden
            Rechtslage nicht, nicht mehr oder nicht vollst&auml;ndig entsprechen
            sollten, bleiben die &uuml;brigen Teile des Dokumentes in ihrem
            Inhalt und ihrer G&uuml;ltigkeit davon unber&uuml;hrt.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Impressum;
