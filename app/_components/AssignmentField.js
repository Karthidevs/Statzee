import AssignmentForm from "./Assignment_Form";

export default function AssignmentField() {
  const date = new Date();

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center border-b-2 border-gray-300 p-4 bg-slate-200">
          <p className="text-sm font-semibold text-gray-700">{`${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}</p>
          <h2 className="text-lg font-bold text-gray-800">
            Create your Assignment
          </h2>
        </div>
        <div className="p-6">
          <AssignmentForm />
        </div>
      </div>
    </div>
  );
}
