"use client";

import React from "react";

import GoogleLogin from "./GoogleLogin";

export default function SignInButton() {
  return (
    <div className=" mr-auto ml-auto mt-28 w-[20rem] h-[9rem]  bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Join Us with Google
        </h2>
        <p className="text-gray-600 mb-6">
          Sign in to access personalized features and manage your assignments.
        </p>
        <div className="w-full">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
