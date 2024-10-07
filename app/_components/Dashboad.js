"use client";

import React, { useState } from "react";
import AsideComponent from "./AsideComponent";
import AssignmentArea from "./AssignmentArea";
import AssignmentStudentView from "./AssignmentStudentView";
import CustomLink from "./Link";
import AssignmentOption from "./AssignmentOptions";

export default function Dashboad({ assignmentData }) {
  const [assignment, setAssignment] = useState();

  const assignmentDetailsHandler = (data) => {
    setAssignment(data);
  };

  return (
    <div className=" text-white grid grid-cols-[14rem_1fr] h-full bg-white  ">
      <aside className="  h-full border-2 text-base font-semibold border-solid border-gray-200 text-black">
        <AsideComponent
          assignmentDetails={assignmentDetailsHandler}
          assignData={assignmentData}
        />
      </aside>
      {/* {!assignment ? ( */}
      <div className="text-black">
        <AssignmentArea assignmenDetailsData={assignment} />
      </div>
    </div>
  );
}
