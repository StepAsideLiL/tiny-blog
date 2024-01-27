import prisma from "@/lib/prismadb";

export default async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return blogs;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blogs");
  }
}
