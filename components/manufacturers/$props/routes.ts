export type Route = {
  name: string,
  href: string
}

export const routes: Route[] = [
  {
    name: "discover",
    href: "/manufacturers/discover"
  },
  {
    name: "explore",
    href: "/manufacturers/explore"
  },
  {
    name: "contact us",
    href: "/manufacturers/contact-us"
  },
  {
    name: "sign in",
    href: "/manufacturers/sign-in"
  },
  {
    name: "sign up",
    href: "/manufacturers/sign-up"
  }
];