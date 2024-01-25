import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function UserAvatar() {
  return (
    <>
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          baseTheme: dark,
        }}
      />
    </>
  );
}
