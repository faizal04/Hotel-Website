import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

async function page() {
  const session = await auth();

  return (
    <div>
      <h1 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome {session.user.name}
      </h1>
    </div>
  );
}

export default page;
