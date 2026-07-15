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
      if (window.scrollY > 25) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  let transparentCss = "navbar sticky top-0 z-50 transition-colors duration-300";
  let solidCss =
    "navbar sticky top-0 z-50 bg-timber/85 backdrop-blur border-b border-moss/40 transition-colors duration-300";

  let navlinks: NavLink[] = [
    { href: "/about", label: "About Us" },
    { href: "/join-us", label: "Join Us" },
    { href: "/contact-us", label: "Contact Us" },
    {
      href: "https://accounts.google.com/AccountChooser?continue=https%3A%2F%2Fsites.google.com%2Fkcesar.org%2Fmembers",
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
