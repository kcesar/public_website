import Link from "next/link";

export default function DonateButton() {
  return (
    <div className="">
      <Link
        href="/donate"
        className="btn border-none flex text-timber bg-beacon font-stratum uppercase tracking-[0.15em] text-sm hover:bg-beacon/85 hover:border-none transition-colors"
      >
        Donate
      </Link>
    </div>
  );
}
