import React from "react";
import Image from "next/image";
import NavbarLeistungen from "../../components/NavbarLeistungen";
import styles from "../../styles/NavbarLeistungen.module.css";
import imgB from "../../public/imgB.jpg";

function Bewerbungsservices() {
  return (
    <div className={styles.container}>
      <NavbarLeistungen />
      <div className={styles.sectionContainer}>
        <h1 className={styles.h1}>Auftragserteilung &amp; Ablauf</h1>
        <section>
          <h2 className={styles.h2}>Bewerbungsservices</h2>
          <Image
            src={imgB}
            alt="Tag cloud regarding applications"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            1. Zusendung Ihrer Anfrage bzw. der zu pr&uuml;fenden
            Bewerbungsunterlagen &#x00028;Anschreiben, Lebenslauf, eventuell
            Stellenbeschreibung&#x00029; inklusive Zeitwunsch per E-Mail.
            <br />
            2. Gr&uuml;ndliche Durchsicht Ihrer Bewerbungsunterlagen sowie
            Zusendung eines unverbindlichen Kostenvoranschlags mit Zeitangabe
            per E-Mail.
            <br />
            3. Bei Zustimmung des Angebots folgt die Entrichtung der zuvor
            bestimmten Geb&uuml;hr.
            <br />
            4. Termingerechte Lieferung der optimierten Bewerbungsunterlagen
            sowie abschlie&szlig;endes Feedback.
            <br />
          </p>
        </section>
      </div>
    </div>
  );
}

export default Bewerbungsservices;
