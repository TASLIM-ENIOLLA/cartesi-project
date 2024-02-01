import { Fragment } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <Fragment>
      <header className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  width="70"
                  height="30"
                  alt="Verifi Logo"
                  src="/image/VERIFI.png"
                />
              </Link>
            </div>
            <div>
              <button className="hidden md:inline-block bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
                <span className="font-bold capitalize text-lg text-black">product verification</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7">
              <div className="space-y-10">
                <div className="text-5xl leading-[1.4] capitalize font-bold text-white">
                  empowering consumers, ensuring authenticity
                </div>
                <div className="font-semibold text-slate-300 capitalize text-lg md:text-xl">
                  Verify your products with confidence using our blockchain-powered authentication platform.
                </div>
                <div className="flex gap-5 flex-wrap">
                  <button className="hidden md:inline-block bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-3 rounded-lg border-2 border-cyan-300">
                    <span className="font-bold capitalize text-lg text-black">product verification</span>
                  </button>
                  <button className="hidden md:inline-block bg-transparent px-10 py-3 rounded-lg border-2 border-white">
                    <span className="font-bold capitalize text-lg text-white">product registration</span>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-slate-300 capitalize text-lg md:text-xl">
                    top companies
                  </div>
                  <div className="p-10 bg-red-100"></div>
                </div>
                <div className="flex flex-wrap gap-10">
                  <div className="space-y-2 text-center">
                    <div className="text-3xl font-bold text-white">10k</div>
                    <div className="font-semibold text-slate-300 capitalize text-lg md:text-xl">
                      products
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="text-3xl font-bold text-white">15k</div>
                    <div className="font-semibold text-slate-300 capitalize text-lg md:text-xl">
                      users
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="text-3xl font-bold text-white">2k+</div>
                    <div className="font-semibold text-slate-300 capitalize text-lg md:text-xl">
                      manufacturers
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="font-semibold text-slate-300 capitalize text-lg md:text-xl">
                      counterfeits found
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="relative h-[500px]">
                <Image
                  fill={true}
                  alt="Web3 Image"
                  className="block w-full"
                  src="/image/group-3389.png"
                  style={{ objectFit: "fill" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}