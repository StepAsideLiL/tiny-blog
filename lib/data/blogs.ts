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
export async function getBlogsByUsername(username: string) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        username: username,
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
