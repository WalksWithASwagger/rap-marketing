export interface Cohort {
  id: string;
  label: string;
  dates: string;
  startDate: string;
  endDate: string;
  format: string;
  capacity: string;
  capacityMax: number;
  seatsRemaining: number;
  priceStandard: number;
  priceMember: number;
  location: string;
  href: string;
  image: string;
  description: string;
  inPerson?: boolean;
}

const ENROLL = "https://rap-course-delta.vercel.app/enroll/";

export const cohorts: Cohort[] = [
  {
    id: "c1-may",
    label: "Cohort 1",
    dates: "May 22 – June 19, 2026",
    startDate: "2026-05-22",
    endDate: "2026-06-19",
    format: "Online · 4 weeks · 90-min weekly Zoom",
    capacity: "9 of 30 seats remaining",
    capacityMax: 30,
    seatsRemaining: 9,
    priceStandard: 1500,
    priceMember: 750,
    location: "Online",
    href: ENROLL,
    image: "/images/05c-30seats-constellation.png",
    description:
      "The pilot cohort. Smaller, more intimate. Founding alumni community. Direct access to instructors as the curriculum settles into its final shape.",
  },
  {
    id: "c3-sep",
    label: "Cohort 3",
    dates: "Sep 11 – Oct 9, 2026",
    startDate: "2026-09-11",
    endDate: "2026-10-09",
    format: "Online · refined from C1",
    capacity: "30 seats",
    capacityMax: 30,
    seatsRemaining: 30,
    priceStandard: 1500,
    priceMember: 750,
    location: "Online",
    href: ENROLL,
    image: "/images/07c-alumni-forest-canopy.png",
    description:
      "The refined online cohort. Curriculum tightened on Cohort 1 learnings. Same format, sharper execution. Timed for back-to-fall schedules.",
  },
  {
    id: "c2-oct",
    label: "Cohort 2",
    dates: "Oct 23 – 25, 2026",
    startDate: "2026-10-23",
    endDate: "2026-10-25",
    format: "Weekend intensive · BC+AI Festival Week · in-person",
    capacity: "20 seats",
    capacityMax: 20,
    seatsRemaining: 20,
    priceStandard: 2200,
    priceMember: 900,
    location: "Vancouver, BC",
    href: ENROLL,
    image: "/images/05b-30seats-campfire-circle.png",
    description:
      "The in-person flagship. Three days during BC+AI Festival Week. Twenty seats. Compressed format for people who want the room, the room, and nothing else.",
    inPerson: true,
  },
];

export const cohortById = (id: string): Cohort | undefined =>
  cohorts.find((c) => c.id === id);
