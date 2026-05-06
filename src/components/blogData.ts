export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  content: string[];
};
const annotationFeatureImage = '/assets/Annotation%202026-05-06%20185932.png';

export const blogPosts: BlogPost[] = [
  {
    slug: 'attendance-policy-that-scales',
    title: 'How to Build an Attendance Policy That Scales',
    summary:
      'A practical framework for setting attendance thresholds, handling manual edits, and keeping HR plus payroll aligned.',
    category: 'Attendance',
    author: 'Timeflow Editorial',
    publishedAt: 'May 06, 2026',
    readTime: '6 min read',
    featuredImage: annotationFeatureImage,
    featuredImageAlt: 'Annotation featured image',
    content: [
      'Attendance policies fail when they are either too rigid or too vague. Teams need a clear baseline for what counts as present, half-day, and absent, and admins need controlled flexibility for real-world exceptions.',
      'Start by defining your working-day rules first: timezone, shift window, grace periods, and threshold cutoffs. These are your source of truth and should be visible to both managers and HR.',
      'Next, establish manual edit governance. Every edit should include reason context and role-based permissions so corrections remain operational, not arbitrary.',
      'Finally, connect policy to reporting outputs. If attendance views and payroll exports come from different systems, disputes are guaranteed. Keep them on one ledger and your close cycles become predictable.'
    ]
  },
  {
    slug: 'desktop-tracker-rollout-checklist',
    title: 'Desktop Tracker Rollout Checklist for IT Teams',
    summary:
      'Ship your Windows and macOS tracker with fewer support tickets using a phased rollout and version-enforcement guardrails.',
    category: 'Operations',
    author: 'Timeflow Product Team',
    publishedAt: 'May 02, 2026',
    readTime: '5 min read',
    featuredImage: annotationFeatureImage,
    featuredImageAlt: 'Annotation featured image',
    content: [
      'A successful tracker rollout is mostly an operational exercise. Before deployment, define your target versions, supported OS combinations, and ownership for update communication.',
      'Run a staged rollout: pilot users, then one team, then org-wide. This helps validate sync behavior and endpoint controls without blocking the whole company.',
      'Use version visibility in the admin console to quickly detect drift. For critical updates, pair minimum-version enforcement with a trusted update URL so users are never blocked without instructions.',
      'Document your fallback workflow for exceptions: temporary access, manual entry windows, and escalation contacts. This keeps teams productive while preserving governance.'
    ]
  },
  {
    slug: 'from-time-logs-to-payroll-ready-exports',
    title: 'From Daily Time Logs to Payroll-Ready Exports',
    summary:
      'Transform fragmented work logs into structured exports that finance can trust without spreadsheet cleanup marathons.',
    category: 'Reporting',
    author: 'Timeflow Editorial',
    publishedAt: 'Apr 28, 2026',
    readTime: '7 min read',
    featuredImage: annotationFeatureImage,
    featuredImageAlt: 'Annotation featured image',
    content: [
      'Most payroll delays happen because source data is scattered. Teams clock time in one place, managers review in another, and finance receives a third format that needs manual cleanup.',
      'Standardize your report dimensions early: user, team, project, and date range. Keep these filters consistent across dashboards and exports so every stakeholder sees the same numbers.',
      'Automate recurring handoffs where possible. Scheduled exports and distribution lists reduce end-of-cycle chaos and remove hidden dependency on one operations person.',
      'The final step is auditability. Preserve edit history and policy metadata alongside hours so approvals are faster and disputes can be resolved with evidence, not assumptions.'
    ]
  }
];
