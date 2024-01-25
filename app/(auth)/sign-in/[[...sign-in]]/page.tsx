import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignInPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </main>
  );
}
