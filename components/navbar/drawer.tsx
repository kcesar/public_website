import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./logo";
import { NavLink } from "./navlink";
import MailchimpSubscibeModal from "../mailchimp/mailchimp-subscribe-modal";
import DonateButton from "../donate/button";

export default function Drawer({ navlinks }: { navlinks: NavLink[] }) {
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  //@ts-ignore fine to skip for now
  const onLinkClick = async () => {
    // click checkbox my-drawer to close the drawer
    timeout(1000);
    // @ts-ignore we know the element exists
    document.getElementById("my-drawer").click();
  };

  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="px-2 flex gap-2 items-center">
          <label htmlFor="my-drawer" className="md:hidden">
            <FaBarsStaggered className="pl-2 w-6 h-6 text-white" />
          </label>
          <div className="hidden md:inline-block">
            <Logo />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li
            key="homeidx"
            className="hover:bg-esar-green hover:text-white rounded"
          >
            <Link href="/" onClick={onLinkClick}>
              <h3>Home</h3>
            </Link>
          </li>
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-esar-green hover:text-white rounded"
            >
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <h3>{link.label}</h3>
                </a>
              ) : (
                <Link href={link.href} onClick={onLinkClick}>
                  <h3>{link.label}</h3>
                </Link>
              )}
            </li>
          ))}

          <li className="grow pointer-events-none bg-inherit" />
          <li>
            <MailchimpSubscibeModal />
          </li>
          <li className="flex items-center">
            <DonateButton />
          </li>
          <li className="pointer-events-none">
            <div className="flex justify-center items-center p-4">
              <Logo />
              <p className="text-center">
                &copy; 2025 King County Explorer Search & Rescue
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
