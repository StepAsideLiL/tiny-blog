import { clerkClient } from "@clerk/nextjs";
import Image from "next/image";

export default async function UserProfile({ userId }: { userId: string }) {
  const { username, firstName, lastName, imageUrl } =
    await clerkClient.users.getUser(userId);

  return (
    <section className="border-b p-3">
      <section className="flex items-center gap-2">
        <Image
          src={imageUrl}
          alt={`Profile picture of ${username}`}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />

        <div>
          <h1 className="text-xl font-medium">
            {firstName ? `${firstName} ${lastName}` : `${username}`}
          </h1>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </section>
    </section>
  );
}
