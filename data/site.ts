// ============================================================
// EDIT ME — every site-wide detail lives here: names, phone
// numbers, addresses, nav labels, hero copy, footer text.
// Change something here and it updates everywhere it's used.
// Per-person details (bios, emails, roll numbers) live in
// data/team.ts instead.
// ============================================================

export const site = {
  // Wordmark / browser tab. brandMain + brandAccent render as
  // "Ropar" + ".HPC" with the accent in the highlight color.
  brandMain: "Ropar",
  brandAccent: ".HPC",
  fullName: "Ropar HPC",

  pageTitle: "Ropar HPC — Research Team, IIT Ropar",
  pageDescription:
    "The people behind Ropar HPC's research at IIT Ropar — high-performance computing",

  // Shown as a small line above the hero heading.
  eyebrow:
    "Department of Computer Science & Engineering · IIT Ropar",

  // Hero heading is split in three so the middle part can be
  // italicised/accented in the layout without hardcoding markup
  // into the copy itself.
  heroHeadingPre: "High Performance Computing and it's Applications ",
  heroHeadingPost: " actually needs.",

  heroLede:
    "Ropar.HPC (High-Performance Computing) Group at IIT Ropar is a research group focused on high-performance and parallel computing, performance analysis, and optimization of large-scale computational workloads. The group explores HPC architectures, MPI-based distributed computing, communication performance, and performance modeling to understand and improve the efficiency of parallel applications. Through empirical benchmarking, runtime instrumentation, and simulation-driven analysis, Ropar HPC works toward building more accurate performance models and enabling scalable, efficient execution of scientific and compute-intensive workloads.",

  // Institute / department address, shown in the PI section and footer.
  addressLines: [
    "Department of Computer Science & Engineering",
    "Indian Institute of Technology, Ropar",
    "Office , CSE Dept. Building",
  ],

  footerNote: "Roster last compiled 2026",
};
