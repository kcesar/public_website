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
        <div>
          <div className="text-center">
            <span className="font-komet text-6xl block pb-4">
              {number || 0}+
            </span>
            <span className="font-komet text-2xl block">{description}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <div className="text-center">
          <span className="font-komet text-6xl block pb-4">
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
          <span className="font-komet text-2xl block">{description}</span>
        </div>
      </div>
    </div>
  );
}
