import { Icon } from "lucide-react";
import { Code2, Server, Layers, Database, Smartphone, Globe } from "lucide-react";

export type Course = {
  icon: Icon;
  title: string;
  duration: string;
  students: string;
  rating: number;
  level: string;
  tags: string[];
  description: string;
  badge: string | null;
  badgeColor: string;
  color: string;
};

export const courses: Course[] = [
  {
    icon: Layers,
    title: "Full Stack Development",
    duration: "6 Months",
    students: "1200+",
    rating: 4.9,
    level: "Beginner to Advanced",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    description: "Complete web development from frontend to backend. Build real-world projects with industry mentors.",
    badge: "Most Popular",
    badgeColor: "bg-brand-orange",
    color: "from-brand-blue to-brand-blue-dark",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    duration: "3 Months",
    students: "850+",
    rating: 4.8,
    level: "Beginner",
    tags: ["HTML", "CSS", "React", "Tailwind"],
    description: "Master modern frontend technologies and create stunning, responsive user interfaces.",
    badge: "Trending",
    badgeColor: "bg-brand-blue",
    color: "from-brand-orange to-brand-orange-dark",
  },
  {
    icon: Server,
    title: "Backend Development",
    duration: "3 Months",
    students: "620+",
    rating: 4.7,
    level: "Intermediate",
    tags: ["Node.js", "Express", "REST API", "JWT"],
    description: "Build powerful server-side applications, APIs and handle databases like a pro.",
    badge: "New",
    badgeColor: "bg-green-500",
    color: "from-brand-blue to-brand-orange",
  },
  {
    icon: Database,
    title: "Database Management",
    duration: "2 Months",
    students: "430+",
    rating: 4.6,
    level: "Beginner",
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    description: "Learn SQL & NoSQL databases, query optimization and data modeling techniques.",
    badge: null,
    badgeColor: "",
    color: "from-brand-blue-dark to-brand-blue",
  },
  {
    icon: Smartphone,
    title: "React Native Mobile",
    duration: "4 Months",
    students: "380+",
    rating: 4.8,
    level: "Intermediate",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    description: "Build cross-platform mobile apps for iOS and Android using React Native.",
    badge: "Hot",
    badgeColor: "bg-red-500",
    color: "from-brand-orange to-brand-orange-dark",
  },
  {
    icon: Globe,
    title: "DevOps & Cloud",
    duration: "3 Months",
    students: "290+",
    rating: 4.7,
    level: "Advanced",
    tags: ["Docker", "AWS", "CI/CD", "Linux"],
    description: "Deploy and manage applications on cloud platforms with DevOps best practices.",
    badge: null,
    badgeColor: "",
    color: "from-brand-blue to-brand-orange",
  },
];

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
