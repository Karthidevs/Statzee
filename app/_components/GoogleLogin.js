import React from "react";
import { googleSigninAction } from "../_lib/googleAction";

export default function GoogleLogin() {
  return (
    <form action={googleSigninAction}>
      <button>
        <div className="text-gray-500 flex rounded-sm gap-1 box-border font- items-center border-2 border-gray-300 p-2 text-sm hover:cursor-pointer ">
          <img src="/search.png" width="17px" height="17px" />
          <span>Sign in with google</span>
        </div>
      </button>
    </form>
  );
}
