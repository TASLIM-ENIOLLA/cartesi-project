import ProductCard from "@/components/ProductCard";

export default function Page() {
  return (
    <section className="">
      <div className="grid grid-cols-4 gap-10">
        {Array(7).fill("").map((_: string, index: number) => (
          <div className="col-span-4 md:col-span-1" key={index}>
            <ProductCard />
          </div>
        ))}
      </div>
    </section>
  );
}
