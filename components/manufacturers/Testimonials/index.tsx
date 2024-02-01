import Title from "@/components/Title";

export default function Component() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <Title
            title="testimonials"
            subtitle="Get inspired straight from the source"
          />
          <div className="grid grid-cols-12 gap-10">
            {Array(8).fill("").map((_: string, index: number) => (
              <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4">
                <TestimonialCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard() {
  return (
    <div className="p-5 border rounded-lg space-y-5 bg-black bg-opacity-25">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full w-[40px] h-[40px] bg-red-300"></div>
          <div>
            <div className="text-slate-200 font-semibold">Jerome Salone</div>  
            <StarRating rating={5} />
          </div>
        </div>
        <div>
          <span className="text-slate-200">4 days ago</span>
        </div>
      </div>
      <div className="font-semibold text-white capitalize text-base md:text-lg">
        Get inspired straight from the source
      </div>
      <div className="font-medium text-white text-justify capitalize text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta nemo excepturi praesentium consectetur doloremque consequatur, possimus reprehenderit eaque saepe?
      </div>
    </div>
  );
}

type StarRating = {
  rating: number
}

function StarRating({ rating }: StarRating) {
  return (
    <div className="flex gap-2">
      {(rating < 1 ? (
        <span className="bi-star text-yellow-300"></span>  
      ): Array(rating > 5 ? 5 : rating).fill("").map((_: string, index: number) => (
        <span key={index} className="bi-star-fill text-yellow-300"></span>
      )))}
    </div>
  );
}