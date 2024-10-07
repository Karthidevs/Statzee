"use client";

import { getAssignmentDetails } from "../_lib/dataService";

export default function AsideComponent({ assignData, assignmentDetails }) {
  const getAssignmentHandler = async (code) => {
    const data = await getAssignmentDetails(code);
    assignmentDetails(data);
  };

  return (
    <div className="flex flex-col h-full justify-between p-1 text-center ">
      <div className=" mt-[120px] flex flex-col gap-2 text-center bg-slate-100  py-1 w-full  h-72 ">
        <h2>Review previous work</h2>
        <ul className="p-2 flex flex-col gap-1 overflow-y-auto  ">
          {assignData.map((item) => (
            <li
              onClick={() => getAssignmentHandler(item.code)}
              key={item.code}
              title={`created on:${item.createdate}`}
              className="bg-white p-3 border border-gray-300 rounded-md shadow-sm transition-transform duration-200 hover:bg-gray-200 hover:scale-105 cursor-pointer"
            >
              {item.code}
            </li>
          ))}
        </ul>
        {assignData.length === 0 && <p>No Assignment</p>}
      </div>
    </div>
  );
}
