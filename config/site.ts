export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "digimonAdventure",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "adventurer",
      href: "/adventurer",
    },
    {
      title: "digimon",
      href: "/digimon",
    },
  ],
  links: {
    github: "https://github.com/CinemaCafe/next-template",
    docs: "https://ui.shadcn.com",
  },
}
