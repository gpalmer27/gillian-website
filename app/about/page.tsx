import { Database } from "lucide-react";
import { ImageCarousel } from "../carousel";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiC,
  SiDocker,
  SiDrizzle,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiLinear,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPosthog,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTerraform,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";

const skillGroups: {
  category: string;
  items: { name: string; Icon: any }[];
}[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "Java", Icon: FaJava },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "SQL", Icon: Database },
      { name: "C", Icon: SiC },
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Flask", Icon: SiFlask },
      { name: "Drizzle ORM", Icon: SiDrizzle },
      { name: "tRPC", Icon: SiTrpc },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "Docker", Icon: SiDocker },
      { name: "Terraform", Icon: SiTerraform },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Jest", Icon: SiJest },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "PostHog", Icon: SiPosthog },
      { name: "Strapi", Icon: SiStrapi },
      { name: "Linear", Icon: SiLinear },
    ],
  },
  {
    category: "Cloud",
    items: [{ name: "AWS", Icon: FaAws }],
  },
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:flex-1 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I&apos;m a fourth-year at Northeastern pursuing a bachelor&apos;s
            degree in Computer Science with a concentration in Software and a
            minor in Mathematics. In my spare time, I love spending time with
            friends, rock climbing, trying new foods, and listening to music.
          </p>
        </div>

        <div className="shrink-0 order-1 md:order-2">
          <ImageCarousel
            images={[
              { src: "/first.jpeg", alt: "Gillian Palmer" },
              { src: "/second.jpeg", alt: "Gillian Palmer" },
              { src: "/third.jpg", alt: "Gillian Palmer" },
              { src: "/fourth.jpeg", alt: "Gillian Palmer" },
            ]}
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-10">
          Skillset
        </h2>
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <Icon className="text-base shrink-0" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
