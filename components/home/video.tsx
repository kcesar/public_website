"use client";

import { useEffect, useState } from "react";

const POSTER =
  "https://storage.googleapis.com/kcesar-website-assets/marckworth1080frame1.png";
const VIDEO =
  "https://storage.googleapis.com/kcesar-website-assets/marckworth1080.mp4";
// w-full (not w-screen/100vw): 100vw includes the scrollbar width and overflows
// horizontally. h-lvh (large-viewport height), not h-full/h-screen: on iOS a
// fixed element's percentage/vh height tracks the shrinking viewport as the URL
// bar collapses on scroll, and object-cover then rescales the poster to re-cover
// the taller box — a visible "zoom" as you scroll. lvh is fixed to the URL-bar-
// hidden height, so the background never resizes (and never leaves a gap).
const className =
  "fixed -z-20 top-0 left-0 h-lvh w-full object-cover brightness-75";

export default function Video() {
  // Default to the static poster: never autoplay before we know the user's
  // motion preference, and don't ship a 1080p video to phones. Upgrade to the
  // looping video only on wider screens when reduced motion is not requested.
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");
    const update = () => setPlayVideo(!motion.matches && wide.matches);
    update();
    motion.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  if (!playVideo) {
    // Decorative background; the poster carries no information.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={POSTER} alt="" aria-hidden="true" className={className} />;
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={POSTER}
      className={className}
    >
      <source src={VIDEO} type="video/mp4" />
    </video>
  );
}
