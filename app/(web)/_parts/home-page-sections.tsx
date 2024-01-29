import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar";
import { getBlogs } from "@/lib/data/blogs";
import { clerkClient } from "@clerk/nextjs";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Suspense } from "react";
import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function HomePageSections() {
  const blogs = await getBlogs();

  return (
    <section
      className={cn(
        "w-full max-w-lg md:w-[512px] mx-auto border-b divide-y",
        blogs.length === 0 && "border-b-0"
      )}
    >
      {blogs.length !== 0 ? (
        blogs.map((blog) => (
          <Suspense key={blog.id}>
            <BlogArticle
              userId={blog.userId}
              title={blog.title}
              body={blog.body}
              createdAt={blog.createdAt}
            />
          </Suspense>
        ))
      ) : (
        <h1 className="py-3 text-center text-muted-foreground">
          No Blogs Found
        </h1>
      )}
    </section>
  );
}

async function BlogArticle({
  userId,
  title,
  body,
  createdAt,
}: {
  userId: string;
  title: string;
  body: string;
  createdAt: Date;
}) {
  const { username, firstName, lastName, imageUrl } =
    await clerkClient.users.getUser(userId);
  const posted = formatDistanceToNow(new Date(createdAt));

  return (
    <article className="p-3 space-y-2">
      <div className="flex gap-2 items-center">
        <Link href={`/u/${userId}`}>
          <Avatar>
            <AvatarFallback>
              {firstName ? firstName[0].toUpperCase() : "U"}
            </AvatarFallback>
            <AvatarImage src={imageUrl} />
          </Avatar>
        </Link>

        <div className="flex-1">
          <h1 className="font-semibold">
            <Link href={`/u/${userId}`} className="hover:underline">
              {firstName ? `${firstName} ${lastName}` : `${username}`}
            </Link>
          </h1>
          <p className="text-sm text-muted-foreground">
            <Link href={`/u/${userId}`} className="hover:underline">
              {username}
            </Link>{" "}
            &bull; {posted}
          </p>
        </div>

        <div>
          <MoreVertical size={"16px"} />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="min-w-10"></div>
        <div className="max-w-[calc(100%-48px)]">
          <h1 className="text-lg font-medium text-wrap break-words">{title}</h1>
          <p className="text-sm whitespace-pre text-wrap break-words">{body}</p>
        </div>
      </div>
    </article>
  );
}
