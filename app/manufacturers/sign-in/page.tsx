import Title from "@/components/Title"

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <Title
            title="sign in"
            subtitle="register a product"
          />
          <div className="max-w-[400px] mx-auto">
            <form className="space-y-10" action="">
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">email address</div>
                <input type="email" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div className="space-y-1">
                <div className="text-white capitalize font-semibold">password</div>
                <input type="password" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
              </div>
              <div>
                <button type="submit" className="block w-full bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
                  <span className="font-bold capitalize text-lg text-black">sign in</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}