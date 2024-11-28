export type Course = {
    id: string;
    name: string;
    prerequisites: string[];
}

const courses: Course[] = [
    {
      id: "CRSA",
      name: "Course A: Orientation",
      prerequisites: [
        "Sign Up for Course A"
      ]
    },
    {
      id: "MEET",
      name: "Meet The Team Hike",
      prerequisites: [
        "Course A"
      ]
    },
    {
      id: "CRSB",
      name: "Course B: Map and Compass",
      prerequisites: [
        "Course A",
        "Acceptance into 2024-25 Training Class",
        "Course Fee Paid ($250) - Do not make a course fee payment until you have successfully registered for Course B"
      ]
    },
    {
      id: "CRSC",
      name: "Course C: Search Theory and Field Practice",
      prerequisites: [
        "Course B",
        "First Aid/CPR/AED Certification"
      ]
    },
    {
      id: "CRS1",
      name: "Course I: Navigation Practice",
      prerequisites: [
        "Course C"
      ]
    },
    {
      id: "CRS2",
      name: "Course II: Navigation Evaluation",
      prerequisites: [
        "Course I"
      ]
    },
    {
      id: "CRS3",
      name: "Course III: Mock Missions",
      prerequisites: [
        "Searcher First Aid"
      ]
    },
    {
      id: "SFA1",
      name: "Introduction to Searcher First Aid",
      prerequisites: [
        "Course B"
      ]
    },
    {
      id: "SFA2",
      name: "Advanced Searcher First Aid",
      prerequisites: [
        "Course II",
        "Introduction to Searcher First Aid"
      ]
    },
    {
      id: "OPS1",
      name: "Operations Orientation",
      prerequisites: [
        "Course III"
      ]
    },
    {
      id: "GRAD",
      name: "Graduation",
      prerequisites: [
        "Course III"
      ]
    }
  ];
  
export type CourseLocation = {
    id: string;
    name: string;
    street_address: string;
    google_maps_url: string | null;
}

