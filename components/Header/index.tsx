import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <header className="">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-20 py-5">
            <div>
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  alt=""
                  width="40"
                  height="40"
                />
              </Link>
            </div>
            <div className="flex gap-10 uppercase font-semibold text-slate-600">
              <Link className="text-sm md:text-base" href="/">home</Link>
              <Link className="text-sm md:text-base" href="/about">about</Link>
              <Link className="text-sm md:text-base" href="/team">team</Link>
            </div>
          </div>
          <div className="flex gap-10 uppercase font-semibold text-slate-600">
            <Link className="text-sm md:text-base" href="/log-in">log in </Link>
            <Link className="text-sm md:text-base" href="/register">register</Link>
          </div>
        </div>
      </div>
    </header>
  );
}