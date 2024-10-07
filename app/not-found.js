import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center    
 bg-white"
    >
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Page Not Found</p>
      <div className="mt-8">
        <Link
          href="/"
          className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
