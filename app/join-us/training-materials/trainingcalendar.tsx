import Subtitle from "@/components/text/subtitle";
import { JoinedSession } from "./trainingdates";
import PrerequisitesCard from "./prerequisites-card";

export default function TrainingCalendar({
  sessions,
}: {
  sessions: JoinedSession[];
}) {
  // sort sections into their own arrays by course name
  const sortedSessions: JoinedSession[][] = [];
  sessions.forEach((session) => {
    const courseName = session.course.name;
    const index = sortedSessions.findIndex(
      (sessions) => sessions[0].course.name === courseName
    );
    if (index === -1) {
      sortedSessions.push([session]);
    } else {
      sortedSessions[index].push(session);
    }
  });

  return (
    <div className="overflow-x-auto rounded-xl">
      {sortedSessions.map((sessions, index) => (
        <div className="py-4" key={index}>
          <Subtitle content={sessions[0].course.name} />
          <PrerequisitesCard prerequisites={sessions[0].course.prerequisites} />
          <table className="table bg-base-300">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={index}>
                  <td>{session.course.name}</td>
                  <td>
                    {`${session.session.course_date} ${session.session.course_start_time} - ${session.session.course_end_time}`}
                  </td>
                  <td>
                    {session.location.google_maps_url ? (
                      <a
                        className="underline text-blue-400"
                        href={session.location.google_maps_url}
                      >
                        {session.location.name}
                      </a>
                    ) : (
                      session.location.name
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
