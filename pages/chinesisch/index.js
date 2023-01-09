import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarChinesisch from "../../components/NavbarChinesisch";
import styles from "../../styles/Home.module.css";
import banner from "../../public/banner.png";

function Chinesisch() {
  return (
    <div>
      <NavbarChinesisch />
      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.h1}`}>欢迎访问E.T.咨询公司</h1>
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
          语言是打开成功大门的钥匙
        </h2>
        <div className={styles.para}>
          <p>
            熟练，准确的运用一门外国语言，是在国外生活和工作成功的关键。
            特别是对于在国外大学深造的学生来说，良好的外语水平是大学顺利毕业的前提条件。
            然而对于在外国大学生来说，在短时时间内熟练，准确地运用一门外语常常会遇到困难，尤其是在写专业的学期报告，硕士以及博士论文的时候。
          </p>
          <p className={styles.p}>
            因此，我们致力于提供的专业的，全方位的语言服务，让你在通往成功的道路上没有语言的障碍。
          </p>
        </div>
      </section>
      <section>
        <h2 className={`${styles.title} ${styles.h2}`}>专业的咨询和修改服务</h2>
        <div className={styles.para}>
          <p>
            无论是口头还是书面德语，或者是学术校对，以及大学考试作业
            &#x00028;Hausarbeit，Seminararbeit， Studienarbeit，
            Projektarbeit&#x00029; 毕业论文
            &#x00028;Bachelorarbeit，Masterarbeit，Diplomarbeit，Magisterarbeit&#x00029;，博士论文
            &#x00028;Dissertation&#x00029;
            我们提供给您量身定做的咨询和修改服务。
          </p>
          <p className={styles.p}>
            我们以多年的行业经验，全面的咨询和专业的修改服务为您踏上成功之路保驾护航。
          </p>
        </div>
      </section>
      <div className={styles.btnContainer}>
        <h3 className={styles.h3}>欢迎免费咨询!</h3>
        <div className={styles.btnPosition}>
          <Link href="/chinesisch/contactUs">
            <button className={styles.btn}>
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className={styles.svg}
              >
                <polyline points="179,1 179,59 1,59 1,1 179,1" />
              </svg>
              <span className={styles.span}>联系</span>
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

export default Chinesisch;
