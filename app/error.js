"use client";

import Button from "./_components/button";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6  ">
      <h1 className="text-3xl font-semibold text-[#263544]">
        Something went wrong!
      </h1>
      <p className="text-lg text-[#263544]">{error.message}</p>

      <Button
        className="inline-block bg-slate-500-500 text-white px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </Button>
    </main>
  );
}
