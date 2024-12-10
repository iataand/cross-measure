import { IconPlus } from "@tabler/icons-react";

export default async function CreateProfile() {
  return (
    <div>
      <h2 className="py-6 text-center text-2xl font-bold">
        Create Band Account
      </h2>
      <div className="flex justify-center">
        <form className="flex w-full max-w-[900px] flex-wrap gap-12">
          <div className="min-w-[300px] flex-1">
            <p className="py-2">Band Name</p>
            <input className="h-12 w-full border-2 border-gray-700 bg-black p-1" />
            <p className="py-2">Email</p>
            <input className="h-12 w-full border-2 border-gray-700 bg-black p-1" />
            <p className="py-2">Bio</p>
            <textarea
              className="h-32 w-full border-2 border-gray-700 bg-black p-1"
              placeholder="a few words about the band..."
            />
            <p className="py-2">Interested in</p>
            <div className="w-20">
              <div className="flex w-full min-w-40 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-gray-600 py-2 hover:bg-gray-800">
                <IconPlus />
                Add Genres
              </div>
            </div>
          </div>
          <div className="min-w-[300px] flex-1">videos here</div>
        </form>
      </div>
    </div>
  );
}
