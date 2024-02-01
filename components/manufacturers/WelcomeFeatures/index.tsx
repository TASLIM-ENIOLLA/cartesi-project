export default function Component() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <div className="max-w-[600px]">
            <div className="text-3xl leading-[1.5] text-white font-bold">
              Welcome to VERI.FI, we are all about combating counterfiets all around the world
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="col-span-3 md:col-span-1">
              <div className="border-t hover:border-teal-300 hover:text-teal-300 text-white space-y-5 py-5">
                <div className="capitalize font-bold text-xl md:text-2xl">sign up</div>
                <div className="font-semibold capitalize text-base md:text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi temporibus error provident obcaecati! Iusto harum veritatis itaque tenetur eius rem.
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="border-t hover:border-teal-300 hover:text-teal-300 text-white space-y-5 py-5">
                <div className="capitalize font-bold text-xl md:text-2xl">upload product</div>
                <div className="font-semibold capitalize text-base md:text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi temporibus error provident obcaecati! Iusto harum veritatis itaque tenetur eius rem.
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="border-t hover:border-teal-300 hover:text-teal-300 text-white space-y-5 py-5">
                <div className="capitalize font-bold text-xl md:text-2xl">check report</div>
                <div className="font-semibold capitalize text-base md:text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi temporibus error provident obcaecati! Iusto harum veritatis itaque tenetur eius rem.
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="hidden md:inline-block bg-gradient-to-r from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
              <span className="font-bold capitalize text-lg text-black">launch project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}