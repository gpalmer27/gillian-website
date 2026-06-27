import Image from "next/image";

const projects = [
  {
    title: "Cooper",
    image: "/cooper.png",
    date: "September 2024 — Present",
    description:
      "I am currently working with a team of designers and developers in Sandbox, a CS club at Northeastern, to create a full-stack co-op evaluation resource. This project uses the T3 tech stack, and some features that I have added include API endpoints and frontend and backend filtering. We recently had an internal release of our website and plan on having a larger release soon!",
    tech: ["Next.js", "TypeScript", "tRPC", "Tailwind CSS", "Drizzle ORM"],
    links: [
      { label: "GitHub", href: "https://github.com/sandboxnu/cooper" },
      { label: "Website", href: "https://coopernu.com/" },
    ],
  },
  {
    title: "Cosmic Checklist",
    image: "/cosmic_checklist.png",
    date: "September 2024",
    description:
      "During HackMIT, my team built a task manager platform using Convex. Our project includes both a website and a Chrome extension. Users can click a button in the Chrome extension to reach the website that lists all of their tasks. On the website, tasks are sorted based on priority, and users can add and delete tasks.",
    tech: ["Convex", "TypeScript", "React", "Chrome Extension"],
    links: [
      { label: "GitHub", href: "https://github.com/gpalmer27/hackmit_2024" },
      { label: "Demo", href: "https://youtu.be/idmPPXNHtlE" },
    ],
  },
  {
    title: "Stocks Program",
    image: "/stocks.png",
    date: "June 2024",
    description:
      "For my Object-Oriented Design course, I partnered with a classmate to develop a stock simulation in Java using the Model-View-Controller structure. In our program, the user can choose between viewing a text-based interface or a graphical interface. Both options allow the user to create a portfolio of stocks in which they can add and remove stocks, and they can also see the value of that portfolio on a specified date.",
    tech: ["Java", "Swing"],
    links: [
      { label: "GitHub", href: "https://github.com/gpalmer27/Stocks-Program" },
      { label: "Demo", href: "https://youtu.be/T-V6LDUEiL0" },
    ],
  },
  {
    title: "Husky Laundry",
    image: "/husky_laundry.png",
    date: "January 2024 — April 2024",
    description:
      "Through Northeastern's Oasis software development club, I worked with a group to design a website that tracks laundry usage across Northeastern's on-campus housing. We were inspired by the Laundry View website used across colleges, but we wanted to make the interface more user-friendly and visually appealing.",
    tech: ["React", "JavaScript", "Supabase"],
    links: [
      { label: "GitHub", href: "https://github.com/Oasis-NEU/s24-group9" },
      { label: "Demo", href: "https://youtu.be/HEy-jaS8oxU" },
    ],
  },
  {
    title: "Maze Game",
    image: "/maze.png",
    date: "April 2024",
    description:
      "In my Fundamentals of Computer Science II course, I teamed up with a partner to build an interactive maze game in Java. We applied Kruskal's Algorithm, Breadth-First Search, and Depth-First Search to animate the creation of the maze and the process of solving it.",
    tech: ["Java", "BFS", "DFS"],
    links: [
      { label: "GitHub", href: "https://github.com/gpalmer27/Maze-Game" },
      { label: "Demo", href: "https://youtube.com/shorts/ClL5drd1pCs" },
    ],
  },
  {
    title: "Seam Carver",
    image: "/seam_carver.png",
    date: "March 2024",
    description:
      "Another Fundamentals of Computer Science II project, this Seam Carver program was written with a partner. The path with least significance is calculated using Dijkstra's Algorithm and removed from the image on every tick.",
    tech: ["Java"],
    links: [
      { label: "GitHub", href: "https://github.com/gpalmer27/Seam-Carver" },
      { label: "Demo", href: "https://youtu.be/4PlOGvya1ck" },
    ],
  },
  {
    title: "Productivity Under the Sea",
    image: "/productivity.png",
    date: "February 2024",
    description:
      "At HackBeanpot 2024, I worked with a group of four people to create a Chrome extension meant to improve productivity. There is a time limit that users can be on unproductive websites, and a water animation indicates how much time the user has remaining on those unproductive sites. Once the time limit runs out, the unproductive sites can no longer be used. To make this project, my group used HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sanjana-singhania/hbp-spring24",
      },
      { label: "Demo", href: "https://youtu.be/5d3Sh5a6WIE" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors overflow-hidden"
          >
            {/* Project image */}
            <div className="relative aspect-video overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mt-1">
                {project.date}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 flex-1">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
