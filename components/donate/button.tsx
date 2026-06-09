import Link from "next/link";

export default function DonateButton() {
  return (
    <div className="">
      <Link
        href="/donate"
        className="btn btn-ghost border-none flex text-white bg-orange-700 hover:bg-orange-800 hover:border-none"
      >
        Donate
      </Link>
    </div>
  );
}
