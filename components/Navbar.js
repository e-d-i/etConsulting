import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Hamburger from "hamburger-react";

function Navbar() {
  const [stickyNav, setstickyNav] = useState(false);
  const changeHeaderNav = () => {
    if (window.scrollY >= 50) {
      setstickyNav(true);
    } else {
      setstickyNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeHeaderNav);
    return () => {
      window.removeEventListener("scroll", changeHeaderNav);
    };
  }, [changeHeaderNav]);

  const router = useRouter();

  const [isOpen, setOpen] = useState(false);
  const [hamIsVisible, setHamIsVisible] = useState(false);
  const changeNavigation = () => {
    if (window.innerWidth <= 781) {
      setHamIsVisible(true);
    } else {
      setHamIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", changeNavigation);
    return () => {
      window.removeEventListener("resize", changeNavigation);
    };
  }, [changeNavigation]);

  let hamRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!hamRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <header>
      <nav className={stickyNav ? "stickyNavActive" : "stickyNavInactive"}>
        <Link href="/" className="logo">
          <div style={{ position: "relative", width: "95px", height: "95px" }}>
            <Image
              src="/logo.png"
              alt="company logo"
              priority
              fill
              sizes="(max-width: 2560px) 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
        <div className="navLinks">
          <Link href="/" className={router.pathname === "/" ? "navLinks" : ""}>
            Start
          </Link>
          <Link
            href="/unternehmen"
            className={router.pathname === "/unternehmen" ? "navLinks" : ""}
          >
            Unternehmen
          </Link>
          <Link
            href="/leistungen"
            className={
              router.pathname === "/leistungen" ||
              router.pathname ===
                "/leistungen/individuelleDeutschSprachkurse" ||
              router.pathname === "/leistungen/korrekturUndLektoratsservices" ||
              router.pathname === "/leistungen/bewerbungsservices"
                ? "navLinks"
                : ""
            }
          >
            Leistungen
          </Link>
          <Link
            href="/kontakt"
            className={router.pathname === "/kontakt" ? "navLinks" : ""}
          >
            Kontakt
          </Link>
          <Link
            href="/chinesisch"
            className={
              router.pathname === "/chinesisch" ||
              router.pathname === "/chinesisch/aboutUs" ||
              router.pathname === "/chinesisch/ourServices" ||
              router.pathname === "/chinesisch/contactUs"
                ? "navLinks"
                : ""
            }
          >
            中文
          </Link>
        </div>
        <div
          style={{ visibility: hamIsVisible ? "visible" : "hidden" }}
          ref={hamRef}
        >
          <Hamburger
            direction="right"
            size={25}
            duration={0.4}
            distance="md"
            color="#798486"
            hideOutline={false}
            rounded
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        {isOpen ? (
          <div className="hamMenuActive">
            <div className="hamMenuLinks">
              <Link href="/">Start</Link>
              <Link href="/unternehmen">Unternehmen</Link>
              <Link href="/leistungen">Leistungen</Link>
              <Link
                href="/leistungen/individuelleDeutschSprachkurse"
                className="hamMenuLinksLevel1Leistungen"
              >
                Individuelle Deutsch-Sprachkurse
              </Link>
              <Link
                href="/leistungen/korrekturUndLektoratsservices"
                className="hamMenuLinksLevel1Leistungen"
              >
                Korrektur- &amp; Lektoratsservices
              </Link>
              <Link
                href="/leistungen/bewerbungsservices"
                className="hamMenuLinksLevel1Leistungen"
              >
                Bewerbungsservices
              </Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/chinesisch">中文</Link>
              <Link
                href="/chinesisch/aboutUs"
                className="hamMenuLinksLevel1Chinesisch"
              >
                关于我们
              </Link>
              <Link
                href="/chinesisch/ourServices"
                className="hamMenuLinksLevel1Chinesisch"
              >
                我们的服务
              </Link>
              <Link
                href="/chinesisch/contactUs"
                className="hamMenuLinksLevel1Chinesisch"
              >
                联系我们
              </Link>
            </div>
          </div>
        ) : (
          <div className="hamMenuInactive">
            <div className="hamMenuLinks">
              <Link href="/">Start</Link>
              <Link href="/unternehmen">Unternehmen</Link>
              <Link href="/leistungen">Leistungen</Link>
              <Link
                href="/leistungen/individuelleDeutschSprachkurse"
                className="hamMenuLinksLevel1Leistungen"
              >
                Individuelle Deutsch-Sprachkurse
              </Link>
              <Link
                href="/leistungen/korrekturUndLektoratsservices"
                className="hamMenuLinksLevel1Leistungen"
              >
                Korrektur- &amp; Lektoratsservices
              </Link>
              <Link
                href="/leistungen/bewerbungsservices"
                className="hamMenuLinksLevel1Leistungen"
              >
                Bewerbungsservices
              </Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/chinesisch">中文</Link>
              <Link
                href="/chinesisch/aboutUs"
                className="hamMenuLinksLevel1Chinesisch"
              >
                关于我们
              </Link>
              <Link
                href="/chinesisch/ourServices"
                className="hamMenuLinksLevel1Chinesisch"
              >
                我们的服务
              </Link>
              <Link
                href="/chinesisch/contactUs"
                className="hamMenuLinksLevel1Chinesisch"
              >
                联系我们
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
