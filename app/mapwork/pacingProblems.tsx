import Image from "next/image";

import QuizItem from "./quizItem";

export default function PacingProblems({}: {}) {
  const pacingProblems = [
    { question: "Joe is calculating his pace. If he walks 1000 feet in 196 paces, what is the length of his pace?", answer: "1000 feet ÷ 196 paces = approximately 5.1 feet per pace" },
    { question: "Susan's pace is 4.5 feet. If she needs to travel 1140 feet how many paces does she need to take?", answer: "1140 feet ÷ 4.5 feet per pace = approximately 253" },
    { question: "Michael's pace is 4.8 feet. If he needs to travel 235 meters how many paces does he need to take?", answer: [
      "235 meters × 3.28 feet per meter = 770.8 feet",
      "770.8 feet ÷ 4.8 feet per pace = approximately 161 paces"
    ]},
    { question: "Megan and Zoe have partnered for a compass run. Megan's pace is 4.7 feet and Zoe's pace is 5.25 feet. During the compass run both Megan and Zoe were counting their paces, but Zoe forgot what her count was. They stop to confer. Megan has counted 57 paces so far. If Zoe returns to Megan's position, what should her current pace count be?", answer: [
      "Megan's distance: 57 paces × 4.7 feet per pace = 267.9 feet",
      "Zoe's pace count: 267.9 feet ÷ 5.25 feet per pace = approximately 51 paces"
    ]},
  ];
  return (
    <>
      <h3 className="mb-4">Pacing</h3>
      <p className="mb-4">
        Pacing is a method to keep track of distance. A pace is the distance that you travel while walking 
        each time the same foot hits the ground. For example, if you lead (take your first step) with your 
        left foot, then you will count a pace each time your right foot touches the ground. For the purposes 
        of ESAR Basic Training we generally refer to pace in terms of feet.
      </p>
      <Image
        className="w3-card w3-mobile mx-auto"
        style={{ maxWidth: "600px" }}
        src="/assets/img/1pace.jpg"
        alt="Example of a single pace"
        width={600}
        height={400}
      />
      <p className="my-4">
        To determine your pace you can measure out a known distance (for example 1000 feet) and walk that 
        distance counting your paces. Then divide the distance by the number of paces to get your pace length. 
        For example if you walked 1000 feet in 200 paces then your pace length is 5 feet per pace. You can use 
        this information to estimate distances while navigating.
      </p>
      {pacingProblems.map((item, index) => (
        <QuizItem key={index} {...item} />
      ))}
    </>
  );
}