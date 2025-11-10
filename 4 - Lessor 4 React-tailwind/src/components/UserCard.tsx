export default function UserCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:flex md:max-w-2xl">
      <img
        className="w-full h-48 object-cover md:w-48"
        src="https://i.pravatar.cc/150?img=5"
        alt="Profile Picture"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Sarah Johnson</h2>
        <p className="text-gray-600">Frontend Developer</p>

        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
            Follow
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
