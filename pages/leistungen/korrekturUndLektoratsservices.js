import React from "react";
import Image from "next/image";
import NavbarLeistungen from "../../components/NavbarLeistungen";
import styles from "../../styles/NavbarLeistungen.module.css";
import imgKL from "../../public/imgKL.jpg";

function KorrekturUndLektoratsservices() {
  return (
    <div className={styles.container}>
      <NavbarLeistungen />
      <div className={styles.sectionContainer}>
        <h1 className={styles.h1}>Auftragserteilung &amp; Ablauf</h1>
        <section>
          <h2 className={styles.h2}>Korrektur- &amp; Lektoratsservices</h2>
          <Image
            src={imgKL}
            alt="Student working on a laptop"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            1. Zusendung Ihrer Anfrage bzw. der zu lektorierenden/korrigierenden
            Arbeit inklusive Zeitwunsch per E-Mail.
            <br />
            2. Gr&uuml;ndliche Durchsicht Ihrer Arbeit sowie Zusendung eines
            unverbindlichen Kostenvoranschlags mit Zeitangabe per E-Mail.
            <br />
            3. Bei Zustimmung des Angebots folgt die Entrichtung der zuvor
            bestimmten Geb&uuml;hr.
            <br />
            4. Termingerechte Lieferung des Lektorats/der Korrektur sowie
            abschlie&szlig;endes Feedback.
            <br />
          </p>
        </section>
      </div>
    </div>
  );
}

export default KorrekturUndLektoratsservices;
