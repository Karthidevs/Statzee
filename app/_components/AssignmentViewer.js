export default function AssignmentViewer({ Assigment }) {
  return (
    <div className="ml-auto mr-auto mt-20   w-full">
      <div className="bg-white text-lg max-w-max p-7 border border-gray-300 shadow-lg rounded-lg mx-auto mt-20">
        <h1 className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 font-sans text-white text-3xl uppercase rounded-t-lg shadow-md">
          {Assigment.subjectname}
        </h1>
        <p className="p-6 text-gray-800 whitespace-pre-wrap leading-relaxed">
          {Assigment.notes}
        </p>
        {Assigment.attachment_image ? (
          <div className="border-t-2 flex flex-wrap items-center gap-5 border-gray-300 p-4">
            <h3 className="font-semibold text-gray-700">Attachments:</h3>
            <a
              className="text-blue-700 hover:text-blue-800 underline transition duration-200"
              key={Assigment.code}
              href={Assigment.attachment_image}
              download="attchments"
              target="_black"
            >
              Download Attachment
            </a>
          </div>
        ) : (
          <p className="ml-6 pb-3 text-red-500">No attachments</p>
        )}
      </div>
    </div>
  );
}
