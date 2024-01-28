import { auth } from "@clerk/nextjs";
import BlogForm from "@/components/form/blog-form";

export default function AddBlogPage() {
  const { userId } = auth();

  return (
    <main className="container max-w-lg md:w-[512px] mx-auto">
      {userId ? (
        <BlogForm userId={userId} />
      ) : (
        <h1 className="text-muted-foreground text-center">Error</h1>
      )}
    </main>
  );
}
