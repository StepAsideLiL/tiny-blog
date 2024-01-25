import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
