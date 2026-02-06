export interface Project {
  title: string;
  description: string;
  url: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "philosophers-visualizer",
    description: "A web visualizer for the Philosophers project at 42",
    url: "https://github.com/nafuka11/philosophers-visualizer",
    tags: ["TypeScript", "React", "42"],
  },
  {
    title: "push_swap_tester",
    description: "A testing script for the push_swap project at 42",
    url: "https://github.com/nafuka11/push_swap_tester",
    tags: ["Python", "42"],
  },
  {
    title: "42tokyo-stats-website",
    description: "A dashboard for 42 Tokyo statistics",
    url: "https://github.com/nafuka11/42tokyo-stats-website",
    tags: ["TypeScript", "Next.js", "42"],
  },
];
