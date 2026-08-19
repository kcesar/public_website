import { JoinedSession } from "./trainingdates";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Turn the compact date strings ("9/2/26", "11/7-11/8/26") into a readable
// label ("Sep 2", "Nov 7-8"). Falls back to the raw string if it can't parse.
function formatDate(raw: string): string {
  const parse = (s: string) => {
    const p = s.split("/");
    return { m: parseInt(p[0], 10), d: parseInt(p[1], 10) };
  };
  const range = raw.split("-");
  if (range.length === 2) {
    const a = parse(range[0]);
    const b = parse(range[1]);
    if (!isNaN(a.m) && !isNaN(a.d) && a.m === b.m) {
      return `${MONTHS[a.m - 1] ?? ""} ${a.d}–${b.d}`;
    }
  }
  const one = parse(raw);
  if (!isNaN(one.m) && !isNaN(one.d)) {
    return `${MONTHS[one.m - 1] ?? ""} ${one.d}`;
  }
  return raw;
}

function LocationCell({ session }: { session: JoinedSession }) {
  const loc = session.location;
  if (loc.google_maps_url) {
    return (
      <a
        href={loc.google_maps_url}
        className="text-trail underline hover:text-trail/70"
      >
        {loc.name}
      </a>
    );
  }
  return <span className="text-lichen">{loc.name || "TBD"}</span>;
}

export default function TrainingCalendar({
  sessions,
}: {
  sessions: JoinedSession[];
}) {
  // Group sessions into arrays by course name, preserving order.
  const sortedSessions: JoinedSession[][] = [];
  sessions.forEach((session) => {
    const courseName = session.course.name;
    const index = sortedSessions.findIndex(
      (s) => s[0].course.name === courseName
    );
    if (index === -1) {
      sortedSessions.push([session]);
    } else {
      sortedSessions[index].push(session);
    }
  });

  return (
    <div className="flex w-full flex-col gap-6">
      {sortedSessions.map((group, index) => {
        const course = group[0].course;
        const hasTime = group.some((s) => s.session.course_start_time);
        return (
          <div
            key={index}
            className="w-full rounded-lg border border-moss/40 bg-canopy/40 p-6 md:p-8"
          >
            <h3 className="font-gin text-2xl tracking-wide text-bone md:text-3xl">
              {course.name}
            </h3>

            {course.prerequisites.length > 0 && (
              <div className="pt-3">
                <p className="eyebrow !text-lichen pb-1">Prerequisites</p>
                <ul className="list-disc space-y-0.5 pl-5 text-sm text-bone/70">
                  {course.prerequisites.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="overflow-x-auto pt-5">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-moss/40">
                    <th className="eyebrow !text-lichen py-2 pr-6 font-normal">
                      Date
                    </th>
                    {hasTime && (
                      <th className="eyebrow !text-lichen py-2 pr-6 font-normal">
                        Time
                      </th>
                    )}
                    <th className="eyebrow !text-lichen py-2 font-normal">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.map((session, i) => (
                    <tr key={i} className="border-b border-moss/20">
                      <td className="whitespace-nowrap py-3 pr-6 font-gin text-lg tracking-wide text-bone">
                        {formatDate(session.session.course_date)}
                      </td>
                      {hasTime && (
                        <td className="whitespace-nowrap py-3 pr-6 text-bone/80">
                          {session.session.course_start_time
                            ? `${session.session.course_start_time}–${session.session.course_end_time}`
                            : "—"}
                        </td>
                      )}
                      <td className="py-3">
                        <LocationCell session={session} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
