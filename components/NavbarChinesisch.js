import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavbarChinesisch() {
  const router = useRouter();

  return (
    <header>
      <nav className="subNavigationActiveCn">
        <div className="subNavigationActiveLink">
          <Link
            href="/chinesisch/aboutUs"
            className={
              router.pathname === "/chinesisch/aboutUs"
                ? "subNavigationActiveLink"
                : ""
            }
          >
            关于我们
          </Link>
          <Link
            href="/chinesisch/ourServices"
            className={
              router.pathname === "/chinesisch/ourServices"
                ? "subNavigationActiveLink"
                : ""
            }
          >
            我们的服务
          </Link>
          <Link
            href="/chinesisch/contactUs"
            className={
              router.pathname === "/chinesisch/contactUs"
                ? "subNavigationActiveLink"
                : ""
            }
          >
            联系我们
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavbarChinesisch;
