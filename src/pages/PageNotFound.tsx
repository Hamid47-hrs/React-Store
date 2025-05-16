import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-[calc(100vh-155px)] bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center px-6 py-12 animate-fade-in rounded-2xl">
      <div className="max-w-xl text-center bg-white p-10 rounded-2xl shadow-2xl transition hover:scale-105 duration-300">
        <h1 className="text-7xl font-extrabold text-pink-600 drop-shadow-lg mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found😕
        </p>
        <p className="text-gray-600 mb-6">
          The address might be incorrect or the page may have been removed.
        </p>
        <Link
          to="/store"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-pink-400 hover:scale-105 transition duration-300"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
