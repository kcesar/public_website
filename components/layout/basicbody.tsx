import { ReactNode } from "react";

export default function BasicBody({ children }: { children: ReactNode }) {
  return (
    <div className="container flex flex-col items-center px-8">{children}</div>
  );
}
