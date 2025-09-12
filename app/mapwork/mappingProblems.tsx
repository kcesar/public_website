'use client';

import React from "react";

import Link from "next/link";

import QuizItem from "./quizItem";
import UtmMapPlot from "./utmItem";

export default function MappingProblems({}: {}) {
  const [mappingQuestions, setMappingQuestions] = React.useState([
    { question: "Plot 10T 0619350E 5253637N", answer: <UtmMapPlot easting={619350} northing={5253637} /> },
    { question: "Plot 10T 0619708E 5252790N", answer: <UtmMapPlot easting={619708} northing={5252790} /> },
    { question: "Plot 10T 0619693E 5253869N", answer: <UtmMapPlot easting={619693} northing={5253869} /> },
    { question: "Plot 10T 0619083E 5253522N", answer: <UtmMapPlot easting={619083} northing={5253522} /> },
    { question: "Plot 10T 0619104E 5252818N", answer: <UtmMapPlot easting={619104} northing={5252818} /> },
    { question: "Plot 10T 0619047E 5253858N", answer: <UtmMapPlot easting={619047} northing={5253858} /> },
    { question: "From the intersection at 10T 0619742E 5252932N walk northbound on the road for 290m.", answer: <UtmMapPlot easting={619789} northing={5253195} /> },
    { question: "Follow the Dodge Ridge Chairlift uphill until you reach 3160ft elevation, then travel 355ft on a bearing of 186&deg;T", answer: <UtmMapPlot easting={619224} northing={5253249} /> },    
  ]);

  function addRandomMapProblem() {
		let randomCoordinates = getRandomCoordinates();
    setMappingQuestions(prev => [...prev, {
      question: `Plot 10T 0${randomCoordinates.x}E ${randomCoordinates.y}N`,
      answer: <UtmMapPlot easting={randomCoordinates.x} northing={randomCoordinates.y} />
    }]);
	}

	function getRandomCoordinates() {
		return {
			x: 619000 - 50 + getRandomInt(1150),
			y: 5253000 -300 + getRandomInt(1400)
		}
	}

	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}

  return (
    <>
      <h3 className="mb-4">Mapping Problems</h3>
      <p className="mb-4">
        In order to complete this set of problems you will need to print and familiarize yourself with <Link href={"./assets/img/map_01.jpg"} target="_blank" className="underline hover:text-esar-green">The Map (download)</Link>
      </p>
      {mappingQuestions.map((item, index) => (
        <QuizItem key={index} {...item} />
      ))}
      <button className="btn bg-esar-green hover:bg-base-300 text-white border-none" onClick={addRandomMapProblem}>Add Random Map Problem</button>
    </>
  );
}