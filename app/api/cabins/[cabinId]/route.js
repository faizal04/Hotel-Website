import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    console.log(cabinId);
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}

// googleClientId= 26253432120-4af3lu3tji0997upul441q8eoh4uh6gc.apps.googleusercontent.com
// google client secreat = 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
