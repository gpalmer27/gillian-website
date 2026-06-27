const experiences = [
  {
    title: "Software Engineer Intern",
    org: "Klaviyo",
    date: "January 2026 — Present",
    description:
      "Full-stack software engineer intern on the core reporting team at Klaviyo.",
  },
  {
    title: "Sandbox Technical Lead",
    org: "Sandbox",
    date: "August 2025 — Present",
    description:
      "I am the current tech lead for Cooper, where I help my team manage our tickets, and we are planning on completing this project this summe.!",
  },
  {
    title: "Senior Software Engineer",
    org: "Sandbox",
    date: "August 2025 — December 2025",
    description:
      "In this role, I oversaw the development of Odyssey, a learning platform for Northeastern students. In this role, I organized tickets in a Linear project board and held daily standups with the team to ensure that we were on track for our weekly sprints.",
  },
  {
    title: "Software Engineering Internship",
    org: "Travelers",
    date: "June 2025 — August 2025",
    description:
      "At Travelers, I worked in the Corporate Financial Systems department where I implemented a tool to analyze financial documents and extract relevant data using Amazon Textract. I also created a chatbot feature that utilizes Amazon Bedrock to answer questions about financial documents.",
  },
  {
    title: "Software Development Co-op",
    org: "Khoury College",
    date: "January 2025 — May 2025",
    description:
      "For my first co-op, I worked on Odyssey, an interactive learning platform for Khoury College. In this position, I participated in daily standups and worked within two-week sprint cycles. I worked with Next.js and Tailwind CSS for the frontend and Strapi CMS and PostgreSQL for the backend. I also helped transition the deployment from EKS to ECS using the AWS console, and I created the production deployment using Terraform.",
  },
  {
    title: "Sandbox Head of Community",
    org: "Sandbox",
    date: "January 2025 — April 2025",
    description:
      "In this role, I organized activities and presentations for members of Sandbox, Northeastern's student-led software consultancy, and I also planned three collaborative events with other Computer Science organizations at Northeastern while managing a budget of approximately $2000.",
  },
  {
    title: "Teaching Assistant",
    org: "Northeastern University",
    date: "August 2024 — December 2024",
    description:
      "I was a teaching assistant for CS1800 (Discrete Structures). As a TA, I held weekly office hours and helped lead recitations. I also graded 200+ student assignments every week and provided the students with personalized feedback on their assignments.",
  },
  {
    title: "Knack Peer Tutor",
    org: "Knack",
    date: "February 2024 — December 2024",
    description:
      "As a Knack tutor, I helped Northeastern students understand key concepts in the courses that they were taking. During my time as a Knack tutor, I tutored students in Discrete Structures, Linear Algebra, and Fundamentals of Computer Science 1 & 2.",
  },
  {
    title: "Mathnasium Instructor",
    org: "Mathnasium",
    date: "December 2021 — August 2024",
    description:
      "At Mathnasium, I guided students in foundational math concepts through personalized instruction. I taught approximately 12 students per week, grades 2 to 11, and I taught students both in-person and online.",
  },
];

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
        Experience
      </h1>

      <div className="relative ml-2 border-l border-neutral-300 dark:border-neutral-800 pl-8 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.title + exp.date} className="relative group">
            <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-white dark:ring-black group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors" />
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-1">
              {exp.date}
            </p>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {exp.title}
            </h2>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
              {exp.org}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
