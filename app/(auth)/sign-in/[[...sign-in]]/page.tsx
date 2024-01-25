import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
