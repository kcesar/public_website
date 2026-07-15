"use client";

import { useEffect, useState } from "react";

const POSTER =
  "https://storage.googleapis.com/kcesar-website-assets/marckworth1080frame1.png";
const VIDEO =
  "https://storage.googleapis.com/kcesar-website-assets/marckworth1080.mp4";
const className =
  "fixed -z-20 w-screen h-screen object-cover top-0 left-0 brightness-75";

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
