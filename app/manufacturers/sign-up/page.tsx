import Title from "@/components/Title"

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-10">
          <Title
            title="sign up"
            subtitle="Create an account for your company on VERI.FI"
          />
          <div className="max-w-[400px] mx-auto">
            <form className="space-y-10" action="">
              <fieldset className="border-t">
                <legend className="text-white capitalize px-5 text-white mx-auto mb-5">account profile</legend>
                <div className="space-y-10">
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">email address</div>
                    <input type="text" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">create password</div>
                    <input type="password" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">confirm password</div>
                    <input type="password" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border-t">
                <legend className="text-white capitalize px-5 text-white mx-auto mb-5">company profile</legend>
                <div className="space-y-10">
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">company name</div>
                    <input type="text" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">company category</div>
                    <select className="p-4 rounded-lg capitalize outline-none font-semibold bg-white block w-full">
                      <option value="">---</option>
                      <option value="it">information technology</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">company description</div>
                    <textarea rows={4} className="p-4 rounded-lg outline-none font-semibold resize-none bg-white block w-full"></textarea>
                  </div>
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">company certificate</div>
                    <input type="text" className="p-4 rounded-lg outline-none font-semibold bg-white block w-full" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-white capitalize font-semibold">country</div>
                    <select className="p-4 rounded-lg capitalize outline-none font-semibold bg-white block w-full">
                      <option value="">---</option>
                      <option value="ngn">nigeria</option>
                      <option value="usa">united states of america  </option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <div>
                <button type="submit" className="block w-full bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
                  <span className="font-bold capitalize text-lg text-black">sign up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}