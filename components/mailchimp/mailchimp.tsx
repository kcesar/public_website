import jsonp from "jsonp"
import { FormEvent } from "react"

const url = 'https://kcesar.us2.list-manage.com/subscribe/post-json?u=ec37197c1d8d927011aee85cf&amp;id=ea26b6ede3&amp;f_id=00cb68e3f0';

export const fields = [
  {
    name: 'EMAIL',
    placeholder: 'Email',
    type: 'email',
    required: true,
  },
  {
    name: 'FNAME',
    placeholder: 'First Name',
    type: 'text',
    required: true,
  },
  {
    name: 'LNAME',
    placeholder: 'Last Name',
    type: 'text',
    required: true,
  },
  { // This is a hidden field that Mailchimp uses to track the source of the subscription.
    name: 'MMERGE7',
    type: 'hidden',
    value: 'kcesar.org',
    readOnly: true,
  },
  { // This is a hidden field that Mailchimp uses to track if the form is being submitted by a human or a bot.
    // It should be left empty to avoid spam bots from submitting the form.
    name: "b_ec37197c1d8d927011aee85cf_ea26b6ede3",
    type: 'hidden',
    tabIndex: -1,
    readOnly: true,
  }
];

const isValidEmail = (email: string) => {
  const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
  return regex.test(email);
}

export const postSubscription = (e: FormEvent<HTMLFormElement>): Promise<string> => {
  if (!isValidEmail(e.currentTarget.EMAIL.value)) return Promise.reject("Invalid email address");
  const values = fields.map(field => {
    return `${field.name}=${encodeURIComponent(e.currentTarget[field.name].value)}`;
  }).join("&");
  const postUrl = `${url}&${values}`;
  return new Promise((resolve, reject) => {
    jsonp(postUrl, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        resolve("You are already subscribed to our newsletter.");
      } else if (err || data.result !== 'success') {
        console.error(err, data.msg);
        reject("Error submitting form, please try again later.");
      } else {
        resolve("You have successfully subscribed to our newsletter.");
      };
    });
  });
};

export function MailChimpTitle() {
  return (
    <h3>STAY CONNECTED</h3>
  );
}

export function MailChimpSubtext() {
  return (
    <span>Sign up for <i>The Dispatch</i>, our quarterly newsletter featuring wilderness safety tips and rescue stories.</span>
  );
}

export function MailChimpFields({ className = '' }: {  className?: string }) {
  return (
    <>
      {fields.map(input => 
        <input
          { ...input }
          key={input.name}
          className={className}
        />
      )}
    </>
  );
}

export function MailChimpDisclaimer() {
  return (
    <div className="text-xs text-gray-500">
      We will not share your information with anyone else.
    </div>
  );
}
