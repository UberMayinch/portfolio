// Single place to edit site content.

export const site = {
  name: "Chinmay Sharma",
  tagline: "I build and learn about things at the speed of thought.",
  intro:
    "BTech in Computer Science and MS by Research in Computational Natural Sciences at IIIT Hyderabad. I work across machine learning research, systems, and product.",
  email: "chinmay.sharma@research.iiit.ac.in",

  // Booking page (Calendly, cal.com, Google Calendar appointment page, ...).
  // Leave empty to fall back to an email link.
  calendarUrl: "https://calendly.com/ubermayinch",

  work: [
    {
      title: "ML research on complex systems",
      body: "Research assistant at the LN2D Lab, CCNSB, IIIT-H, applying machine learning to complex adaptive systems, networks, and nonlinear dynamics.",
    },
    {
      title: "Machine unlearning for MRI",
      body: "Built a corrective unlearning pipeline for MRI reconstruction that removes the effect of poisoned samples at up to 90% lower cost than retraining.",
    },
    {
      title: "Systems",
      body: "Wrote a POSIX-compliant distributed network file system in C with caching, async writes, and replication.",
    },
    {
      title: "Product",
      body: "Built Tapas, an AI-powered mobile MVP (RAG, React/Expo). 3rd of 50+ teams at the IIIT-H E-Cell Startup Aid Hackathon.",
    },
  ],

  links: [
    { name: "GitHub", url: "https://github.com/ubermayinch" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmay-sharma-b1804b1b5/" },
    { name: "Twitter", url: "https://twitter.com/Uber_Mayinch" },
  ],
};

export const bookingHref =
  site.calendarUrl ||
  `mailto:${site.email}?subject=${encodeURIComponent("Booking a call")}`;
