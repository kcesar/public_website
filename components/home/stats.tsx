"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Stats({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <span className="font-gin text-6xl md:text-7xl block pb-3 text-trail">
            {number || 0}+
          </span>
          <span className="eyebrow !text-sm text-lichen block">
            {description}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <span className="font-gin text-6xl md:text-7xl block pb-3 text-trail">
          <CountUp
            start={0}
            end={number || 0}
            duration={4}
            scrollSpyDelay={500}
            enableScrollSpy
            scrollSpyOnce={true}
            suffix="+"
          >
            {/* https://stackoverflow.com/a/78057764 */}
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        </span>
        <span className="eyebrow !text-sm text-lichen block">
          {description}
        </span>
      </div>
    </div>
  );
}
