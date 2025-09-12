import QuizItem from "./quizItem";

export default function UnitConversion({}: {}) {
  const unitsOfMeasurement = [
    { question: "Convert 5 centimeters to inches.", answer: "5 cm ÷ 2.54 = 1.97 inches" },
    { question: "Convert 3.4 inches to centimeters.", answer: "3.4 in × 2.54 = 8.64 centimeters" },
    { question: "How many kilometers is 1 mile?", answer: "1 mile × 1.609 = 1.609 kilometers" },
    { question: "You are riding with 4x4 to your assignment location. The assignment begins 1100 meters past a forest service gate. The 4x4 driver can use their trip meter to help determine how far to drive. How many tenths of a mile should they drive?", answer: "approximately 7 tenths of a mile: 1100 meters ÷ 1609 = 0.68 miles = 6.8 tenths of a mile" },
    { question: "You are hiking to your assignment location. The assignment begins 2.5 miles past a forest service gate. How many kilometers will you be hiking?", answer: "approximately 4 kilometers: 2.5 miles × 1.609 = 4.02 kilometers" },
  ];
  const coordinateSystems = [
    { question: "How many Minutes is 54.6 Seconds?", answer: "54.6 seconds ÷ 60 = 0.91 minutes" },
    { question: "How many Seconds is 0.70 Minutes?", answer: "0.70 minutes × 60 = 42 seconds" },
    { question: "How many Minutes is 0.8059 Degrees?", answer: "0.8059 degrees × 60 = 48.354 minutes" },
    { question: "Convert N47.4880° W121.7232° to Degrees Decimal Minutes.", answer: [
      "Convert the Decimal Degrees to Minutes:",
      "Latitude: .4880 degrees × 60 = 29.28 minutes",
      "Longitude: .7232 degrees × 60 = 43.392 minutes",
      "N47°29.280' W121°43.392'",
    ]},
    { question: "Convert N47°32'28.1\" W122°10'28.2\" to Decimal Degress.", answer: [
      "Convert the Minutes and Seconds to Decimal Degrees:",
      "Latitude: 32 minutes + (28.1 seconds ÷ 60) = 32.4683 minutes; 32.4683 minutes ÷ 60 = 0.5411 degrees",
      "Longitude: 10 minutes + (28.2 seconds ÷ 60) = 10.4700 minutes; 10.4700 minutes ÷ 60 = 0.1745 degrees",
      "N47.5411° W122.1745°",
    ]},
  ];

  return (
    <>
      <h3 className="mb-4">Units of Measurement</h3>
      {unitsOfMeasurement.map((item, index) => (
        <QuizItem key={index} {...item} />
      ))}
      <h3 className="mb-4">Coordinate Systems</h3>
      {coordinateSystems.map((item, index) => (
        <QuizItem key={index} {...item} />
      ))}
    </>
  );
}