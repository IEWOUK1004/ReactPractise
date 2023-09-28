export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "digimonAdventure",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Adventurer",
      href: "/adventurer",
    },
    {
      title: "Digimon",
      href: "/digimon",
    },
    {
      title: "Story",
      href: "/story",
    },
    {
      title: "Album",
      href: "/album",
    },
    {
      title: "Accordion",
      href: "/accordion",
    },
    {
      title: "Books",
      href: "/books",
    }
  ],
  links: {
    github: "https://github.com/CinemaCafe/next-template",
    docs: "https://ui.shadcn.com",
  },
}
