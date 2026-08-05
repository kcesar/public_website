export default function PrerequisitesCard({
  prerequisites,
}: {
  prerequisites: string[];
}) {
  return (
    <div className="py-5 w-full flex flex-col items-center">
      <div className="card bg-canopy border border-moss/40 w-3/4 md:w-1/2">
        <div className="card-body">
          <p className="eyebrow !text-lichen pb-1">Prerequisites</p>
          <ul className="list-disc pl-4 text-bone/90">
            {prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
