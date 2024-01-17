export type RouteType = {
	href: string,
	name: string,
	title: string,
	subtitle: string,
}

export const routes: RouteType [] = [
	{
    href: "/dashboard/",
    name: "dashboard",
    title: "dashboard",
    subtitle: "find all you need here"
  },
  {
    href: "/dashboard/products",
    name: "our products",
    title: "products",
    subtitle: "a list of product under your company"
  },
  {
    href: "/dashboard/products/register",
    name: "register product",
    title: "register product",
    subtitle: "add a new product to your company"
  }
];