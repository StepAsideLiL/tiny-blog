import { UserButton, auth } from "@clerk/nextjs";

export default function UserAvatar() {
  const { userId } = auth();

  return (
    <>
      <UserButton
        afterSignOutUrl="/"
        userProfileMode="navigation"
        userProfileUrl={`/u/${userId}/edit`}
      />
    </>
  );
}
