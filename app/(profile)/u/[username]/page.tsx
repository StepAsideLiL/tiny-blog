export default function UsernamePage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <main className="container">
      <h1>{params.username}</h1>
    </main>
  );
}
