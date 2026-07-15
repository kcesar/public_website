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

// Parse the compact date strings ("9/2/26", "11/7-11/8/26") into a month label
// and a day (or day-range) for a calendar tile. Falls back to the raw string.
function formatDate(raw: string): { month: string; days: string } {
  const parse = (s: string) => {
    const p = s.split("/");
    return { m: parseInt(p[0], 10), d: parseInt(p[1], 10) };
  };
  const range = raw.split("-");
  if (range.length === 2) {
    const a = parse(range[0]);
    const b = parse(range[1]);
    if (!isNaN(a.m) && !isNaN(a.d) && a.m === b.m) {
      return { month: MONTHS[a.m - 1] ?? "", days: `${a.d}–${b.d}` };
    }
  }
  const one = parse(raw);
  if (!isNaN(one.m) && !isNaN(one.d)) {
    return { month: MONTHS[one.m - 1] ?? "", days: `${one.d}` };
  }
  return { month: "", days: raw };
}

function DateTile({ session }: { session: JoinedSession }) {
  const { month, days } = formatDate(session.session.course_date);
  const start = session.session.course_start_time;
  const end = session.session.course_end_time;
  const loc = session.location;
  const hasLoc = session.course.id !== "CRSA" && loc?.google_maps_url;

  return (
    <div className="flex min-w-[80px] flex-col items-center rounded-lg border border-moss/40 bg-timber/60 px-4 py-3 text-center">
      {month && (
        <span className="font-stratum text-[0.65rem] uppercase tracking-widest text-trail">
          {month}
        </span>
      )}
      <span className="font-gin text-2xl leading-tight text-bone">{days}</span>
      {start && (
        <span className="pt-1 text-[0.65rem] text-lichen">
          {start}–{end}
        </span>
      )}
      {hasLoc && (
        <a
          href={loc.google_maps_url!}
          className="pt-1 text-[0.65rem] text-trail underline hover:text-trail/70"
        >
          {loc.name}
        </a>
      )}
    </div>
  );
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

            <div className="flex flex-wrap gap-3 pt-5">
              {group.map((session, i) => (
                <DateTile key={i} session={session} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
