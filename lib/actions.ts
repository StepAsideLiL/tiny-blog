"use server";

import { PostBlogForm } from "./type";

export default async function postBlog(data: PostBlogForm) {
  console.log(data);
}
