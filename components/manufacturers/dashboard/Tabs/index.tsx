"use client";

import Link from "next/link";

import { tabs, type Tabs } from "./$props/tabs";

export default function PageTabs() {
  return (
    <div className="flex gap-3 border-b-2 border-cyan-300">
      {tabs.map(({ href, title }: Tabs, index: number) => {
        const active = href === "tabRoute";
        const bgClass = (
          active
          ? "bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 text-black"
          : "bg-black bg-opacity-25 text-white "
        );

        return (
          <Link href={href} key={index} className={`rounded-tl-lg rounded-tr-lg py-3 px-5 outline-none ${bgClass}`}>
            <span className="font-semibold capitalize">{title}</span>
          </Link>
        )
      })}
    </div>
  );
}