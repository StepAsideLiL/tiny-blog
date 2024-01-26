import type { Metadata } from "next";
import { Suspense } from "react";
import HomePageSections from "./_parts/home-page-sections";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="container">
      <Suspense fallback={<HomePageSectionsFallback />}>
        <HomePageSections />
      </Suspense>
    </main>
  );
}

function HomePageSectionsFallback() {
  return (
    <section className="pt-10 flex justify-center items-center">
      <h1 className="text-muted-foreground text-xl">Loading...</h1>
    </section>
  );
}
