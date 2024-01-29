import { UserProfile, auth } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  const { userId } = auth();

  return (
    <main className="flex justify-center items-center">
      <UserProfile path={`/u/${userId}/edit`} routing="path" />
    </main>
  );
}
