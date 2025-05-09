'use client';

import { FormEvent, useRef, useState } from "react";
import OverlaySpinner from "../spinner/overlay-spinner";
import { fields, postSubscription } from "../mailchimp/mailchimp";

export default function MailchimpSubscibeModalButton() {
  const modal = useRef<HTMLDialogElement>(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const showModal = () => modal.current?.showModal();
  const closeModal = () => modal.current?.close();
  const handelSuccess = () => {
    closeModal();
    setShowSpinner(false);
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
          <NewsletterSignupForm
            onSubmit={() => setShowSpinner(true)}
            onError={() => setShowSpinner(false)}
            onCancel={closeModal}
            onSuccess={handelSuccess}
          />
        </div>
      </dialog>
    </>
  );
}

type NewsletterSignupFormProps = {
  onSubmit: () => void;
  onError: () => void;
  onCancel: () => void;
  onSuccess: () => void;
};

function NewsletterSignupForm({ onSubmit, onError, onCancel, onSuccess }: NewsletterSignupFormProps) {
  const [thankYou, setThankYou] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handelSuccess = (message: string) => {
    setThankYou(message);
    setTimeout(() => {
      onSuccess();
      setThankYou(null);
      form.current?.reset();
    }, 2000);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    onSubmit();
    postSubscription(e)
    .then((res) => {
      handelSuccess(res);
    })
    .catch((err) => {
      setError(err);
      onError();
    });
  }

  return (
    <>
      {thankYou && <ThankYou message={thankYou} />}
      <form ref={form} className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
        <h3>ESAR Quarterly Newsletter</h3>
        {fields.map(input => 
          <input
            { ...input }
            key={input.name}
            className="input input-xl input-neutral border border-gray-800"
          />
        )}
        <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
          <input type="text" name="b_ec37197c1d8d927011aee85cf_ea26b6ede3" tabIndex={-1} value="" readOnly></input>
        </div>
        {error && <span className="text-red-500">{error}</span>}
        <span>We will not share your information with anyone else.</span>
        <div className="flex gap-4 justify-end">
          <button className="btn" type="button" onClick={onCancel}>Cancel</button>
          <button className="btn bg-esar-green text-white" type="submit">Submit</button>
        </div>
      </form>
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