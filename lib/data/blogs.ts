import prisma from "@/lib/prismadb";

// Get all the blogs ordered by descending created date.
export async function getBlogs() {
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

// Get blogs by username ordered by descending created date.
export async function getBlogsByUserId(userId: string) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return blogs;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blogs by username");
  }
}
