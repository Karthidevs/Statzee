"use client";
import AssignmentField from "./AssignmentField";
import AssignmentOption from "./AssignmentOptions";
import { useEffect, useState } from "react";
import AssignmentStudentView from "./AssignmentStudentView";

export default function AssignmentArea({
  assignmentDataDetails,
  assignmenDetailsData,
}) {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    if (assignmenDetailsData) {
      setShow(false);
    }
  }, [assignmenDetailsData]);

  return (
    <div className="h-full flex  flex-col w-full">
      <AssignmentOption ontrigger={setShow} />

      <main className="ml-auto mr-auto mt-9">
        {isShow && <AssignmentField />}
        {!isShow && (
          <AssignmentStudentView assignmentDataDetails={assignmenDetailsData} />
        )}
      </main>
    </div>
  );
}
