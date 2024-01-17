"use client";

import Link from "next/link";
import Image from "next/image";

import { routes, type RouteType } from "./routes";

type PagePropsType = {
  children: React.ReactNode
}

export default function Page({ children }: PagePropsType) {
  return (
    <section className="bg-white relative h-screen">
      <div className="float-left h-full w-[300px] border-r overflow-y-auto bg-white">
        <div className="p-5">
          <div className="space-y-20">
            <div className="space-y-5 text-center">
              <Image
                width="90"
                height="90"
                alt="Vercel logo"
                src="/favicon.ico"
                className="inline-block"
              />
              <div className="text-center">
                <span className="capitalize font-bold bg-gray-200 text-sm inline-block py-2 px-4 rounded-full">
                  taslim eniolla inc.
                </span>
              </div>
            </div>
            <div className="space-y-5">
              {routes.map(({ name, href }: RouteType, index: number) => (
                <Link key={index} href={href} className="p-3 hover:underline text-center border rounded-lg block w-full font-semibold capitalize">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}