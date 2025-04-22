"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

const { signIn, signOut, auth } = require("./auth");

export async function updateGuest(formData) {
  const session = await auth();
  if (!session.user) throw new Error("You are not Logged in");
  const nationality = formData.get("nationality");
  const nationalID = formData.get("nationalID");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Your National Id is not valid");
  }
  const updatedData = { nationality, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");

  return data;
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
