export const createNavLinks = (onNavigate?: (page: string) => void) => [
  {
    label: "Home",
    href: "home",
    onClick: () => onNavigate?.("home")
  },
  {
    label: "Services",
    href: "#services"
  },
  {
    label: "About",
    href: "about",
    onClick: () => onNavigate?.("about")
  },
  {
    label: "Contact",
    href: "contact",
    onClick: () => onNavigate?.("contact")
  },
];