const locations: CourseLocation[] = [
    {
      id: "KCSARA",
      name: "King County Search & Rescue Headquarters",
      street_address: "47.512097, -121.882279",
      google_maps_url: "https://goo.gl/maps/GrLHi5q6giKDrTcc7"
    },
    {
      id: "BELLCH",
      name: "Bellevue City Hall",
      street_address: "450 110th Ave NE, Bellevue, WA 98004",
      google_maps_url: "https://goo.gl/maps/G42pfULrz7x"
    },
    {
      id: "ISSYCH",
      name: "Issaquah City Hall",
      street_address: "130 East Sunset Way, Issaquah, WA 98027",
      google_maps_url: "https://goo.gl/maps/7tvtxxQqmQfNn4GX6"
    },
    {
      id: "BELLLB",
      name: "Bellevue Library",
      street_address: "1111 110th Ave NE, Bellevue, WA 98004",
      google_maps_url: "https://goo.gl/maps/wyFBHAuYyEKL3a4U6"
    },
    {
      id: "ESFRHQ",
      name: "Eastside Fire and Rescue Headquarters",
      street_address: "175 Newport Way NW, Issaquah, WA 98027",
      google_maps_url: "https://goo.gl/maps/Q1wfxSyuAPG2"
    },
    {
      id: "FIRE01",
      name: "Bellevue - Fire Station 1",
      street_address: "766 Bellevue Way SE, Bellevue, WA 98004",
      google_maps_url: "https://goo.gl/maps/kRV7ijDgYw8JZBRw7"
    },
    {
      id: "FIRE09",
      name: "Newcastle - Fire Station 9",
      street_address: "12412 Newcastle Way, Bellevue, WA 98006",
      google_maps_url: "https://goo.gl/maps/u2TqQHyxeJj16nwV9"
    },
    {
      id: "FIRE73",
      name: "Issaquah Highlands - Fire Station 73",
      street_address: "1280 NE Park Drive, Issaquah, WA 98029",
      google_maps_url: "https://goo.gl/maps/VBGzyssUaqG2"
    },
    {
      id: "FIRE82",
      name: "Sahalee - Fire Station 82",
      street_address: "1851 228th Ave NE, Sammamish, WA 98074",
      google_maps_url: "https://goo.gl/maps/YTFJBC7ob9B2"
    },
    {
      id: "FIRE83",
      name: "Sammamish - Fire Station 83",
      street_address: "3425 Issaquah-Pine Lake Road SE, Sammamish, WA 98075",
      google_maps_url: "https://goo.gl/maps/g79UAMQz96AEUMro7"
    },
    {
      id: "FIRE85",
      name: "Carnation - Fire Station 85",
      street_address: "3600 Tolt Avenue NE, Carnation, WA 98014",
      google_maps_url: "https://goo.gl/maps/tBwJCitRmT72"
    },
    {
      id: "FIRE91",
      name: "Mercer Island - Fire Station 91",
      street_address: "3030 78th Ave SE, Mercer Island, WA 98040",
      google_maps_url: "https://goo.gl/maps/U7JPgbHJHyZ9HvvW7"
    },
    {
      id: "YMCASM",
      name: "Sammamish YMCA",
      street_address: "831 228th Ave SE, Sammamish, WA 98075",
      google_maps_url: "https://goo.gl/maps/edbzPt8RMko"
    },
    {
      id: "VASAPK",
      name: "Vasa Park Resort & Ballroom",
      street_address: "3560 W Lake Sammamish Pkwy S, Bellevue, WA 98008",
      google_maps_url: "https://goo.gl/maps/jYAxd4YFnU92"
    },
    {
      id: "CWSGYM",
      name: "Central Washington Sammamish GYM",
      street_address: "120 228th Ave NE, Sammamish, WA 98074",
      google_maps_url: "https://goo.gl/maps/jjAox7PF23q"
    },
    {
      id: "CAMPED",
      name: "Camp Edward",
      street_address: "25600 Monroe Camp Rd, Snohomish, WA 98290",
      google_maps_url: "https://goo.gl/maps/SURfVBFYc1K2"
    },
    {
      id: "SEAMTN",
      name: "Seattle Mountaineers",
      street_address: "7700 Sand Point Way NE, Seattle, WA 98115",
      google_maps_url: "https://goo.gl/maps/2vQHCspiamKrNhMn9"
    },
    {
      id: "SNOVLY",
      name: "Snoqualmie Valley Youth Activity Center",
      street_address: "1450 Boalch Ave NW, North Bend, WA 98045",
      google_maps_url: "https://goo.gl/maps/k4ho43yCq8E9FDcL8"
    },
    {
      id: "RATTLE",
      name: "Rattlesnake Ledge Trail Head",
      street_address: "Snoqualmie Valley Trail, North Bend, WA 98045",
      google_maps_url: "https://goo.gl/maps/bqY2VBkeBCSHKoVr9"
    },
    {
      id: "VIRTUL",
      name: "Virtual (Zoom)",
      street_address: "",
      google_maps_url: null
    },
    {
      id: "TBDTBD",
      name: "TBD",
      street_address: "",
      google_maps_url: null
    },
    {
      id: "ISSYSC",
      name: "Issaquah Senior Center",
      street_address: "75 NE Creek Way, Issaquah, WA 98027",
      google_maps_url: "https://maps.app.goo.gl/WiByrxSTcvVZLwcKA"
    }
  ];

export type Session = {
    course_id: string;
    course_date: string;
    course_start_time: string;
    course_end_time: string;
    location_id: string;
}

