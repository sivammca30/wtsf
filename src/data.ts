// ── Shared Types ───────────────────────────────────────────────────────────────
export type Theme = "dark" | "light";

export interface NavLink {
  label: string;
  to: string;
}

export interface Instructor {
  id: number;
  name: string;
  district: string;
  state: string;
  specialization: string;
  initials: string;
}

export interface EventItem {
  id: number;
  title: string;
  img: string;
  date: string;
  category: string;
  desc: string;
}

export interface Association {
  id: number;
  alt: string;
}

export interface Affiliate {
  id: number;
  alt: string;
}

export interface Program {
  id: number;
  alt: string;
  section: string;
}

export interface Affiliate_Rule {
  id: number;
  alt: string;
}

export interface Grading {
  id: number;
  alt: string;
}

export interface ClassItem {
  id: number;
  name: string;
  level: string;
  schedule: string;
  desc: string;
}

export interface Social {
  id: number;
  alt: string;
  url: string;
}

// ── Routes ────────────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home",        to: "/home" },
  { label: "About",       to: "/about" },
  // { label: "History",     to: "/history" },
  { label: "Instructors", to: "/instructors" },
  { label: "Events",      to: "/events" },
  { label: "Gallery",     to: "/gallery" },
  { label: "Contact",     to: "/contact" },
];

// ── Data ──────────────────────────────────────────────────────────────────────
export const INSTRUCTORS: Instructor[] = [
  { id: 1, name: "Instructor Name", district: "Chennai",    state: "Tamil Nadu", specialization: "Silambam — Staff Combat", initials: "SI" },
  { id: 2, name: "Instructor Name", district: "Madurai",    state: "Tamil Nadu", specialization: "Valari — Boomerang",      initials: "SI" },
  { id: 3, name: "Instructor Name", district: "Coimbatore", state: "Tamil Nadu", specialization: "Maduvu — Deer Horn",      initials: "SI" },
  { id: 4, name: "Instructor Name", district: "Trichy",     state: "Tamil Nadu", specialization: "Kathi — Knife Combat",    initials: "SI" },
];

export const EVENTS: EventItem[] = [
  { id: 1, title: "National Level Silambam Open Championship", img: "images/events/wtsf_national.png", date: "2026-07-15", category: "Events", desc: "Every Year February Month." },
  { id: 2, title: "State Level Silambam Open Championship", img: "images/events/wtsf_state.png", date: "2026-08-05", category: "Events", desc: "Every Year December Month." },
  { id: 3, title: "District Level Silambam Open Championship", img: "images/events/wtsf_district.png", date: "2026-09-01", category: "Events", desc: "Every Year July Month." },
  { id: 4, title: "Silambam League Competition", img: "images/events/wtsf_league.png", date: "2026-09-01", category: "Events", desc: "Every Year August Month." },
];

export const UPCOMINGEVENTS: EventItem[] = [
  { id: 1, title: "District Level Silambam Open Championship", img: "images/events/tenkasi_district.jpeg", date: "2026-07-26", category: "Events", desc: "Tenkasi" },
  { id: 2, title: "Silambam Grading Function", img: "images/events/silambam_grading.jpeg", date: "2026-08-02", category: "Events", desc: "Chennai" },
  { id: 3, title: "Silambam League Championship", img: "images/events/league_match.jpeg", date: "2026-08-23", category: "Events", desc: "Chennai" }
  
];

export const MOMENTS: EventItem[] = [
  { id: 1, title: "International Yoga Day Celebration - 2026", img: "images/events/wtsf_national.png", date: "2026-06-21", category: "Celebration", desc: "" },
  { id: 2, title: "Womens Day - Self Defense - Training Camp", img: "images/events/wtsf_state.png", date: "2026-03-08", category: "Workshop", desc: "" },
  { id: 3, title: "WTSF - Silambam Grading - 2026", img: "images/events/wtsf_district.png", date: "2026-08-02", category: "Grading", desc: "" },
  
];


export const GALLERYMOMENTS: EventItem[] = [
  { id: 1, title: "International Yoga Day Celebration - 2026", img: "images/events/wtsf_national.png", date: "2026-06-21", category: "Celebration", desc: "" },
  
];

export const ASSOICIATIONS: Association[] = [
  { id: 1, alt: "NSRS - Khelo India" },
  { id: 2, alt: "Nehru Yuva Kendra Sangathan" },
  { id: 3, alt: "Fit India" },
  { id: 4, alt: "Ministry of Youth Affairs & Sports" },
  { id: 5, alt: "World Union of Martial Arts Federation" },
  { id: 6, alt: "Azaad - A Ray Of Hope" },
];

export const AFFILIATES: Affiliate[] = [
  { id: 1, alt: "Andhra Pradesh" },
  { id: 2, alt: "Gujarat" },
  { id: 3, alt: "Uttar Pradesh" },
  { id: 4, alt: "Karnataka" },
  { id: 5, alt: "Odisha" },
  { id: 6, alt: "Maharashtra" },
];

export const PROGRAMS: Program[] = [
  { id: 1, alt: "WTSF Referee/Judges", section: "referee" },
  { id: 2, alt: "WTSF Competitions", section: "competition" },
  { id: 3, alt: "WTSF Grading", section: "grading" }
];

export const GRADINGS: Grading[] = [
  { id: 1, alt: "KATCHAI - Beginner" },
  { id: 2, alt: "KAAPPU - Intermediate" },
  { id: 3, alt: "PARIVATTAM - Advanced" }
];

export const AFFILIATION_RULES: Affiliate_Rule[] = [
  { id: 1, alt: "Affiliated instructor should follow WTSF Style, Lesson, Uniform and Grading Procedures." },
  { id: 2, alt: "Affiliation should be renewed every year." },
  { id: 3, alt: "Affiliation will be given to an instructor for a State/Distict/Federation." },
  { id: 4, alt: "Affiliated instructor should attend all the WTSF Training Camps." },
  { id: 5, alt: "WTSF will arrange Training Camps for affiliated instructors in their State/District upon prior intimation." },
  { id: 6, alt: "WTSF will have all the rights to change the rules and regulations with the approval of executive members." }
];

export const CLASSES: ClassItem[] = [
  { id: 1, name: "Beginner Silambam", level: "Beginner",     schedule: "Mon, Wed, Fri — 6:00 to 7:00 AM", desc: "Foundational stick handling, footwork, and basic forms." },
  { id: 2, name: "Intermediate Combat Forms", level: "Intermediate", schedule: "Tue, Thu — 6:00 to 7:30 AM", desc: "Paired drills, advanced footwork, and weapon transitions." },
  { id: 3, name: "Advanced Weapons Training", level: "Advanced",     schedule: "Sat — 7:00 to 9:00 AM",      desc: "Valari, Maduvu, and traditional weapon mastery for competition." },
  { id: 4, name: "Kids Silambam (6–12 yrs)", level: "Youth",        schedule: "Sat, Sun — 9:00 to 10:00 AM", desc: "Discipline-focused introductory classes for children." },
];

export const SOCIAL_ICONS: Social[] = [
  {id: 1, alt: "F", url: ""},
  {id: 2, alt: "I", url: ""},
  {id: 3, alt: "X", url: ""},
  {id: 4, alt: "Y", url: ""}
];
export const QUICK_LINKS: string[]   = ["About Us", "Instructors", "Blog", "Events"];
