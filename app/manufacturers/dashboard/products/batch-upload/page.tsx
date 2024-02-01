export default function Page() {
  return (
    <section className="">
      <div className="">
        <div className="mx-auto max-w-[500px]">
          <div className="space-y-10 text-center border-2 border-gray-600 text-white py-10 px-5 rounded-lg">
            <div className="text-lg font-semibold">
              Click &apos;select file&apos; to upload. Kindly note that your csv file should contain the following fields:
            </div>
            <div>
              <label htmlFor="file-picker">
                <input type="file" hidden id="file-picker" />
                <button className="bg-gradient-to-r hover:bg-gradient-to-l from-teal-300 to-cyan-600 px-10 py-1 rounded-lg border-2 border-cyan-300">
                  <span className="font-bold capitalize text-lg text-black">select file</span>
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}