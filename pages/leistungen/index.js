import React from "react";
import Image from "next/image";
import NavbarLeistungen from "../../components/NavbarLeistungen";
import styles from "../../styles/Leistungen.module.css";
import imgIDS from "../../public/imgIDS.jpg";
import imgKL from "../../public/imgKL.jpg";
import imgB from "../../public/imgB.jpg";

function Leistungen() {
  return (
    <div className={styles.container}>
      <NavbarLeistungen />
      <div className={styles.sectionContainer}>
        <h1 className={styles.h1}>Unsere Leistungen – Ihr Mehrwert</h1>
        <section className={styles.sectionsFlowRoot}>
          <h2 className={styles.h2}>Individuelle Deutsch-Sprachkurse</h2>
          <Image
            src={imgIDS}
            alt="'Do you speak German?' written on a blackboard next to the national flag of Germany"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            Ob Anf&auml;nger, Fortgeschrittener oder Profi, wir helfen Ihnen bei
            der Verbesserung Ihrer m&uuml;ndlichen Ausdrucksf&auml;higkeit!
            Daf&uuml;r werden in einem ersten kostenfreien
            Kennenlerngespr&auml;ch &#x00028;auf Deutsch, Englisch oder
            Chinesisch&#x00029; zun&auml;chst Ihre individuellen Anforderungen
            sowie Ziele ermittelt und Schwerpunkte gesetzt. In 45-min&uuml;tigen
            Online-Sitzungen via Skype, Tencent QQ oder Weixin wird dann anhand
            der zuvor bestimmten pers&ouml;nlichen Bed&uuml;rfnisse in
            Kombination mit einem individuell ausgearbeiteten
            Sprach-Trainingskonzept gezielt Ihr Sprachverm&ouml;gen intensiv
            trainiert und erweitert, sodass sich Ihr t&auml;glicher Umgang mit
            der deutschen Sprache deutlich verbessert und Sie Deutsch
            situationsspezifisch &#x00028;z.B. im Alltag, Beruf, Hochschulleben
            oder im Falle von Pr&auml;sentationen etc.&#x00029; sicher
            beherrschen.
          </p>
        </section>
        <section className={styles.sectionsFlowRoot}>
          <h2 className={styles.h2}>Korrektur- &amp; Lektoratsservices</h2>
          <Image
            src={imgKL}
            alt="Student working on a laptop"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            Der sprachliche, inhaltliche und stilistische Feinschliff f&uuml;r
            Ihren erfolgreichen Abschluss! Mit Hilfe unseres wissenschaftlichen
            Lektorats und unserer professionellen Korrekturen werden neben der
            Pr&uuml;fung von Orthografie, Zeichensetzung sowie Grammatik und der
            Verbesserung des Schreibstils auch Kommentare bzw. ein
            weiterf&uuml;hrendes Feedback hinsichtlich eventueller
            Auff&auml;lligkeiten &#x00028;z.B. in Bezug auf Struktur bzw.
            Aufbau, Koh&auml;renz, Logik, Zitierweise, Quellendarstellung,
            inhaltliche Wiederholungen, Formate etc.&#x00029; dargeboten. Die
            Inhalte Ihrer Arbeit kommen so harmonischer, klarer und
            verst&auml;ndlicher zum Ausdruck, wodurch Sie ein bestm&ouml;gliches
            Ergebnis erreichen k&ouml;nnen.
          </p>
        </section>
        <section className={styles.sectionsFlowRoot}>
          <h2 className={styles.h2}>Bewerbungsservices</h2>
          <Image
            src={imgB}
            alt="Tag cloud regarding applications"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            Optimierung von Anschreiben sowie Lebenslauf und Bewerbungstipps
            f&uuml;r Ihre erfolgreiche Bewerbung! Durch unsere profunden
            Erfahrungen rund um die Bewerbung helfen wir Ihnen bei der
            &Uuml;berwindung der ersten H&uuml;rde des Bewerbungsprozesses – der
            Erstellung Ihrer Bewerbungsunterlagen. Neben der Anfertigung eines
            individuellen Vermarktungskonzepts bieten wir Ihnen auch
            umfangreiche Bewerbungstipps, wodurch sich Ihre Chancen f&uuml;r
            eine erfolgreiche Bewerbung betr&auml;chtlich erh&ouml;hen und Sie
            so Ihrer Wunschposition n&auml;her kommen. Die Bewerbungsservices
            beziehen sich zudem nicht nur auf klassische Bewerbungsunterlagen
            wie Anschreiben und Lebenslauf f&uuml;r Arbeitnehmer oder
            Auszubildende, sondern auch Motivationsschreiben f&uuml;r
            Sch&uuml;ler oder Studenten.
          </p>
        </section>
        <p className={`${styles.para} ${styles.p}`}>
          Wir sind 24/7 f&uuml;r Sie erreichbar und einsatzbereit, auch an Sonn-
          und Feiertagen bieten wir Ihnen feste Termine an! Alle Services sind
          auch als Express-Service unter Aufpreis buchbar und innerhalb von bis
          zu 24 Std. garantiert und fristgerecht lieferbar! S&auml;mtliche zur
          Verf&uuml;gung gestellten Daten werden zudem stets vertraulich und
          diskret behandelt! Fordern Sie Ihr unverbindliches Angebot an – wir
          freuen uns auf Ihre Kontaktaufnahme!
        </p>
      </div>
    </div>
  );
}

export default Leistungen;
