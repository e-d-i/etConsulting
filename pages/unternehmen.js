import React from "react";
import Image from "next/image";
import styles from "../styles/Unternehmen.module.css";
import portraitPhoto from "../public/portraitPhoto.jpg";

function Unternehmen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Herzlich willkommen bei E.T. Consulting</h1>
      <section className={styles.sectionContainer}>
        <Image
          src={portraitPhoto}
          alt="Portrait photo of Eduard Theiss – the founder of E.T. Consulting"
          placeholder="blur"
          className={styles.img}
        />
        <div className={styles.para}>
          <p className={styles.p}>
            Die Unternehmung E.T. Consulting besteht aus hochqualifizierten
            Akademikern mit China-Fokus und langj&auml;hriger Erfahrung im
            Bereich der Sprachvermittlung und F&ouml;rderung
            deutsch-chinesischer Kooperationsvorhaben. Dabei spielt vor allem
            die &Uuml;berwindung sprachlicher sowie kultureller H&uuml;rden eine
            zentrale Rolle. Aufgrund unserer internationalen Ausrichtung und
            unserer Passion zu China haben wir es uns zum Ziel gesetzt,
            ausl&auml;ndische Kunden und insbesondere chinesische Kunden im
            Bereich der Sprache kompetent zu betreuen. Gr&uuml;nder dieser Idee
            ist der Ostasien-Wissenschaftler und China-Kenner Eduard Theiss,
            M.A.
          </p>
          <p>
            Eduard Theiss hatte bereits w&auml;hrend seines Bachelorstudiums der
            Japanologie sowie Sinologie an der Ruhr-Universit&auml;t Bochum und
            im anschlie&szlig;enden Masterstudium der Modernen China-Studien mit
            Schwerpunkt der chinesischen Rechtskultur an der Universit&auml;t zu
            K&ouml;ln ehrenamtlich chinesische Kommilitonen bei der Korrektur
            und Optimierung wissenschaftlicher Arbeiten unterschiedlichster
            Fachgebiete unterst&uuml;tzt und sich f&uuml;r deutsch-chinesische
            Projekte eingesetzt, was er bis heute immer noch mit Begeisterung
            aus&uuml;bt.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Unternehmen;
