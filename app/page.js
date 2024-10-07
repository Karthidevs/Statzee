import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { auth } from "./_lib/auth";

const josfin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function page() {
  const session = await auth();
  return (
    <div className=" flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      {/* Hero Section */}
      <div className="text-center mt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Transform Your Teaching Experience
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Create personalized assignments that inspire your students to learn
          and thrive.
        </p>
        <Link
          className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl"
          href={`${session?.user ? "/dashboard" : "/login"}`}
        >
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">
            What Teachers Are Saying
          </h2>
          <p className="italic">
            &quot;StAtZee has completely transformed my approach to teaching. My
            students are more engaged and eager to learn!&ldquo;
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">
            — Sarah T., High School Teacher
          </h2>
          <p>
            &quot;The ability to customize assignments has made a huge
            difference in my classroom dynamics.&ldquo;
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Assign to Students</h2>
          <p>Distribute assignments to your students with just a few clicks.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 text-center">
        <p className="text-gray-300">© 2024 Statzee. All rights reserved.</p>
      </footer>
    </div>
  );
}
