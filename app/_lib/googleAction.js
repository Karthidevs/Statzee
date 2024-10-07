"use server";

import { auth, signIn, signOut } from "./auth";
import { getUser } from "./dataService";

export const googleSigninAction = async () => {
  await signIn("google", { redirectTo: "/dashboard" });
};

export const googleSignOutAction = async () => {
  await signOut({ redirectTo: "/" });
};

export const emailAction = async (formdata) => {
  await signIn("email", formdata);
};
