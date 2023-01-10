import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Kontakt.module.css";
import circleCheck from "../../public/circleCheck.png";
import NavbarChinesisch from "../../components/NavbarChinesisch";

function ContactUs() {
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
      await fetch("https://www.e-t-consulting.com/contactUs/api/mail", {
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
      <NavbarChinesisch />
      <h1 className={styles.h1}>联系方式</h1>
      <section className={styles.sectionContainer}>
        <div className={styles.para}>
          <p className={styles.p}>
            如果您有任何咨询的需求和疑问请使用下面的表格与我们联系，我们会即时和您取得联系。
            <br />
            期待您的来信和咨询。
          </p>
        </div>
        <form
          className={styles.form}
          action="/api/form"
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">
            姓名<span className={styles.asterik}>*</span>
          </label>
          <input
            className={styles.inputField}
            type="text"
            name="name"
            value={name}
            maxLength="50"
            onChange={handleChange}
            pattern="^([^0-9!§$%&/|(){}=?`^*+'#<>;,:._@~])+$"
            required
          />

          <label htmlFor="email">
            邮件地址<span className={styles.asterik}>*</span>
          </label>
          <input
            className={styles.inputField}
            type="text"
            name="email"
            value={email}
            maxLength="50"
            onChange={handleChange}
            pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
            required
          />

          <label htmlFor="anfragesteller">
            学生 / 大学 / 机构 / 公司 / 机关
            <span className={styles.asterik}>*</span>
          </label>
          <input
            className={styles.inputField}
            type="text"
            name="anfragesteller"
            value={anfragesteller}
            maxLength="50"
            onChange={handleChange}
            pattern="^([^0-9!§$%&/|(){}=?`^*+'#<>;,:._@~])+$"
            required
          />

          <label htmlFor="anliegen">
            请选择业务需求
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
              <label htmlFor="deutschSprachkurs">德语课程</label>
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
              <label htmlFor="korrekturUndLektorat">修改 / 审校</label>
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
              <label htmlFor="bewerbungshilfe">求职申请相关服务</label>
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
                翻译 &#x00028;德/英/中&#x00029;
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
              <label htmlFor="sonstiges">其它</label>
            </div>
          </div>

          <label className={styles.labelMessage} htmlFor="message">
            您的问题和意见<span className={styles.asterik}>*</span>
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
            发送消息
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
              <h2>非常感谢!</h2>
              <p>
                您的留言已成功发送。
                <br /> 我们会尽快给您回复。
              </p>
              <button type="button" className={styles.popUpBtn}>
                确定
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
              <h2>非常感谢!</h2>
              <p>
                您的留言已成功发送。
                <br /> 我们会尽快给您回复。
              </p>
              <button
                type="button"
                className={styles.popUpBtn}
                onClick={togglePopUp}
              >
                确定
              </button>
            </div>
          )}
          <p className={styles.note}>
            <span>注意: </span>请填写标有
            <span className={styles.asterik}> *</span> 的输入框。
            <br />
            <Link href="/datenschutz">数据​保护​声明</Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
