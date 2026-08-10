"use client";

import { useSyncExternalStore } from "react";
import CountUp from "react-countup";

// "Have we hydrated yet?" expressed as an external store rather than a
// setState-in-effect. Same two-pass behaviour (server/first paint renders the
// plain number, the client swaps in the animated CountUp), but without the
// cascading re-render that react-hooks/set-state-in-effect flags.
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Stats({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  const isMounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

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
