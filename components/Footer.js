import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div>
        <Link href="/impressum">Impressum</Link>|
        <Link href="/datenschutz">Datenschutz</Link>|
        <Link href="/cookiefreiesite">Cookie-free</Link>|
        <Link href="/sitemap">Sitemap</Link>
      </div>
      <div>
        &copy; Copyright 2015 - 2023 Eduard Theiss. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

export default Footer;
