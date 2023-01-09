import React from "react";
import Image from "next/image";
import NavbarChinesisch from "../../components/NavbarChinesisch";
import styles from "../../styles/Leistungen.module.css";
import imgIDS from "../../public/imgIDS.jpg";
import imgKL from "../../public/imgKL.jpg";
import imgB from "../../public/imgB.jpg";

function OurServices() {
  return (
    <div className={styles.container}>
      <NavbarChinesisch />
      <div className={styles.sectionContainer}>
        <h1 className={styles.h1}>我们的服务</h1>
        <section className={styles.sectionsFlowRoot}>
          <h2 className={styles.h2}>量身定制德语课程</h2>
          <Image
            src={imgIDS}
            alt="'Do you speak German?' written on a blackboard next to the national flag of Germany"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            无论是初级，进阶还是高级德语学习者，我们依据您的需要帮你提高德语口语表达能力。
            <br />
            在线德语教学，第一次课程为45分钟免费课程，您可以尽情提出您的要求，我们为您量身定制学习方案。
            <br />
            教学语言可为德语，英语，中文。
          </p>
        </section>
        <section className={styles.sectionsFlowRoot}>
          <h2 className={styles.h2}>修改和校正服务</h2>
          <Image
            src={imgKL}
            alt="Student working on a laptop"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            我们专业的团队为您提供论文的语言修改美化，内容连贯性的完善以及写作文法的准确性的校正。
            <br />
            彻底避免了语言表达对论文成绩的不良影响。
            <br />
            多年来的专业修改校正经验让我们更加了解中国客户的需求，和文法思维习惯。
            修改过程也会提出相应的建议和意见，只为达到精益求精的修改结果。
          </p>
        </section>
        <section className={styles.sectionsFlowRoot}>
          <h2 className={styles.h2}>求职信修改服务</h2>
          <Image
            src={imgB}
            alt="Tag cloud regarding applications"
            placeholder="blur"
            className={styles.img}
          />
          <p className={styles.para}>
            通过我们提供的求职信和简历美化服务，能够让您的求职信和简历完美无暇的呈现。
            <br />
            不仅仅提供书面的美化，我们还会提出在德国求职注意事项，让你的求职信更加本土化，让您在求职道路上如虎添翼。
            <br />
            如果您是申请大学的大学生，我们同样可以为您修改美化大学申请信。
          </p>
        </section>
        <p className={`${styles.para} ${styles.p}`}>
          我们24小时随时在线为您服务，即时回复您的任何疑问。
          高质量且准时完成修改服务是我们多年来的一贯宗旨。
          <br />
          所有服务也可以加速提供，最快可以在24小时内完成。 欢迎您的咨询惠顾。
        </p>
      </div>
    </div>
  );
}

export default OurServices;
