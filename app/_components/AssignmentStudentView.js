import { Typography } from "@mui/material";

export default function AssignmentStudentView({ assignmentDataDetails }) {
  if (!assignmentDataDetails) return null;
  return (
    <div className="">
      <div className="mt-5 relative w-[50rem] h-auto border border-gray-300 rounded-lg shadow-lg bg-white text-gray-800">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-t-lg shadow-md">
            <h4 className="font-semibold text-lg">Subject:</h4>
            <h1 className="text-3xl font-extrabold">
              {assignmentDataDetails.subjectname}
            </h1>
          </div>

          {/* Notes Section */}
          <div className="flex-grow p-6">
            <h4 className="font-semibold text-xl mb-3">Notes</h4>
            <div className="border rounded-lg p-4 bg-gray-100 shadow-md">
              <Typography
                className="whitespace-pre-wrap text-gray-800"
                variant="subtitle2"
              >
                {assignmentDataDetails.notes}
              </Typography>
            </div>
          </div>

          {/* Attachments Section */}
          {assignmentDataDetails.attachment_image !== null ? (
            <div className="p-6 border-t border-gray-300 bg-gray-50 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-3">Attachments:</h4>
              <a
                className="inline-flex items-center bg-indigo-600 text-white rounded-full px-4 py-2 hover:bg-indigo-700 transition duration-200"
                key={assignmentDataDetails.code}
                href={assignmentDataDetails.attachment_image}
                download="attchments"
                target="_black"
              >
                <span className="mr-2">📎</span> Download Attachment
              </a>
            </div>
          ) : (
            <p className="ml-6 pb-3 text-red-500">No attachments</p>
          )}
        </div>
      </div>
    </div>
  );
}
