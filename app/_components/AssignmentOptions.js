"use client";

import { TableCellsIcon } from "@heroicons/react/24/solid";

export default function AssignmentOption({ ontrigger }) {
  const clickHandler = () => {
    ontrigger(true);
  };
  return (
    <div className="w-full border-2 border-solid border-slate-300 p-2 flex gap-9 items-center ">
      <div className="flex gap-2 items-center    px-2 py-2 rounded-lg hover:cursor-pointer hover:bg-slate-200  ">
        <TableCellsIcon height="25px" />
        <button onClick={clickHandler} className="disabled:bg-slate-400">
          Create Assignment
        </button>
      </div>
    </div>
  );
}
