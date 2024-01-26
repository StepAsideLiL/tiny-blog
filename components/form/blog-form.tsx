"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/shadcn-ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";
import { Textarea } from "@/components/shadcn-ui/textarea";
import { useState } from "react";
import postBlog from "@/lib/actions";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Can not post blog with empty title." })
    .max(30, { message: "Can not post blog title more than 50 characters." }),
  body: z
    .string()
    .min(1, { message: "Can not post empty blog." })
    .max(300, { message: "Can not post blog with more than 500 characters." }),
});

export default function BlogForm() {
  const [titleCount, setTitleCount] = useState(50);
  const [bodyCount, setBodyCount] = useState(500);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      userId: "l",
      ...values,
    };
    postBlog(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-2 space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="px-3 py-2 border">
              <FormControl>
                <Input
                  placeholder="Title of your opinion"
                  {...field}
                  autoComplete="off"
                  className="p-0 flex-1 focus-visible:ring-0 border-none active:border-none focus-visible:ring-offset-0"
                  onChangeCapture={(e) => {
                    setTitleCount(50 - e.currentTarget.value.length);
                  }}
                />
              </FormControl>
              <div className="text-muted-foreground text-xs">
                {titleCount} / 50
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className="px-3 py-2 border">
              <FormControl>
                <Textarea
                  placeholder="State your opinion"
                  {...field}
                  rows={5}
                  autoComplete="off"
                  className="p-0 focus-visible:ring-0 border-none active:border-none focus-visible:ring-offset-0"
                  onChangeCapture={(e) => {
                    setBodyCount(500 - e.currentTarget.value.length);
                  }}
                />
              </FormControl>
              <div className=" text-muted-foreground text-xs">
                {bodyCount} / 500
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button size={"sm"} type="submit">
            Post
          </Button>
        </div>
      </form>
    </Form>
  );
}
