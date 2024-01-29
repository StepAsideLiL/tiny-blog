export function UserBlogsFallback() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-muted-foreground text-lg">No Blogs Posted</h1>
    </div>
  );
}

export function UserProfileFallback() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-muted-foreground text-lg">Profile Not Found</h1>
    </div>
  );
}
