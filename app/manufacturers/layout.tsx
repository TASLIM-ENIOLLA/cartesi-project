import { Fragment } from "react";

import Link from "next/link";
import Image from "next/image";

import { routes, type Route } from "@/components/manufacturers/$props/routes";

type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <Fragment>
      <header className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  width="70"
                  height="30"
                  alt="Verifi Logo"
                  src="/image/VERIFI.png"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-10">
              {routes.map(({name, href}: Route, index: number) => (
                <Link href={href} key={index}>
                  <span className="font-semibold capitalize text-lg text-slate-100 hover:text-teal-300">{name}</span>
                </Link>
              ))}
            </div>
            <div>
              <button className="md:hidden bg-gradient-to-l hover:bg-gradient-to-l from-teal-300 to-cyan-300 px-3 py-2 rounded-lg border-2 border-cyan-300">
                <span className="bi-border-width text-2xl text-black"></span>
              </button>
              <button className="hidden md:inline-block bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
                <span className="font-bold capitalize text-lg text-black">connect wallet</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-[100dvh]">
        {children}
      </main>
      <footer className="py-20 border-t border-black">
        <div className="container">
          <div className="grid grid-cols-10 gap-10">
            <div className="col-span-10 md:col-span-4">
              <div className="space-y-5">
                <div>
                  <Link href="/">
                    <Image
                      width="90"
                      height="30"
                      alt="Verifi Logo"
                      src="/image/VERIFI.png"
                    />
                  </Link>
                </div>
                <div className="font-semibold text-white text-base md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque veritatis, tempora ipsum similique id.
                </div>
                <div className="flex gap-10 flex-wrap">
                  <Link href="#">
                    <span className="bi-twitter text-2xl text-white"></span>
                  </Link>
                  <Link href="#">
                    <span className="bi-discord text-2xl text-white"></span>
                  </Link>
                  <Link href="#">
                    <span className="bi-twitch text-2xl text-white"></span>
                  </Link>
                  <Link href="#">
                    <span className="bi-envelope text-2xl text-white"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-5 lg:col-span-2">
              <div className="space-y-7">
                <div className="capitalize font-bold text-xl md:text-2xl text-white">product</div>
                <div className="space-y-5">
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">verify</span>
                    </Link>
                  </div>
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">popular products</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-5 lg:col-span-2">
              <div className="space-y-7">
                <div className="capitalize font-bold text-xl md:text-2xl text-white">company</div>
                <div className="space-y-5">
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">register a product</span>
                    </Link>
                  </div>
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">about &amp; contact</span>
                    </Link>
                  </div>
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">career</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-5 lg:col-span-2">
              <div className="space-y-7">
                <div className="capitalize font-bold text-xl md:text-2xl text-white">resources</div>
                <div className="space-y-5">
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">future updates</span>
                    </Link>
                  </div>
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">help &amp; assistance</span>
                    </Link>
                  </div>
                  <div>
                    <Link href="href">
                      <span className="font-medium capitalize text-base md:text-lg text-slate-100 hover:underline">privacy &amp; policy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-10">
              <div className="font-semibold text-center text-white text-base md:text-lg">
                VERI.FI &copy; {new Date().getFullYear()}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}