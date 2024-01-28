import BlogForm from "@/components/form/blog-form";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar";
import { Button } from "@/components/shadcn-ui/button";
import { Separator } from "@/components/shadcn-ui/separator";
import getBlogs from "@/lib/data/blogs";
import { auth, clerkClient } from "@clerk/nextjs";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default async function HomePageSections() {
  const { userId } = auth();
  const blogs = await getBlogs();

  return (
    <section className="w-full lg:grid lg:grid-cols-12 flex justify-center">
      {/* User Profile */}
      <section className="col-span-3 hidden lg:block">Profile</section>

      {/* Tyni Blog List */}
      <section className="max-w-lg w-[512px] lg:max-w-5xl lg:w-full lg:col-span-6 col-span-12 border-x border-muted border-b">
        <section className="divide-y">
          {userId ? (
            <BlogForm userId={userId} />
          ) : (
            <div className="p-2 text-center">
              <Button variant={"outline"} asChild>
                <Link href={"/sign-up"}>Sign up to write a blog</Link>
              </Button>
            </div>
          )}

          {blogs.length !== 0 ? (
            blogs.map(async (blog) => {
              const user = await clerkClient.users.getUser(blog.userId);
              const posted = formatDistanceToNow(new Date(blog.createdAt));

              return (
                <article key={blog.id} className="p-3 space-y-2">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarFallback>
                        {user.firstName ? user.firstName[0].toUpperCase() : ""}
                      </AvatarFallback>
                      <AvatarImage src={user.imageUrl} />
                    </Avatar>

                    <div>
                      <h1 className="text-sm font-medium">
                        {user.firstName
                          ? `${user.firstName} ${user.lastName}`
                          : "(no name)"}
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        {user.username} &bull; {posted}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="w-10"></div>

                    <div className="flex-1">
                      <Separator orientation="horizontal" />

                      <h1 className="font-medium">{blog.title}</h1>

                      <p className="font-light whitespace-pre-line">
                        {blog.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <h1 className="py-3 text-center text-muted-foreground">
              No Blogs Found
            </h1>
          )}
        </section>
      </section>

      {/* Blog info and Reply */}
      <section className="col-span-3 hidden lg:block">Reply</section>
    </section>
  );
}
