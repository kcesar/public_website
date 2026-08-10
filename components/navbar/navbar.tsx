"use client";
import Links from "./links";
import EndButtons from "./end-buttons";
import { useState, useEffect } from "react";
import Drawer from "./drawer";
import { siteNav } from "@/lib/navigation";

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

  const transparentCss = "navbar sticky top-0 z-50 transition-colors duration-300";
  const solidCss =
    "navbar sticky top-0 z-50 bg-timber/85 backdrop-blur border-b border-moss/40 transition-colors duration-300";

  // Sourced from lib/navigation so nested pages cannot drift out of the menus.
  return (
    <div className={navbarTransparent ? transparentCss : solidCss}>
      <div className="navbar-start">
        <Drawer navlinks={siteNav} />
      </div>
      <Links navlinks={siteNav} />
      <div className="navbar-end">
        <EndButtons />
      </div>
    </div>
  );
}
