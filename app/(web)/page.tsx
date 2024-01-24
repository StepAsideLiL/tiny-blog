import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return <main className="py-2 flex justify-center">Hello, World!</main>;
}
