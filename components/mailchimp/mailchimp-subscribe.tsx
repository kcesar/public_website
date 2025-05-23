"use client";

import { FormEvent, useRef, useState } from "react";
import {
  MailChimpDisclaimer,
  MailChimpFields,
  MailChimpSubtext,
  MailChimpTitle,
  postSubscription,
} from "../mailchimp/mailchimp";

export default function MailchimpSubscribeForm() {
  const [thankYou, setThankYou] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handelSuccess = (message: string) => {
    setThankYou(message);
    setTimeout(() => {
      setThankYou(null);
      form.current?.reset();
    }, 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    postSubscription(e)
      .then((res) => {
        handelSuccess(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="bg-base-200">
        <MailChimpTitle />
        <MailChimpSubtext />
        <form
          ref={form}
          className="flex flex-wrap items-center justify-center gap-4"
          onSubmit={handleSubmit}
          onChange={() => setError(null)}
        >
          <MailChimpFields className="input input-xl input-neutral border border-gray-800 w-64" />
          <button
            disabled={isSubmitting}
            className="btn bg-esar-green text-white w-64"
            type="submit"
          >
            Submit
          </button>
        </form>
        {error && <span className="text-red-500">{error}</span>}
        {thankYou && <span>{thankYou}</span>}
        <MailChimpDisclaimer />
      </div>
    </>
  );
}
