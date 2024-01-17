"use client";

import Link from "next/link";
import Template from "./__components/Template";

export default function Page() {
  return (
    <Template
      title="dashboard"
      subtitle="find all you need here"
    >
      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="p-5 rounded-lg bg-gray-300 shadow">
          <Link className="hover:underline capitalize font-semibold" href="/dashboard">
            dashboard
          </Link>
        </div>
        <div className="p-5 rounded-lg bg-gray-300 shadow">
          <Link className="hover:underline capitalize font-semibold" href="/dashboard/our-products">
            our products
          </Link>
        </div>
        <div className="p-5 rounded-lg bg-gray-300 shadow">
          <Link className="hover:underline capitalize font-semibold" href="/dashboard/register-product">
            register product
          </Link>
        </div>
        <div className="p-5 rounded-lg bg-gray-300 shadow">
          <Link className="hover:underline capitalize font-semibold" href="/dashboard/logout">
            logout
          </Link>
        </div>
      </section>
    </Template>
  );
}