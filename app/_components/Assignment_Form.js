import React, { useState } from "react";
import Button, { FormButton } from "./button";
import { actionData } from "../_lib/action";
import { useFormStatus } from "react-dom";

export default function AssignmentForm() {
  return (
    <form
      action={actionData}
      className="flex flex-col gap-6 p-8 bg-white w-[50rem] rounded-lg shadow-xl max-w-lg mx-auto "
    >
      {/* Subject Name Field */}
      <div className="grid gap-2">
        <label
          className="text-sm font-semibold text-gray-800"
          htmlFor="subjectName"
        >
          Subject Name: <span className="text-red-400">*</span>
        </label>
        <input
          id="subjectName"
          required
          name="SubjectName"
          className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          type="text"
          placeholder="Enter the subject name"
        />
      </div>

      {/* Notes Field */}
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-gray-800" htmlFor="Notes">
          Notes: <span className="text-red-400">*</span>
        </label>
        <textarea
          id="Notes"
          required
          className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          rows="5"
          name="Notes"
          placeholder="Write your notes here..."
        ></textarea>
      </div>

      {/* Attachments Field */}
      <div className="grid gap-2">
        <label
          className="text-sm font-semibold text-gray-800"
          htmlFor="Attachments"
        >
          Attachments:
        </label>
        <input
          id="Attachments"
          type="file"
          name="file"
          accept="image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.jpeg"
          className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
        <p className="text-red-500 text-sm">
          You can attach a single file of any format.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <FormButton
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold rounded-md py-3 hover:bg-indigo-700 transition duration-200 shadow-md transform hover:scale-105"
        />
      </div>
    </form>
  );
}
