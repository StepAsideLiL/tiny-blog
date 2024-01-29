import { Suspense } from "react";
import UserBlogs from "./_parts/user-blogs";
import { UserBlogsFallback, UserProfileFallback } from "@/components/fallbacks";
import UserProfile from "./_parts/user-profile";

export default function UsernamePage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <main className="container w-full max-w-lg md:w-[512px] mx-auto">
      <Suspense fallback={<UserProfileFallback />}>
        <UserProfile userId={params.userId} />
      </Suspense>

      <Suspense fallback={<UserBlogsFallback />}>
        <UserBlogs userId={params.userId} />
      </Suspense>
    </main>
  );
}
