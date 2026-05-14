/**
 * Canonical external URLs for the RAP marketing site.
 *
 * Keep these in one place — every CTA across the site should pull from here
 * so a destination change is a one-line edit.
 */

/**
 * Where prospective learners go to register and pay for a cohort.
 * Currently Luma (the only system actually accepting payment).
 * Course-side form (`rap-course-delta.vercel.app/enroll/`) is still
 * placeholder-blocked on Formspree IDs (RAP issue #74); when wired,
 * future cohorts may route through it instead.
 */
export const REGISTRATION_URL = "https://lu.ma/ai-ethics";

/**
 * The live async course platform — homepage and module routes.
 * Used in marketing for "Preview the course" / "See module 1" CTAs,
 * not enrollment.
 */
export const COURSE_URL = "https://rap-course-delta.vercel.app/";

/**
 * BC + AI Ecosystem Association — the program's primary partner.
 * Members get 50% off ($750 instead of $1,500).
 */
export const BCAI_URL = "https://bc-ai-ecosystem.com/";
