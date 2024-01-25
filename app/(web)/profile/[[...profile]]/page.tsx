import { UserProfile } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <main className="flex justify-center items-center">
      <UserProfile path="/profile" routing="path" />
    </main>
  );
}
