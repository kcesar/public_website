'use client';

import { FormEvent, useRef, useState } from "react";
import OverlaySpinner from "../spinner/overlay-spinner";
import { MailChimpDisclaimer, MailChimpFields, MailChimpSubtext, MailChimpTitle, postSubscription } from "../mailchimp/mailchimp";

export default function MailchimpSubscibeModal() {
  const [thankYou, setThankYou] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const showModal = () => modal.current?.showModal();
  const closeModal = () => modal.current?.close();

  const handelSuccess = (message: string) => {
    setThankYou(message);
    setTimeout(() => {
      closeModal();
      setShowSpinner(false);
      setThankYou(null);
      form.current?.reset();
    }, 2000);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setShowSpinner(true)
    postSubscription(e)
    .then((res) => {
      handelSuccess(res);
    })
    .catch((err) => {
      setError(err);
      setShowSpinner(false)
    });
  }
  
  return (
    <>
      <button className="btn" onClick={showModal}>Sign Up For Our Newsletter</button>
      <dialog ref={modal}
        id="my_modal_1"
        className="modal"
        onKeyDown={(e) => {
          if (e.key === "Escape" && showSpinner) e.preventDefault()
        }}
      >
        <div className="modal-box">
          {showSpinner && <OverlaySpinner label="Submitting" />}
          {thankYou && <ThankYou message={thankYou} />}
          <form ref={form} className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} onChange={() => setError(null)}>
            <MailChimpTitle />
            <MailChimpSubtext />
            <MailChimpFields className="input input-xl input-neutral border border-gray-800" />
            {error && <span className="text-red-500">{error}</span>}
            <MailChimpDisclaimer />
            <div className="flex gap-4 justify-end">
              <button className="btn" type="button" onClick={closeModal}>Cancel</button>
              <button className="btn bg-esar-green text-white" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

function ThankYou({message}: {message: string}) {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white z-50 flex flex-col items-center justify-center">
      <span>{message}</span>
      <h2>Thank You!</h2>
    </div>
  );
}