import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an account",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
      />
    </main>
  );
}
