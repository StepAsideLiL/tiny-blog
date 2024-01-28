import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await currentUser();

  redirect(`/u/${user?.username}`);
}
