export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center mt-5">
        <div className="flex flex-col gap-4 w-6/12">
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Hello world
            </button>
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="bg-emerald-100 p-4">Emerald 100</div>
            <div className="bg-emerald-900 text-white  p-4">Emerald 900</div>
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="bg-amber-100 p-4">Amber 100</div>
            <div className="bg-amber-500 text-white  p-4">Amber 500</div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-5 shadow-sm bg-white rounded-lg">shadow-sm</div>
            <div className="p-5 shadow bg-white rounded-lg">shadow</div>
            <div className="p-5 shadow-md bg-white rounded-lg">shadow-md</div>
            <div className="p-5 shadow-lg bg-white rounded-lg">shadow-lg</div>
            <div className="p-5 shadow-xl bg-white rounded-lg">shadow-xl</div>
            <div className="p-5 shadow-2xl bg-white rounded-lg">shadow-2xl</div>
          </div>
        </div>
      </div>
    </>
  );
}
