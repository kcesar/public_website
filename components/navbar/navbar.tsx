"use client";
import Links from "./links";
import EndButtons from "./end-buttons";
import { useState, useEffect } from "react";
import Drawer from "./drawer";
import { NavLink } from "./navlink";

export default function Navbar() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY <= 25;
      // Functional updater so React bails out when the value is unchanged,
      // avoiding a re-render of the navbar on every single scroll event.
      setNavbarTransparent((prev) => (prev === next ? prev : next));
    };

    handleScroll(); // sync state if the page loads already scrolled
    // Passive listener so scrolling is never blocked on this handler.
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let transparentCss = "navbar sticky top-0 z-50";
  let solidCss = "navbar sticky top-0 z-50 bg-esar-green/80 backdrop-blur-xs";

  let navlinks: NavLink[] = [
    { href: "/about", label: "About Us" },
    { href: "/join-us", label: "Join Us" },
    { href: "/contact-us", label: "Contact Us" },
    {
      href: "https://sites.google.com/kcesar.org/members",
      label: "Members",
      external: true,
    },
  ];

  return (
    <div className={navbarTransparent ? transparentCss : solidCss}>
      <div className="navbar-start">
        <Drawer navlinks={navlinks} />
      </div>
      <Links navlinks={navlinks} />
      <div className="navbar-end">
        <EndButtons />
      </div>
    </div>
  );
}
