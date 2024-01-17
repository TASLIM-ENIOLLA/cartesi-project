import Link from "next/link";
import Image from "next/image";

import { routes, type RouteType } from "../Header/routes";

export default function Page() {
  return (
    <footer className="py-20 bg-gray-100">
      <div className="container">
        <div className="space-y-10">
          <div className="text-center space-y-5">
            <div className="inline-block">
              <Link href="/">
                <Image src="/favicon.ico" alt="Logo image" width="60" height="60" />
              </Link>
            </div>
            <div className="max-w-[600px] mx-auto text-base md:text-lg font-normal text-gray-600">
              Step into a new era of product security with Blockchain Product Authenticator Project, where every block is fortified with cryptographic precision, ensuring unwavering authenticity. Elevate your trust in digital interactions and join us as we redefine the standards of blockchain security.
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-5">
              {routes.map(({ altName, href }: RouteType, index: number) => (
                <Link key={index} className="capitalize underline decoration-dotted text-gray-600" href={href}>
                  {altName}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="capitalize text-md md:text-lg font-normal text-gray-600">
              &copy; { new Date().getFullYear() } Cartesi project. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * <footer className="py-20 bg-gray-100">
      <div className="container space-y-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center md:text-left">
            <div className="space-y-5">
              <div className="inline-block">
                <Link href="/">
                  <Image src="/favicon.ico" alt="Logo image" width="40" height="40" />
                </Link>
              </div>
              <p className="capitalize text-justify text-md md:text-lg font-normal text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium, ipsam ullam soluta commodi, provident neque sed nulla, quas illum voluptas! Laborum possimus eligendi fuga!
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="space-y-5">
              <div className="capitalize font-normal text-xl md:text-2xl">quick links</div>
              <div className="flex flex-col space-y-2">
                {routes.map(({altName, href, symbol}: RouteType, index: number) => (
                  <Link key={index} href={href} className="text-md md:text-lg capitalize text-gray-600">
                    {altName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="space-y-5">
              <div className="capitalize font-normal text-xl md:text-2xl">services</div>
              <div className="flex flex-col space-y-2">
                {Array(5).fill("").map((_: string, index: number) => (
                  <Link
                    key={index}
                    href="route"
                    className="text-md md:text-lg capitalize text-gray-600"
                  >
                    Lorem, ipsum.
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="space-y-5">
              <div className="capitalize font-normal text-xl md:text-2xl">contact info</div>
              <div className="flex flex-col space-y-2">
                <address className="text-md md:text-lg text-gray-600">
                  38, Ilorin Street, Off Adelabu Road, Surulere, Lagos.
                </address>
                <Link href="mailto://dadegoke2005@yahoo.com" className="text-md md:text-lg text-gray-600">
                  dadegoke2005@yahoo.com
                </Link>
                <Link href="tel:// +234-0802-725-2705" className="text-md md:text-lg text-gray-600">
                  +234-0802-725-2705
                </Link>
                <Link href="tel://+234-0806-260-5130" className="text-md md:text-lg text-gray-600">
                  +234-0806-260-5130
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="capitalize text-md md:text-lg font-normal text-gray-600">
            &copy; { new Date().getFullYear() } Doyen Hospitality Consultant Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
 * 
 * 
*/