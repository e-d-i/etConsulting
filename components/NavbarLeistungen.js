import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavbarLeistungen() {
  const router = useRouter();

  const [subNavigation, setSubNavigation] = useState(false);
  const changeSubNavigation = () => {
    if (window.scrollY >= 100) {
      setSubNavigation(true);
    } else {
      setSubNavigation(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeSubNavigation);
    return () => {
      window.removeEventListener("scroll", changeSubNavigation);
    };
  }, [changeSubNavigation]);

  return (
    <header>
      <nav
        className={
          subNavigation ? "subNavigationInactive" : "subNavigationActive"
        }
      >
        <div className="subNavigationActiveLink">
          <Link
            href="/leistungen/individuelleDeutschSprachkurse"
            className={
              router.pathname === "/leistungen/individuelleDeutschSprachkurse"
                ? "subNavigationActiveLink"
                : ""
            }
          >
            Individuelle Deutsch-Sprachkurse
          </Link>
          <Link
            href="/leistungen/korrekturUndLektoratsservices"
            className={
              router.pathname === "/leistungen/korrekturUndLektoratsservices"
                ? "subNavigationActiveLink"
                : ""
            }
          >
            Korrektur- &amp; Lektoratsservices
          </Link>
          <Link
            href="/leistungen/bewerbungsservices"
            className={
              router.pathname === "/leistungen/bewerbungsservices"
                ? "subNavigationActiveLink"
                : ""
            }
          >
            Bewerbungsservices
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavbarLeistungen;
