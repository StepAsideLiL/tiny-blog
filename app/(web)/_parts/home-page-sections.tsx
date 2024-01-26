export default async function HomePageSections() {
  const data = await dataDelay();

  return (
    <section className="grid grid-cols-12">
      {/* User Profile */}
      <section className="col-span-3">Profile</section>

      {/* Tyni Blog List */}
      <section className="col-span-6">Blog List</section>

      {/* Blog info and Reply */}
      <section className="col-span-3">Reply</section>
    </section>
  );
}

async function dataDelay() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return 0;
  } catch (err) {
    console.log(err);
    throw new Error("Delay failed.");
  }
}
