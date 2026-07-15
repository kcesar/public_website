import { ReactNode } from "react";

export default function BasicLayout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center pb-10">{children}</div>;
}
