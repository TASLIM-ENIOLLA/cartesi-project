export default function Page() {
  return (
    <section className="">
      <div className="container">
        <div className="space-y-10">
          {/* <Title
            title="sign in"
            subtitle="register a product"
          /> */}
          <div className="max-w-[400px] mx-auto">
            <form className="space-y-10" action="">
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">product name</div>
                <input type="email" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">product ID</div>
                <input type="email" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">manufacture date</div>
                <input type="email" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">expiry date</div>
                <input type="email" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">product image</div>
                <input type="email" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div>
                <button type="submit" className="block w-full bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
                  <span className="font-bold capitalize text-lg text-black">add image</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}