const sessions: Session[] = [
    {
      course_id: "CRSA",
      course_date: "July 15th",
      course_start_time: "7:00pm",
      course_end_time: "9:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "CRSA",
      course_date: "July 17th",
      course_start_time: "7:00pm",
      course_end_time: "9:00pm",
      location_id: "SEAMTN"
    },
    {
      course_id: "CRSA",
      course_date: "July 23rd",
      course_start_time: "7:00pm",
      course_end_time: "9:00pm",
      location_id: "SEAMTN"
    },
    {
      course_id: "CRSA",
      course_date: "July 25th",
      course_start_time: "7:00pm",
      course_end_time: "9:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "MEET",
      course_date: "July 24th",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "TBDTBD"
    },
    {
      course_id: "MEET",
      course_date: "July 30th",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "TBDTBD"
    },
    {
      course_id: "MEET",
      course_date: "August 8th",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "TBDTBD"
    },
    {
      course_id: "MEET",
      course_date: "August 9th",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "TBDTBD"
    },
    {
      course_id: "CRSB",
      course_date: "September 15th",
      course_start_time: "9:00am",
      course_end_time: "5:00pm",
      location_id: "ESFRHQ"
    },
    {
      course_id: "CRSB",
      course_date: "September 29th",
      course_start_time: "9:00am",
      course_end_time: "5:00pm",
      location_id: "ESFRHQ"
    },
    {
      course_id: "CRSB",
      course_date: "October 12th",
      course_start_time: "9:00am",
      course_end_time: "5:00pm",
      location_id: "FIRE73"
    },
    {
      course_id: "SFA1",
      course_date: "October 6th",
      course_start_time: "9:00am",
      course_end_time: "6:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "SFA1",
      course_date: "October 20th",
      course_start_time: "9:00am",
      course_end_time: "6:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "SFA1",
      course_date: "October 26th",
      course_start_time: "9:00am",
      course_end_time: "6:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "CRSC",
      course_date: "November 2-3",
      course_start_time: "Sat 6:30am",
      course_end_time: "Sun 4:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRSC",
      course_date: "November 9-10",
      course_start_time: "Sat 6:30am",
      course_end_time: "Sun 4:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRSC",
      course_date: "November 23-24",
      course_start_time: "Sat 6:30am",
      course_end_time: "Sun 4:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRS1",
      course_date: "November 23-24",
      course_start_time: "Sat 6:20am",
      course_end_time: "Sun 3:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRS1",
      course_date: "December 7-8",
      course_start_time: "Sat 6:20am",
      course_end_time: "Sun 3:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRS1",
      course_date: "January 4-5",
      course_start_time: "Sat 6:20am",
      course_end_time: "Sun 3:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRS2",
      course_date: "January 18-19",
      course_start_time: "Sat 7:00am",
      course_end_time: "Sun 3:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRS2",
      course_date: "February 1-2",
      course_start_time: "Sat 7:00am",
      course_end_time: "Sun 3:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "CRS2",
      course_date: "February 8-9",
      course_start_time: "Sat 7:00am",
      course_end_time: "Sun 3:00pm",
      location_id: "CAMPED"
    },
    {
      course_id: "SFA2",
      course_date: "February 1st",
      course_start_time: "9:00am",
      course_end_time: "6:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "SFA2",
      course_date: "February 8th",
      course_start_time: "9:00am",
      course_end_time: "6:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "SFA2",
      course_date: "February 15th",
      course_start_time: "9:00am",
      course_end_time: "6:00pm",
      location_id: "KCSARA"
    },
    {
      course_id: "CRS3",
      course_date: "March 1-2",
      course_start_time: "Sat 7:00am",
      course_end_time: "Sun 3:00pm",
      location_id: "TBDTBD"
    },
    {
      course_id: "CRS3",
      course_date: "March 22-23",
      course_start_time: "Sat 7:00am",
      course_end_time: "Sun 3:00pm",
      location_id: "TBDTBD"
    },
    {
      course_id: "OPS1",
      course_date: "March 19th",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "KCSARA"
    },
    {
      course_id: "OPS1",
      course_date: "March 25th",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "KCSARA"
    },
    {
      course_id: "OPS1",
      course_date: "March 31st",
      course_start_time: "6:30pm",
      course_end_time: "9:30pm",
      location_id: "KCSARA"
    },
    {
      course_id: "GRAD",
      course_date: "April 6th",
      course_start_time: "1:00pm",
      course_end_time: "4:00pm",
      location_id: "TBDTBD"
    }
  ]

export type JoinedSession = {
    session: Session;
    course: Course;
    location: CourseLocation;
}

export function getTrainingSessions(): JoinedSession[] {
    let fullSessions: JoinedSession[] = [];

    sessions.map((session) => {
    const course = courses.find((course) => course.id === session.course_id);
    const location = locations.find((location) => location.id === session.location_id);
    
    fullSessions.push({
        session: session,
        course: course!,
        location: location!
    });
    });
    
    return fullSessions;
}