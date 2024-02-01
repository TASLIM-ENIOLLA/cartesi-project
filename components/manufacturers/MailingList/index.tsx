"use client";

import Title from "@/components/Title";

export default function Component() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <Title
            title="Subscribe to our mailing list"
            subtitle="Join our mailing list today for exclusive updates on this cutting-edge solution and more"
          />
          <MailInput />
        </div>
      </div>
    </section>
  );
}

function MailInput() {
  return (
    <form className="max-w-[450px] mx-auto">
      <div className="border p-2 rounded-md">
        <div className="flex items-center gap-5">
          <input
            type="email"
            name="newsletter"
            placeholder="Enter email address"
            className="border-0 focus:outline-0 text-white bg-transparent p-2 flex-1"
          />
          <button type="submit" className="bg-gradient-to-r from-teal-300 to-cyan-600 px-10 py-2 rounded-lg border-2 border-cyan-300">
            <span className="font-bold capitalize text-lg text-black">submit</span>
          </button>
        </div>
      </div>
    </form>
  )
}