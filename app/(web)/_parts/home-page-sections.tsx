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

export default async function HomePageSections() {
  const { userId } = auth();
  const blogs = await getBlogs();

  return (
    <section className="grid grid-cols-12">
      {/* User Profile */}
      <section className="md:col-span-3 col-span-2">Profile</section>

      {/* Tyni Blog List */}
      <section className="md:col-span-6 col-span-8 border-x border-muted divide-y border-b">
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
                    <h1 className="text-sm font-medium">{`${user.firstName} ${user.lastName}`}</h1>
                    <p className="text-sm text-muted-foreground">
                      {user.username}
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

      {/* Blog info and Reply */}
      <section className="md:col-span-3 col-span-2">Reply</section>
    </section>
  );
}
