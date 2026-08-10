import React from "react";

export default function QuizItem({
  question,
  answer,
}: {
  question: string;
  answer: string | string[] | React.ReactNode;
}) {
  const renderAnswer = () => {
    if (Array.isArray(answer)) {
      return answer.map((item, idx) => <div key={idx}>{item}</div>);
    }
    if (typeof answer === "string") {
      return <div>{answer}</div>;
    }
    return answer;
  };

  return (
    <div className="card bg-canopy border border-moss/40 w-full drop-shadow-sm mb-6">
      <div className="card-body">
        <p className="eyebrow !text-lichen pb-1">Question</p>
        <p className="text-bone">{question}</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-trail hover:text-trail/70 font-stratum uppercase tracking-wide text-sm">
            Show / Hide Answer
          </summary>
          <div className="mt-3 text-bone/90">{renderAnswer()}</div>
        </details>
      </div>
    </div>
  );
}
