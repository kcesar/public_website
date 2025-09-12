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
    <div className="card card-border bg-base-100 w-full drop-shadow-sm mb-8">
      <div className="card-body">
        <h2 className="card-title">Question</h2>
        <p>{question}</p>
        <details className="mt-4">
          <summary className="cursor-pointer hover:text-esar-green">
            Show/Hide Answer
          </summary>
          <div className="mt-2">
            {renderAnswer()}
          </div>
        </details>
      </div>
    </div>
  );
}
