import AssignmentViewer from "@/app/_components/AssignmentViewer";
import { getAssignmentDetails } from "@/app/_lib/dataService";
import Link from "next/link";

export const metadata = {
  title: "Assignments",
};

export default async function page({ params }) {
  const { searchquery } = params;
  const getAssignment = await getAssignmentDetails(searchquery);

  return (
    <div className="bg-white mt-6">
      <Link
        className="w-[30px] rounded-md  ml-5 bg-blue-500 p-2 text-white"
        href={"/dashboard"}
      >
        Back
      </Link>
      <AssignmentViewer Assigment={getAssignment} />
    </div>
  );
}
