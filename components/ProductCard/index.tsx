export default function Component() {
  return (
    <div className="border rounded-lg">
      <div className="min-h-[200px] overflow-hidden rounded-lg bg-gray-300"></div>
      <div className="p-5 space-y-3">
        <div className="capitalize font-bold text-lg md:text-xl text-white">product</div>
        <div>
          <span className="rounded-md py-1 px-3 capitalize text-sm font-semibold bg-pink-300">healthcare</span>
        </div>
        <div className="one-line text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, earum.
        </div>
        <details className="relative">
          <summary className="text-white inline-block cursor-pointer capitalize hover:underline">
            see more
          </summary>
          <div
            style={{ backdropFilter: "blur(5px)" }}
            className="space-y-3 p-3 shadom-lg bg-black bg-opacity-50 border border-black rounded-lg absolute top-[130%] left-0 w-full"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold capitalize text-pink-300">product ID</span>
              <span className="font-semibold capitalize text-slate-300">WExty43w23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold capitalize text-pink-300">manufactured date</span>
              <span className="font-semibold capitalize text-slate-300">jan. 25, 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold capitalize text-pink-300">expiry date</span>
              <span className="font-semibold capitalize text-slate-300">jan. 25, 2024</span>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}