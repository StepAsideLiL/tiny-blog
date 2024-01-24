"use client";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function UserAvatar() {
  const { theme } = useTheme();

  return (
    <>
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
        }}
      />
    </>
  );
}
