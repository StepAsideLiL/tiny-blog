import BlogForm from "@/components/form/blog-form";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar";
import { Separator } from "@/components/shadcn-ui/separator";
import getBlogs from "@/lib/data/blogs";
import { auth, clerkClient } from "@clerk/nextjs";

const dummyBlogs = [
  {
    title: "hello world",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. U doloribus consequuntur natu tempora voluptatibus rem in voluptas. Cumque porro ipsa voluptatibus doloremque atque nobis, dolore, ipsam nam velit nemo tempore doloribus adipisci aliquam officia impedit culpa. Fuga animi error alias numquam corrupti harum assumenda, neque quod ducimus temporibus",
    username: "example",
    name: "Example Name",
    imageUrl:
      "https://res.cloudinary.com/dni3ahk5v/image/upload/v1703049972/qvu0kxpacsvpfxrxfgqo.jpg",
  },
  {
    title: "hello world",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. U doloribus consequuntur natu tempora voluptatibus rem in voluptas. Cumque porro ipsa voluptatibus doloremque atque nobis, dolore, ipsam nam velit nemo tempore doloribus adipisci aliquam officia impedit culpa. Fuga animi error alias numquam corrupti harum assumenda, neque quod ducimus temporibus",
    username: "example",
    name: "Example Name",
    imageUrl:
      "https://res.cloudinary.com/dni3ahk5v/image/upload/v1703049972/qvu0kxpacsvpfxrxfgqo.jpg",
  },
  {
    title: "hello world",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. U doloribus consequuntur natu tempora voluptatibus rem in voluptas. Cumque porro ipsa voluptatibus doloremque atque nobis, dolore, ipsam nam velit nemo tempore doloribus adipisci aliquam officia impedit culpa. Fuga animi error alias numquam corrupti harum assumenda, neque quod ducimus temporibus",
    username: "example",
    name: "Example Name",
    imageUrl:
      "https://res.cloudinary.com/dni3ahk5v/image/upload/v1703049972/qvu0kxpacsvpfxrxfgqo.jpg",
  },
];

export default async function HomePageSections() {
  const { userId } = auth();
  const blogs = await getBlogs();

  return (
    <section className="grid grid-cols-12">
      {/* User Profile */}
      <section className="md:col-span-3 col-span-2">Profile</section>

      {/* Tyni Blog List */}
      <section className="md:col-span-6 col-span-8 border-x border-muted divide-y border-b">
        {userId && <BlogForm userId={userId} />}

        {blogs.length !== 0 ? (
          blogs.map(async (blog) => {
            const user = await clerkClient.users.getUser(blog.userId);

            return (
              <article key={blog.id} className="p-3 space-y-2">
                <div>
                  <h1 className="text-lg">{blog.title}</h1>
                  <p className="font-light whitespace-pre-line">{blog.body}</p>
                </div>

                <Separator orientation="horizontal" />

                <div className="flex gap-2 items-center">
                  <span className="text-muted-foreground">by</span>

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
