import React from "react";
import Image from "next/image";
import NavbarLeistungen from "../../components/NavbarLeistungen";
import styles from "../../styles/NavbarLeistungen.module.css";
import imgIDS from "../../public/imgIDS.jpg";

function IndividuelleDeutschSprachkurse() {
  return (
    <div className={styles.container}>
      <NavbarLeistungen />
      <div className={styles.sectionContainer}>
        <h1 className={styles.h1}>Auftragserteilung &amp; Ablauf</h1>
        <section>
          <h2 className={styles.h2}>Individuelle Deutsch-Sprachkurse</h2>
          <Image
            src={imgIDS}
            alt="'Do you speak German?' written on a blackboard next to the national flag of Germany"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            1. Kostenloses Erstgespr&auml;ch und Ermittlung Ihrer individuellen
            Anforderungen/Ziele.
            <br />
            2. Zusendung eines unverbindlichen Kostenvoranschlags mit Zeitangabe
            per E-Mail.
            <br />
            3. Bei Zustimmung des Angebots folgt die Entrichtung der zuvor
            bestimmten Geb&uuml;hr.
            <br />
            4. Ausarbeitung eines spezifischen Sprach-Trainingskonzepts,
            angepasst an Ihren Bed&uuml;rfnissen.
            <br />
            5. Termingerechte Durchf&uuml;hrung intensiver Sprachtrainings im
            Rahmen von 45-min&uuml;tigen Online-Sitzungen via Skype, Tencent QQ
            oder Weixin.
          </p>
        </section>
      </div>
    </div>
  );
}

export default IndividuelleDeutschSprachkurse;
