import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Kontakt.module.css";
import circleCheck from "../public/circleCheck.png";

function Kontakt() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    anfragesteller: "",
    anliegen: "",
    message: "",
  });
  const { name, email, anfragesteller, anliegen, message } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value.trimStart(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://www.e-t-consulting.com/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
    setValues({
      name: "",
      email: "",
      anfragesteller: "",
      anliegen: "",
      message: "",
    });
    setPopUpActive();
  };

  const [isPopUpActive, setPopUpActive] = useState("false");
  const togglePopUp = () => {
    setPopUpActive(!isPopUpActive);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Kontakt</h1>
      <section className={styles.sectionContainer}>
        <div className={styles.para}>
          <p className={styles.p}>
            Sie haben noch Fragen oder wollen ein konkretes Anliegen
            &auml;u&szlig;ern? Dann nutzen Sie bitte hierf&uuml;r das
            Kontaktformular. Wir freuen uns auf Ihre Kontaktaufnahme und
            bedanken uns f&uuml;r Ihr Interesse!
          </p>
        </div>
        <form
          className={styles.form}
          action="/api/form"
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">
            Vor- und Nachname<span className={styles.asterik}>*</span>
          </label>
          {values.name === "" ||
            (!values.name.match("^([^0-9!§$%&/|(){}=?`^*+'#<>;,:._@~])+$") && (
              <p className={styles.helperText}>
                Bitte Eingabefeld ausfüllen. Zahlen und Sonderzeichen nicht
                erlaubt.
              </p>
            ))}
          <input
            className={styles.inputField}
            type="text"
            name="name"
            value={values.name}
            maxLength="50"
            onChange={handleChange}
            pattern="^([^0-9!§$%&/|(){}=?`^*+'#<>;,:._@~])+$"
            required
          />

          <label htmlFor="email">
            E-Mail<span className={styles.asterik}>*</span>
          </label>
          {values.email === "" ||
            (!values.email.match(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"
            ) && (
              <p className={styles.helperText}>
                Bitte gültige E-Mail-Adresse eingeben. Sonderzeichen nicht
                erlaubt.
              </p>
            ))}
          <input
            className={styles.inputField}
            type="text"
            name="email"
            value={values.email}
            maxLength="50"
            onChange={handleChange}
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            required
          />

          <label htmlFor="anfragesteller">
            Student / Hochschule / Institut / Unternehmen / Beh&ouml;rde
            <span className={styles.asterik}>*</span>
          </label>
          {values.anfragesteller === "" ||
            (!values.anfragesteller.match(
              "^([^0-9!§$%&/|(){}=?`^*+'#<>;,:._@~])+$"
            ) && (
              <p className={styles.helperText}>
                Bitte Eingabefeld ausfüllen. Zahlen und Sonderzeichen nicht
                erlaubt.
              </p>
            ))}
          <input
            className={styles.inputField}
            type="text"
            name="anfragesteller"
            value={values.anfragesteller}
            maxLength="50"
            onChange={handleChange}
            pattern="^([^0-9!§$%&/|(){}=?`^*+'#<>;,:._@~])+$"
            required
          />

          <label htmlFor="anliegen">
            Grund f&uuml;r Ihre Kontaktaufnahme
            <span className={styles.asterik}>*</span>
          </label>
          <div>
            <div>
              <input
                className={styles.radioBtn}
                type="radio"
                name="anliegen"
                value="deutschSprachkurs"
                checked={anliegen === "deutschSprachkurs"}
                onChange={handleChange}
                required
              />
              <label htmlFor="deutschSprachkurs">Deutsch-Sprachkurs</label>
            </div>

            <div>
              <input
                className={styles.radioBtn}
                type="radio"
                name="anliegen"
                value="korrekturUndLektorat"
                checked={anliegen === "korrekturUndLektorat"}
                onChange={handleChange}
              />
              <label htmlFor="korrekturUndLektorat">
                Korrektur &amp; Lektorat
              </label>
            </div>

            <div>
              <input
                className={styles.radioBtn}
                type="radio"
                name="anliegen"
                value="bewerbungshilfe"
                checked={anliegen === "bewerbungshilfe"}
                onChange={handleChange}
              />
              <label htmlFor="bewerbungshilfe">Bewerbungshilfe</label>
            </div>

            <div>
              <input
                className={styles.radioBtn}
                type="radio"
                name="anliegen"
                value="übersetzung"
                checked={anliegen === "übersetzung"}
                onChange={handleChange}
              />
              <label htmlFor="übersetzung">
                &Uuml;bersetzung &#x00028;DE/EN/CN&#x00029;
              </label>
            </div>

            <div>
              <input
                className={styles.radioBtn}
                type="radio"
                name="anliegen"
                value="sonstiges"
                checked={anliegen === "sonstiges"}
                onChange={handleChange}
              />
              <label htmlFor="sonstiges">Sonstiges</label>
            </div>
          </div>

          <label className={styles.labelMessage} htmlFor="message">
            Ihre Nachricht f&uuml;r uns<span className={styles.asterik}>*</span>
          </label>
          <textarea
            className={`${styles.inputField} ${styles.textarea}`}
            type="text"
            name="message"
            value={message}
            maxLength="2300"
            onChange={handleChange}
            required
          />

          <button
            className={styles.submitBtn}
            type="submit"
            disabled={!isPopUpActive}
          >
            Nachricht senden
          </button>

          {isPopUpActive ? (
            <div className={styles.popUp}>
              <Image
                src={circleCheck}
                alt="circle check icon"
                width={"50"}
                height={"auto"}
                className={styles.img}
              />
              <h2>Vielen Dank!</h2>
              <p>
                Ihre Nachricht wurde erfolgreich versendet.
                <br /> Wir melden uns umgehend bei Ihnen.
              </p>
              <button type="button" className={styles.popUpBtn}>
                OK
              </button>
            </div>
          ) : (
            <div className={`${styles.popUp} ${styles.openPopUp}`}>
              <Image
                src={circleCheck}
                alt="circle check icon"
                width={"50"}
                height={"auto"}
                className={styles.img}
              />
              <h2>Vielen Dank!</h2>
              <p>
                Ihre Nachricht wurde erfolgreich versendet.
                <br /> Wir melden uns umgehend bei Ihnen.
              </p>
              <button
                type="button"
                className={styles.popUpBtn}
                onClick={togglePopUp}
              >
                OK
              </button>
            </div>
          )}
          <p className={styles.note}>
            <span>Hinweise: </span>Bitte die mit
            <span className={styles.asterik}> *</span> gekennzeichneten
            Eingabefelder ausf&uuml;llen.
            <br />
            Es gilt unsere <Link href="/datenschutz">Datenschutzerklärung</Link>
            .
          </p>
        </form>
      </section>
    </div>
  );
}

export default Kontakt;
