"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SearchInput({ data }) {
  const [searchquery, setsearchquery] = useState("");
  const da = data.filter((item) =>
    item.code.toLowerCase().startsWith(searchquery)
  );

  const pathname = usePathname();

  useEffect(() => {
    setsearchquery("");
  }, [pathname]);

  const basePath = pathname.split("/").slice(0, -1).join("/");

  return (
    <div className="relative flex flex-col">
      <input
        onChange={(e) => setsearchquery(e.target.value)}
        className="w-96 p-1 border border-gray-300 rounded-md rounded-b-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        placeholder="Code search"
        type="text"
        value={searchquery}
      />
      {searchquery && (
        <ul className="absolute bg-white mt-8 w-96 border border-gray-300 rounded-t-none shadow-lg z-10">
          {da.map((ite) => (
            <li
              className="text-gray-700 border-b border-gray-200 p-2  hover:bg-slate-200 transition duration-150"
              key={ite.id}
            >
              <Link
                className="block"
                href={`${
                  !basePath.includes("dashboard") ? "dashboard" : basePath
                }/${ite.code}`}
              >
                {ite.code}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
