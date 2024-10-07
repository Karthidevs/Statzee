import { UserCircleIcon } from "@heroicons/react/24/solid";
import NextAuth from "next-auth";
import { auth } from "../_lib/auth";
import Link from "next/link";
import SearchInput from "./SearchInput";
import {
  getAllAssignment,
  getAssignment,
  getAssignmentDetails,
} from "../_lib/dataService";
import SignOut from "./SignOut";

export const Navigator = async () => {
  const session = await auth();
  const arr = await getAllAssignment();

  return (
    <nav className="flex bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg h-16 p-3 justify-between items-center gap-7">
      <Link href="/">
        <h1 className="font-sans font-bold text-3xl text-white">StAtZee</h1>
      </Link>

      {session?.user && (
        <div className="relative">
          <SearchInput data={arr} />
        </div>
      )}

      <div className="flex items-center relative">
        {session?.user?.image ? (
          <img
            className="h-10 rounded-full border-2 border-white shadow-lg cursor-pointer hover:opacity-80 transition duration-300"
            src={session.user.image}
            alt="User Profile"
          />
        ) : (
          <UserCircleIcon className="h-10 text-white cursor-pointer hover:opacity-80 transition duration-300" />
        )}

        {/* Sign Out Button */}
        {session?.user && <SignOut />}
      </div>
    </nav>
  );
};
