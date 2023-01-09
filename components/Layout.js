import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="content">
      <Head>
        <title>
          E.T. Consulting – Agentur f&uuml;r Sprach-, Korrektur- und
          Lektoratsservices
        </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Professionelles Lektorat &amp; Korrekturlesen f&uuml;r Texte aller Art - 24/7 Support 🤝 
          E.T. Consulting竭诚为您提供专业, 全面的语言服务, 我们的服务范围包括, 德语论文及报告修改, 美化; 德语简历润色加工。"
        />
        <meta
          name="twitter:title"
          content="E.T. Consulting – Agentur f&uuml;r Sprach-, Korrektur- und Lektoratsservices"
        />
        <meta
          name="twitter:description"
          content="Professionelles Lektorat &amp; Korrekturlesen f&uuml;r Texte aller Art - 24/7 Support 🤝 
          E.T. Consulting竭诚为您提供专业, 全面的语言服务, 我们的服务范围包括, 德语论文及报告修改, 美化; 德语简历润色加工。"
        />
        <meta
          property="og:title"
          content="E.T. Consulting – Agentur f&uuml;r Sprach-, Korrektur- und Lektoratsservices"
        />
        <meta
          property="og:description"
          content="Professionelles Lektorat &amp; Korrekturlesen f&uuml;r Texte aller Art - 24/7 Support 🤝 
          E.T. Consulting竭诚为您提供专业, 全面的语言服务, 我们的服务范围包括, 德语论文及报告修改, 美化; 德语简历润色加工。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
