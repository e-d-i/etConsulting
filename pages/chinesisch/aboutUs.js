import React from "react";
import Image from "next/image";
import NavbarChinesisch from "../../components/NavbarChinesisch";
import styles from "../../styles/Unternehmen.module.css";
import portraitPhoto from "../../public/portraitPhoto.jpg";

function AboutUs() {
  return (
    <div className={styles.container}>
      <NavbarChinesisch />
      <h1 className={styles.h1}>欢迎来到E.T.咨询公司</h1>
      <section className={styles.sectionContainer}>
        <Image
          src={portraitPhoto}
          alt="Portrait photo of Eduard Theiss – the founder of E.T. Consulting"
          placeholder="blur"
          className={styles.img}
        />
        <div className={styles.para}>
          <p className={styles.p}>
            E.T.咨询公司是由拥有多年中国相关工作经验和从事语言教育传播工作的专业人士组成的团队。
          </p>
          <p>
            公司团队多年来致力于促进语言以及文化的交流，尤其在与中国客户的长期稳定的合作中取得了大量的肯定和可观的成绩。
            公司的创始人，Eduard Theiss 是东亚学学者和中国通。
            他在本科和硕士阶段攻读亚洲相关专业，并且开始帮助外国同学修改学术论文，随着业务需求的扩大，E.T.咨询公司应运而生。
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
