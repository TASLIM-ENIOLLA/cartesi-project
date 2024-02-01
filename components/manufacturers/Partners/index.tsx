import Image from "next/image";

import Title from "@/components/Title";

export default function Component() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <Title
            title="our partners"
            subtitle="Meet our well renowned and recognised partners"
          />
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {Array(5).fill("").map((_: string, index: number) => (
              <Image
                key={index}
                width="150"
                height="40"
                alt="Cartesi Logo"
                src="/image/cartesi.png"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}