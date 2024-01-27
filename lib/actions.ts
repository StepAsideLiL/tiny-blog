"use server";

import prisma from "@/lib/prismadb";
import { PostBlogForm } from "@/lib/type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function postBlog(data: PostBlogForm) {
  try {
    await prisma.blog.create({
      data: {
        ...data,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Unable to create blog.");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
