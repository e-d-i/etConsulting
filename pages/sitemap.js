import React from "react";
import Link from "next/link";
import styles from "../styles/Sitemap.module.css";

function Sitemap() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Sitemap</h1>
      <div className={styles.subContainer}>
        <ul>
          <li className={styles.mainHeading}>
            <Link href="/">Start</Link>
          </li>
          <li className={styles.mainHeading}>
            <Link href="/unternehmen">Unternehmen</Link>
          </li>
          <li className={styles.mainHeading}>
            <Link href="/leistungen">Leistungen</Link>
            <div className={styles.sublist}>
              <ul>
                <li>
                  <Link href="/leistungen/individuelleDeutschSprachkurse">
                    Individuelle Deutsch-Sprachkurse
                  </Link>
                </li>
                <li>
                  <Link href="/leistungen/korrekturUndLektoratsservices">
                    Korrektur- &amp; Lektoratsservices
                  </Link>
                </li>
                <li>
                  <Link href="/leistungen/bewerbungsservices">
                    Bewerbungsservices
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.mainHeading}>
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li className={styles.mainHeading}>
            <Link href="/chinesisch">中文</Link>
            <div className={styles.sublist}>
              <ul>
                <li>
                  <Link href="/chinesisch/aboutUs">关于我们</Link>
                </li>
                <li>
                  <Link href="/chinesisch/ourServices">我们的服务</Link>
                </li>
                <li>
                  <Link href="/chinesisch/contactUs">联系我们</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sitemap;
