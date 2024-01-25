import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <main className="flex justify-center items-center">
      <UserProfile path="/profile" routing="path" />
    </main>
  );
}
