import { Suspense } from "react";
import UserBlogs from "./_parts/user-blogs";
import { UserBlogsFallback } from "@/components/fallbacks";

export default function UsernamePage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <main className="container">
      <h1>{params.username}</h1>
      <Suspense fallback={<UserBlogsFallback />}>
        <UserBlogs username={params.username} />
      </Suspense>
    </main>
  );
}
