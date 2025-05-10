import MailchimpSubscibeModal from "../mailchimp/mailchimp-subscribe-modal";
import DonateButton from "../donate/button";

export default function EndButtons() {
  return (
    <div className="menu menu-horizontal px-1 gap-2">
      <div className="hidden xl:inline-block">
        <MailchimpSubscibeModal />
      </div>
      <DonateButton />
    </div>
  );
}
