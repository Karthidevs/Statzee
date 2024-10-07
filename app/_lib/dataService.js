import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { auth } from "./auth";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (newUser) => {
  const { data, error } = await supabase.from("user").insert([newUser]);
  if (error) {
    throw new Error("Unable to create new user");
  }
  return data;
};

export const getUser = async (email) => {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .single();
  // no error in the guest
  return data;
};

export const getAssignment = async (userid) => {
  const { data, error } = await supabase
    .from("userData")
    .select("*")
    .eq("userID", userid);
  revalidatePath("/dashboard");

  return data;
};

export const getAssignmentDetails = async (code) => {
  const { data, error } = await supabase
    .from("userData")
    .select("*")
    .eq("code", code)
    .single();

  if (error) {
    throw new Error("Unable to fetch user data");
  }
  return data;
};

export const createImage = async (image, code) => {
  const session = await auth();
  if (!(image instanceof File) || !image.name || image.size === 0) {
    return null; // or handle it in a way that suits your needs
  }
  const { data, error } = await supabase.storage
    .from("attachments")
    .upload(session?.user.userId + "/" + code + "/" + uuidv4(), image);
  if (error) {
    throw new Error("image not sent");
  }
  return data;
};
