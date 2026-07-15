import { describe, expect, test } from "bun:test";
import { getTrainingSessions } from "@/app/join-us/training-materials/trainingdates";

describe("getTrainingSessions", () => {
  const sessions = getTrainingSessions();

  test("returns a non-empty list of joined sessions", () => {
    expect(sessions.length).toBeGreaterThan(0);
  });

  test("joins every session to a matching course and location", () => {
    for (const s of sessions) {
      // The join uses non-null assertions, so a bad course_id/location_id would
      // silently yield undefined. Verify each session resolves to a real row.
      expect(s.course).toBeDefined();
      expect(s.course.id).toBe(s.session.course_id);
      expect(s.location).toBeDefined();
      expect(s.location.id).toBe(s.session.location_id);
    }
  });
});
