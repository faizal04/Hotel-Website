"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";
import { format } from "date-fns";

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
export async function deleteBooking(id) {
  const session = await auth();
  if (!session.user) throw new Error("You are not Logged in");
  const guestBookings = await getBookings(session.user.guestId);
  const bookingIds = guestBookings.map((booking) => booking.id);
  if (!bookingIds.includes(id))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
// id, updatedFields,
export async function updateBooking(formData) {
  const id = Number(formData.get("bookingId"));
  //authorization check
  const session = await auth();
  if (!session.user) throw new Error("You are not Logged in");
  const guestBookings = await getBookings(session.user.guestId);
  const bookingIds = guestBookings.map((booking) => booking.id);
  if (!bookingIds.includes(id))
    throw new Error("You are not allowed to Update this booking");

  const updatedFields = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
  };
  //updatingfields
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  //error handling
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  //revalidate
  revalidatePath("/account/reservations/edit");

  //redirecting
  redirect("/account/reservations");
}
export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session.user) throw new Error("You are not Logged in");
  console.log(format(bookingData.startDate, "dd MMM yyyy"));
  const newBooking = {
    ...bookingData,
    startDate: format(bookingData.startDate, "dd MMM yyyy"),
    endDate: format(bookingData.endDate, "dd MMM yyyy"),
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);
  console.log(newBooking);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }
  revalidatePath("/cabins");

  redirect("/thankyou");
}
