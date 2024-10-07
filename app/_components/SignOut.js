import React from "react";
import Button from "./button";
import { googleSignOutAction } from "../_lib/googleAction";

export default function SignOut() {
  return (
    <form action={googleSignOutAction}>
      <Button className="ml-4 text-white bg-red-500 hover:bg-red-600 transition duration-300 py-1 px-3 rounded-md">
        signout
      </Button>
    </form>
  );
}
