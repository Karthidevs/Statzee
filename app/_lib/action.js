"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { charset, generate } from "voucher-code-generator";
import { createImage } from "./dataService";

export const actionData = async (formData) => {
  const session = await auth();
  const AssignmentCode = generate({
    length: 9,
    count: 1,
    charset: charset("alphabetic"),
  });
  const image = formData.get("file");

  const data = await createImage(image, AssignmentCode[0]);

  const newAssignment = {
    code: AssignmentCode[0],
    subjectname: formData.get("SubjectName"),
    notes: formData.get("Notes"),
    userID: session.user.userId,
    createdate: `${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()} `,
    attachment_image: data
      ? `https://xpqfamlwnifazkfhtwtk.supabase.co/storage/v1/object/public/${data.fullPath}`
      : null,
  };
  revalidatePath("/dashboard");

  const { error } = await supabase.from("userData").insert([newAssignment]);

  if (error) throw new Error("Assignment could not be created");
};

export const loginAction = async (formData) => {
  const res = await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: false,
  });

  if (res.error) {
    throw new Error(res.error);
  }

  redirect("/dashboard");
};
