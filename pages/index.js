import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import banner from "../public/banner.png";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.h1}`}>
          E.T. Consulting –<br /> Agentur f&uuml;r Sprach-, Korrektur- und
          Lektoratsservices
        </h1>
        <section>
          <video className={styles.video} autoPlay muted loop>
            <source
              src="./pexels-ekaterina-bolovtsova-6185684.mp4"
              type="video/mp4"
            />
          </video>
        </section>
      </main>
      <section>
        <h2 className={`${styles.title} ${styles.h2}`}>
          Sprache als Schl&uuml;ssel zum Erfolg
        </h2>
        <div className={styles.para}>
          <p>
            Die ad&auml;quate Verwendung von Sprache ist essenziell f&uuml;r ein
            erfolgreiches Gelingen, sei es im Alltag, im Beruf oder im
            universit&auml;ren Leben. Insbesondere im letzteren Fall k&ouml;nnen
            vor allem ausl&auml;ndische Studierende bei der Erstellung von
            wissenschaftlichen Arbeiten, wie z.B. der Seminar-, Bachelor-,
            Master-, Diplom-, Magister- oder Doktorarbeit auf Schwierigkeiten
            sto&szlig;en, die einem erfolgreichen Abschluss im Wege stehen.
          </p>
          <p className={styles.p}>
            Nutzen Sie daher die Chance, optimale Ergebnisse mit Hilfe unserer
            umfangreichen Services zu erzielen.
          </p>
        </div>
      </section>
      <section>
        <h2 className={`${styles.title} ${styles.h2}`}>
          Professionelle Beratung und Korrekturen f&uuml;r Ihren Erfolg
        </h2>
        <div className={styles.para}>
          <p>
            Ganz gleich, ob es sich um die m&uuml;ndliche oder schriftliche
            Vermittlung der deutschen Sprache oder um ein wissenschaftliches
            Lektorat bzw. die Korrektur von schriftlichen Pr&uuml;fungsarbeiten
            &#x00028;Hausarbeit, Seminararbeit, Studienarbeit,
            Projektarbeit&#x00029;, Abschlussarbeiten &#x00028;Bachelorarbeit,
            Masterarbeit, Diplomarbeit, Magisterarbeit&#x00029;,
            Promotionsarbeiten &#x00028;Dissertation&#x00029; oder sonstigen
            Manuskripten handelt, wir unterst&uuml;tzen Sie in Ihren
            individuellen Belangen.
          </p>
          <p className={styles.p}>
            Profitieren Sie von unserer langj&auml;hrigen Erfahrung, unserer
            kompetenten Beratung und unseren professionellen Korrekturen. Denn
            wir stehen an Ihrer Seite – f&uuml;r Ihren Erfolg!
          </p>
        </div>
      </section>
      <div className={styles.btnContainer}>
        <h3 className={styles.h3}>
          Jetzt Angebot anfordern – kostenlos und unverbindlich!
        </h3>
        <div className={styles.btnPosition}>
          <Link href="/kontakt">
            <button className={styles.btn}>
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className={styles.svg}
              >
                <polyline points="179,1 179,59 1,59 1,1 179,1" />
              </svg>
              <span className={styles.span}>Kontakt</span>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={banner}
          alt="Picture of a cheering team celebrating success"
          placeholder="blur"
          className={styles.banner}
        />
      </div>
    </div>
  );
}
