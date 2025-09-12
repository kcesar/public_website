import React from 'react';

const imagePath = './assets/img/map_01.jpg';
const imageOriginalWidth = 1540;
const imageRenderSize = 800;
const imageScale = imageRenderSize / imageOriginalWidth;
const containerHeight = 300;
const containerWidth = 300;

const origin = { x: 135, y: -1413 };
const originUTM = { easting: 619000, northing: 5253000 };
const sePoint = { x: 1299, y: -1435 };
const nePoint = { x: 1323, y: -267 };

function linearDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculateSlope(x1: number, y1: number, x2: number, y2: number) {
    return (y1 - y2) / (x1 - x2);
}

const eastingScale = linearDistance(origin.x, origin.y, sePoint.x, sePoint.y) / 1000;
const northingScale = linearDistance(sePoint.x, sePoint.y, nePoint.x, nePoint.y) / 1000;
const eastingSlope = calculateSlope(origin.x, origin.y, sePoint.x, sePoint.y);
const northingSlope = calculateSlope(sePoint.x, sePoint.y, nePoint.x, nePoint.y);

function getMapContainerPlot(easting: number, northing: number) {
    const _easting = (easting - originUTM.easting) * eastingScale;
    const _northing = (northing - originUTM.northing) * northingScale;

    let eastingPlot = {
        x: origin.x + (_easting * Math.sqrt(1 / (1 + Math.pow(eastingSlope, 2)))),
        y: origin.y + (eastingSlope * _easting * Math.sqrt(1 / (1 + Math.pow(eastingSlope, 2))))
    };

    let northingPlot = {
        x: eastingPlot.x + (_northing * Math.sqrt(1 / (1 + Math.pow(northingSlope, 2)))),
        y: eastingPlot.y + (northingSlope * _northing * Math.sqrt(1 / (1 + Math.pow(northingSlope, 2))))
    };

    return {
        x: -(northingPlot.x * imageScale - (containerWidth / 2)),
        y: (northingPlot.y * imageScale + (containerHeight / 2))
    };
}

export default function UtmMapPlot({
    easting = originUTM.easting,
    northing = originUTM.northing,
}: {
    easting: number;
    northing: number;
}) {
    const offsets = getMapContainerPlot(easting, northing);

    return (
      <div
        className="map_container"
        style={{
          width: containerWidth,
          height: containerHeight,
          backgroundImage: `url('${imagePath}')`,
          backgroundSize: `${imageRenderSize}px`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${offsets.x}px ${offsets.y}px`,
          border: "2px solid black",
          position: "relative",
        }}
      >
        <div
          className="map_point"
          style={{
            width: 16,
            height: 16,
            border: "2px solid red",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -8,
            marginTop: -8,
          }}
        ></div>
        <div
          className="map_circle"
          style={{
            width: 4,
            height: 4,
            backgroundColor: "red",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -2,
            marginTop: -2,
          }}
        ></div>
      </div>
    );
}
