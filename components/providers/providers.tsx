import { ThemeProvider } from "./theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </>
  );
}
