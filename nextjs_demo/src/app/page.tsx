export default async function Home() {
  const res = await fetch("http://localhost:8000/todo");
  const todos = await res.json();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Backend Connection Test</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  );
}