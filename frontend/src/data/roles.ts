import { Guid } from "guid-typescript";
import type { Role } from "../types/role";

export const roleData: Role[] = [
  {
    id: Guid.create().toString(),
    title: "CEO / Chair of Board",
    employee: {
      id: Guid.create().toString(),
      firstName: "Jo-Anne",
      lastName: "Sinclair",
    },
  },
  {
    id: Guid.create().toString(),
    title: "COO / VP Operations",
    employee: {
      id: Guid.create().toString(),
      firstName: "Jackson",
      lastName: "Smith",
    },
  },
  {
    id: Guid.create().toString(),
    title: "CFO / VP Administration",
    employee: {
      id: Guid.create().toString(),
      firstName: "Susan",
      lastName: "Thomas",
    },
  },
  {
    id: Guid.create().toString(),
    title: "VP Client Services",
    employee: {
      id: Guid.create().toString(),
      firstName: "Richa",
      lastName: "Kaur",
    },
  },
  {
    id: Guid.create().toString(),
    title: "CIO",
    employee: {
      id: Guid.create().toString(),
      firstName: "Josee",
      lastName: "Benjamin",
    },
  },
  {
    id: Guid.create().toString(),
    title: "VP Sales & Marketing",
    employee: {
      id: Guid.create().toString(),
      firstName: "Vincent",
      lastName: "Grey",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Financial and Audit Services",
    employee: {
      id: Guid.create().toString(),
      firstName: "Rupa",
      lastName: "Kharki",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Human Resources",
    employee: {
      id: Guid.create().toString(),
      firstName: "Xun",
      lastName: "Kuang",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Legal Services / General Counsel",
    employee: {
      id: Guid.create().toString(),
      firstName: "Stien",
      lastName: "Pedersen",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Information Technology",
    employee: {
      id: Guid.create().toString(),
      firstName: "Sandra",
      lastName: "Bear",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Information Security and CISSO",
    employee: {
      id: Guid.create().toString(),
      firstName: "Gus",
      lastName: "Blue",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Accounting",
    employee: {
      id: Guid.create().toString(),
      firstName: "Sam",
      lastName: "Kong",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Physical Security",
    employee: {
      id: Guid.create().toString(),
      firstName: "Valentine",
      lastName: "Smith",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Director Facilities",
    employee: {
      id: Guid.create().toString(),
      firstName: "Mariya",
      lastName: "Kaperski",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Business Continuity and Disaster Recovery",
    employee: {
      id: Guid.create().toString(),
      firstName: "Abd",
      lastName: "al-Hamid Alami",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Internal Audit",
    employee: {
      id: Guid.create().toString(),
      firstName: "Victoria",
      lastName: "Gray",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Chief Architect",
    employee: {
      id: Guid.create().toString(),
      firstName: "Cheryl",
      lastName: "Guru",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Security Architecture",
    employee: {
      id: Guid.create().toString(),
      firstName: "Jean",
      lastName: "Ngoy",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Solution Architect, Online Banking",
    employee: {
      id: Guid.create().toString(),
      firstName: "Kris",
      lastName: "Gold",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Application Solutions",
    employee: {
      id: Guid.create().toString(),
      firstName: "Isaac",
      lastName: "Smith",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Lead Developer, Online Banking",
    employee: {
      id: Guid.create().toString(),
      firstName: "Payton",
      lastName: "Frost",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Operational Risk",
    employee: {
      id: Guid.create().toString(),
      firstName: "Samantha",
      lastName: "Nettle",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Vendor Relations",
    employee: {
      id: Guid.create().toString(),
      firstName: "Yolanda",
      lastName: "Ferreira",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Purchasing",
    employee: {
      id: Guid.create().toString(),
      firstName: "Samir",
      lastName: "Hassan",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Communications",
    employee: {
      id: Guid.create().toString(),
      firstName: "Yuna",
      lastName: "Aikawa",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Customer Experience and Community Engagement",
    employee: {
      id: Guid.create().toString(),
      firstName: "Jonathan",
      lastName: "Carberry",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager of Sales",
    employee: {
      id: Guid.create().toString(),
      firstName: "Roland",
      lastName: "Wei",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Marketing",
    employee: {
      id: Guid.create().toString(),
      firstName: "Pran",
      lastName: "Singh",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Business Analyst, Online Banking",
    employee: {
      id: Guid.create().toString(),
      firstName: "Linda",
      lastName: "Analyst",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Contract Management",
    employee: {
      id: Guid.create().toString(),
      firstName: "Esra",
      lastName: "Sedge",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Compliance Management",
    employee: {
      id: Guid.create().toString(),
      firstName: "Pranee",
      lastName: "Tan",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager IT End User Service Desk",
    employee: {
      id: Guid.create().toString(),
      firstName: "Karmen",
      lastName: "Spruce",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager IT End User Computing",
    employee: {
      id: Guid.create().toString(),
      firstName: "Haydar",
      lastName: "Katirci",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager IT Telecom and Infrastructure",
    employee: {
      id: Guid.create().toString(),
      firstName: "Jill",
      lastName: "Harkness",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager, Data Center and Hosting Services",
    employee: {
      id: Guid.create().toString(),
      firstName: "Tim",
      lastName: "Morrison",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager of IT Risk Management",
    employee: {
      id: Guid.create().toString(),
      firstName: "Aleksandr",
      lastName: "Milosevic",
    },
  },
  {
    id: Guid.create().toString(),
    title: "Manager IT, Project Management Office",
    employee: {
      id: Guid.create().toString(),
      firstName: "Jim",
      lastName: "Wingnut",
    },
  },

  // Vacant roles
  { id: Guid.create().toString(), title: "Vacant Role" },
  { id: Guid.create().toString(), title: "Vacant Role" },
  { id: Guid.create().toString(), title: "Vacant Role" },
  { id: Guid.create().toString(), title: "Vacant Role" },
  { id: Guid.create().toString(), title: "Vacant Role" },
  { id: Guid.create().toString(), title: "Vacant Role" },
];
