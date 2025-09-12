import Link from "next/link";

export default function ToolsAndReview({}: {}) {
  return (
    <>
      <div className="card card-border bg-base-100 w-96 drop-shadow-sm float-right ml-8 mb-8">
        <div className="card-body">
          <h2 className="card-title">Unit Conversion Table</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>1 meter</td>
                  <td>=</td>
                  <td>3.28 feet</td>
                </tr>
                <tr>
                  <td>1 inch</td>
                  <td>=</td>
                  <td>2.54 centimeters</td>
                </tr>
                <tr>
                  <td>1 mile</td>
                  <td>=</td>
                  <td>5280 feet</td>
                </tr>
                <tr>
                  <td>1 kilometer</td>
                  <td>=</td>
                  <td>1000 meters</td>
                </tr>
                <tr>
                  <td>1 degree</td>
                  <td>=</td>
                  <td>60 minutes</td>
                </tr>
                <tr>
                  <td>1 minute</td>
                  <td>=</td>
                  <td>60 seconds</td>
                </tr>
              </tbody>
						</table>
        </div>
      </div>
      <h3 className="mt-8">Tools</h3>
      <p className="my-4">
        In order to complete this supplemental coursework you will need some basic tools. 
        These items are included in the navigation kit that you will receive at Course B. 
        However, if you have not yet received your navigation kit then these printable versions 
        will be sufficient for now.
      </p>
      <p><b>Pencil</b> - Pencils are preferable because you may need to make corrections or revise your plan.</p>
      <p><b>Ruler</b> - A tenths ruler makes calculations easier than a standard ruler. <Link href={"./assets/doc/tenths-ruler.pdf"} target="_blank" className="underline hover:text-esar-green">Tenths Ruler PDF (download)</Link></p>
      <p><b>Protractor</b> - A 360° protractor, clear is preferable. <Link href={"./assets/doc/protractor.pdf"} target="_blank" className="underline hover:text-esar-green">Protractor PDF (download)</Link></p>
      <p><b>Calculator</b> - A basic calculator for doing simple math.</p>
      <h3 className="mt-8">Coordinate Systems</h3>
      <p className="my-4">
        The most common coordinate systems used in search and rescue are Latidude/Longitude and UTM. 
        For the purposes of this supplemental coursework we will stick to these and assume the WGS-84 
        datum. Below is some useful information to review. There are plenty of resources available 
        online if you want to delve into more detail or learn about other coordinate systems.
      </p>
      <h4>Latitude/Longitude</h4>
      <p className="my-4">
        Coordinates in Latitude and Longitude are expressed as some combination 
        of Degrees, Minutes, and Seconds. There are 60 minutes in a degree, and 60 seconds in a 
        minute. You can convert between formats using simple division and multiplication. You are 
        likely to encounter them in the following formats:
      </p>
      <ul>
        <li><b>N47.5068° W121.7390°</b> - Degrees Only (&ldquo;Decimal Degrees&rdquo;)</li>
        <li><b>N47°30.408&apos; W121°44.341&apos;</b> - Degrees and Minutes (&ldquo;Degrees Decimal Minutes&rdquo;)</li>
        <li><b>N47°30&apos;24&quot; W121°44&apos;20&quot;</b> - Degrees, Minutes, and Seconds (&ldquo;Degrees Minutes Seconds&rdquo;)</li>
      </ul>
      <h4 className="mt-4">Universal Transverse Mercator (UTM)</h4>
      <p className="my-4">
        Coordinates in UTM are expressed in meters and in the context of a Grid Zone. 
        The Grid Zone is determined based on a system of &ldquo;Zones&rdquo; and longitudinal &ldquo;Bands&rdquo;. For the purposes 
        of this coursework it is sufficient to know that ESAR&apos;s primary area of operations lies in the 10T 
        Grid Zone. UTM coordinates describe a position within the Grid Zone as an Easting and Northing; the 
        distance, in meters, east and north from the southwest corner of the Grid Zone:
      </p>
      <ul>
        <li><b>10T 0549596E 5262255N </b> - Grid Zone, Easting, and Northing</li>
      </ul>
    </>
  );
}