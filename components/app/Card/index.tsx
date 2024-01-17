import Image from "next/image";

type CardPropsType = {
  title: string,
  subtitle: string,
  number: string | number,
}

export default function Component({ number, title, subtitle }: CardPropsType) {
  return (
    <div className="rounded-lg cursor-pointer overflow-hidden transition duration-750 linear shadow-md hover:shadow-xl border-t-2 hover:border-purple-600">
      <div className="px-5 py-10">
        <div className="space-y-10 text-center">
          <div className="relative py-10">
            <div className="text-white font-semibold text-3xl relative z-10">{number}</div>
            <Image
              alt="Logo"
              width="140"
              height="70"
              src="/images/abstract/1.png"
              className="inline-block absolute top-[50%] left-[50%] translate-x-[-50%] z-0 translate-y-[-50%]"
            />
          </div>
          <div className="space-y-3 md:space-y-5">
            <div className="text-2xl">
              <span className="font-semibold text-gray-700 capitalize">{title}</span>
            </div>
            <div className="text-md md:text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat eveniet voluptate. Nulla, non ea velit fugit a error quia.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}