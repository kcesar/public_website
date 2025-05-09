'use client';

import { FormEvent, useRef, useState } from "react";
import { fields, postSubscription } from "../mailchimp/mailchimp";

export default function MailchimpSubscribeForm() {
  const [thankYou, setThankYou] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handelSuccess = (message: string) => {
    setThankYou(message);
    setTimeout(() => {
      setThankYou(null);
      form.current?.reset();
    }, 2000);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setError(null);
    postSubscription(e)
    .then((res) => {
      handelSuccess(res);
    })
    .catch((err) => {
      setError(err);
    });

  }

  return (
    <>
      <form ref={form} className="flex flex-wrap items-center justify-center gap-4" onSubmit={handleSubmit}>
        {fields.map(input => 
          <input
            { ...input }
            key={input.name}
            className="input input-xl input-neutral border border-gray-800 w-64"
          />
        )}
        <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
          <input type="text" name="b_ec37197c1d8d927011aee85cf_ea26b6ede3" tabIndex={-1} value="" readOnly></input>
        </div>
        <button className="btn bg-esar-green text-white w-64" type="submit">Submit</button>
      </form>
      {error && <span className="text-red-500">{error}</span>}
      {thankYou && <span>{thankYou}</span>}
    </>
  );
}