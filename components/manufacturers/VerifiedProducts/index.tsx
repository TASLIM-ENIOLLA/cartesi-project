import ProductCard from "@/components/ProductCard";

import Title from "@/components/Title";

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <Title
            title="most verified products"
            subtitle="Products that have been verified"
          />
          <div className="grid grid-cols-4 gap-10">
            {Array(7).fill("").map((_: string, index: number) => (
              <div className="col-span-4 md:col-span-1" key={index}>
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}