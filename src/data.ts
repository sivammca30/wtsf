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

export interface ClassItem {
  id: number;
  name: string;
  level: string;
  schedule: string;
  desc: string;
}

// ── Routes ────────────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home",        to: "/" },
  { label: "About",       to: "/about" },
  // { label: "History",     to: "/history" },
  { label: "Instructors", to: "/instructors" },
  { label: "Events",      to: "/events" },
  // { label: "Classes",     to: "/classes" },
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

export const CLASSES: ClassItem[] = [
  { id: 1, name: "Beginner Silambam", level: "Beginner",     schedule: "Mon, Wed, Fri — 6:00 to 7:00 AM", desc: "Foundational stick handling, footwork, and basic forms." },
  { id: 2, name: "Intermediate Combat Forms", level: "Intermediate", schedule: "Tue, Thu — 6:00 to 7:30 AM", desc: "Paired drills, advanced footwork, and weapon transitions." },
  { id: 3, name: "Advanced Weapons Training", level: "Advanced",     schedule: "Sat — 7:00 to 9:00 AM",      desc: "Valari, Maduvu, and traditional weapon mastery for competition." },
  { id: 4, name: "Kids Silambam (6–12 yrs)", level: "Youth",        schedule: "Sat, Sun — 9:00 to 10:00 AM", desc: "Discipline-focused introductory classes for children." },
];

export const SOCIAL_ICONS: string[] = ["F", "I", "X", "Y"];
export const QUICK_LINKS: string[]   = ["About Us", "Instructors", "Blog", "Events"];
export const PROGRAMS: string[]      = ["Classes", "Training", "Workshops"];