import React from "react";
import Image from "next/image";
import styles from "../styles/Cookiefreiesite.module.css";
import cookie from "../public/cookie.png";

function CookieFreieSite() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>COOKIE-FREIE ZONE.</h1>
      <h2 className={styles.h2}>Ohne Cookie-Banner.</h2>
      <div className={styles.subContainer}>
        <h3 className={styles.h3}>
          Eine bewusst Cookie-freie Webseite.
          <br />
          Aus Respekt gegenüber Ihrer Privatsphäre.
        </h3>
        <Image
          src={cookie}
          alt="Picture of a cookie"
          placeholder="blur"
          className={styles.img}
        />
      </div>
    </div>
  );
}

export default CookieFreieSite;
