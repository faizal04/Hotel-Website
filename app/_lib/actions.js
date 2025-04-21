"use server";

const { redirect } = require("next/navigation");
const { signIn } = require("./auth");

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
