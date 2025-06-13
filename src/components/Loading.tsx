import { Loader } from "lucide-react";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-12 animate-fade-in rounded-2xl">
      <div className="max-w-xl text-center bg-white p-10 rounded-2xl shadow-2xl transition hover:scale-105 duration-300">
        <p className="flex justify-center items-center text-5xl font-bold text-pink-600 drop-shadow-lg mb-4">
          Loading
          <Loader className="mx-5 text-5xl font-bold animate-spin h-8 w-8" />
        </p>
      </div>
    </div>
  );
}

export default Loading;
