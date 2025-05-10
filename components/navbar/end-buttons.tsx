import Link from "next/link";
import MailchimpSubscibeModal from "../mailchimp/mailchimp-subscribe-modal";

export default function EndButtons() {
  return (
    <div className="menu menu-horizontal px-1 gap-2">
      <MailchimpSubscibeModal />
      <Link
        href="/donate"
        className="btn btn-ghost flex text-white bg-orange-500"
      >
        Donate
      </Link>
    </div>
  );
}
