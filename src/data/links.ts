export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/nafuka11",
    icon: "simple-icons:github",
  },
  {
    name: "Blog",
    url: "https://nafuka.hatenablog.com/archive",
    icon: "simple-icons:rss",
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/nafuka11",
    icon: "simple-icons:zenn",
  },
  {
    name: "Speaker Deck",
    url: "https://speakerdeck.com/nafuka11",
    icon: "simple-icons:speakerdeck",
  },
  {
    name: "X",
    url: "https://x.com/nafuka11",
    icon: "simple-icons:x",
  },
];
