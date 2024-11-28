import Image from "next/image";
import { ReactNode } from "react";
import { FaPaypal } from "react-icons/fa";

export type DonateCardProps = {
  title: string;
  text: ReactNode;
  imageHref: string;
  imageAlt: string;
  showButton: boolean;
  button?: ReactNode;
};

export default function DonateCard({ props }: { props: DonateCardProps }) {
  return (
    <div className="card bg-base-300 w-72 md:w-96 shadow-xl">
      <figure>
        <Image
          src={props.imageHref}
          alt={props.imageAlt}
          height={500}
          width={500}
          className="brightness-75 object-cover max-w-72 md:max-w-96 max-h-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        {props.text}
        {props.showButton && (
          <div className="card-actions justify-end">{props.button}</div>
        )}
      </div>
    </div>
  );
}

export function SimpleDonateLinkButton({
  href,
  buttonIcon,
}: {
  href: string;
  buttonIcon: ReactNode;
}) {
  return (
    <a href={href}>
      <div className="btn text-white bg-esar-green flex justify-center">
        Donate Now {buttonIcon}
      </div>
    </a>
  );
}

export function PaypalDonateButton() {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="6R8CW7RS2HRBN" />
      <button className="btn bg-esar-green text-white flex justify-center">
        Donate Now <FaPaypal className="w-5 h-5" />
      </button>
    </form>
  );
}
