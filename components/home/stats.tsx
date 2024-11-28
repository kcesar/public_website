"use client";

import CountUp from "react-countup";

export default function Stats({
  number,
  description,
}: {
  number: Number;
  description: string;
}) {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <div className="text-center">
          <span className="font-komet text-6xl block pb-4">
            <CountUp
              start={0}
              end={number.valueOf()}
              duration={4}
              scrollSpyDelay={500}
              enableScrollSpy
              scrollSpyOnce={true}
            />
            +
          </span>
          <span className="font-komet text-2xl block">{description}</span>
        </div>
      </div>
    </div>
  );
}
