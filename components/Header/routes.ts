const HOME_ROUTE = Symbol("HOME_ROUTE");
const TEAM_ROUTE = Symbol("TEAM_ROUTE");
const ABOUT_ROUTE = Symbol("ABOUT_ROUTE");
const LOGIN_ROUTE = Symbol("LOGIN_ROUTE");
const REGISTER_ROUTE = Symbol("REGISTER_ROUTE");

export type RouteType = {
  href: string,
  name: string,
  altName: string,
  symbol: symbol
}

export const routes: RouteType [] = [
  {
    href: "/",
    name: "home",
    altName: "home",
    symbol: HOME_ROUTE
  },
  {
    href: "/about",
    name: "about",
    altName: "about us",
    symbol: ABOUT_ROUTE
  },
  {
    href: "/team",
    name: "team",
    altName: "our team",
    symbol: TEAM_ROUTE
  },
  {
    href: "/log-in",
    name: "log in",
    altName: "log in",
    symbol: LOGIN_ROUTE
  },
  {
    href: "/register",
    name: "register",
    altName: "register",
    symbol: REGISTER_ROUTE
  },
];